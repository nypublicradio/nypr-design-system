'use strict';
const mergeTrees = require('broccoli-merge-trees');
const { BroccoliMergeFiles } = require('broccoli-merge-files');
const concat = require('broccoli-concat');

const ComponentFinder = require('./lib/component-finder');
const ToNode = require('./lib/to-node');

const SLUG_REGEX = '[a-z_\\d]+(?:(?:-|/)[a-z_\\d]*)+';
const ANGLE_REGEX = '(?:[A-Z][a-z]*)+';

module.exports = {
  name: require('./package').name,

  config() {
    let options = (this.parent.app && this.parent.app.options) || (this.app && this.app.options) || {};
    let addonOptions = options['component-lineage'] || {};

    return {
      searchPaths: ['addon/components', 'addon/templates/components', 'app/components', 'app/templates/components'],
      regexes: [
        (match = SLUG_REGEX) => new RegExp(`{{#?(${match})[^}]*}}`, 'gi'),
        (match = SLUG_REGEX) => new RegExp(`(?:{{|\\()#?component (?:'|")(${match})(?:'|")`, 'gi'),
        (match = ANGLE_REGEX) => new RegExp(`<(${match})`, 'g'),
      ],
      routeOverrides: {},
      ...addonOptions,
    };
  },

  treeForApp(app = 'app') {
    const { searchPaths, regexes, routeOverrides, enabled } = this.config();

    if (!enabled) {
      return app;
    }

    let componentFinder = new ComponentFinder(searchPaths, { regexes })
    let overrides = new ToNode(routeOverrides);

    componentFinder = new BroccoliMergeFiles([componentFinder], {
      outputFileName: 'component-manifest.js',
      merge: this.merge,
    });
    overrides = concat(overrides, {
      outputFile: 'component-route-overrides.js',
      header: 'export default',
      footer: ';'
    })

    return mergeTrees([app, componentFinder, overrides]);
  },

  merge(entries) {
    const prefix = 'export default ';
    const suffix = ';';
    let file = entries.reduce((components, [ name, contents ]) => {
      name = name.replace('.hbs', '');
      components[name] = JSON.parse(contents);
      return components;
    }, {});

    return `${prefix}${JSON.stringify(file)}${suffix}`;
  },

  isDevelopingAddon() {
    return true;
  },
};
