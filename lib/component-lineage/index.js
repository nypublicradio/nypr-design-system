'use strict';
const mergeTrees = require('broccoli-merge-trees');
const { BroccoliMergeFiles } = require('broccoli-merge-files');

const ComponentFinder = require('./lib/component-finder');

const SLUG_REGEX = '[a-z_\\d]+(?:-[a-z_\\d]*)+';

module.exports = {
  name: require('./package').name,

  config() {
    return {
      'component-lineage': {
        searchPaths: ['addon/components', 'addon/templates/components', 'app/components', 'app/templates/components'],
        regexes: [
          (match = SLUG_REGEX) => new RegExp(`{{#?(${match})[^}]*}}`, 'gi'),
          (match = SLUG_REGEX) => new RegExp(`(?:{{|\\()#?component (?:'|")(${match})(?:'|")`, 'gi'),
        ]
      }
    };
  },

  treeForApp(app = 'app') {
    const { searchPaths, regexes } = this.project.config()['component-lineage'];

    let componentFinder = new ComponentFinder(searchPaths, { regexes })

    componentFinder = new BroccoliMergeFiles([componentFinder], {
      outputFileName: 'component-manifest.js',
      merge: this.merge,
    });

    return mergeTrees([app, componentFinder]);
  },

  merge(entries) {
    const prefix = 'export default ';
    const suffix = ';';
    let file = entries.reduce((components, [ name, contents ]) => {
      components[name] = JSON.parse(contents);
      return components;
    }, {});

    return `${prefix}${JSON.stringify(file)}${suffix}`;
  },

  isDevelopingAddon() {
    return true;
  },
};
