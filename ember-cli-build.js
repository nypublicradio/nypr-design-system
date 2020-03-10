'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {
    sourcemaps: {
      enabled: true,
    },
    babel: {
      sourceMaps: 'inline',
    },
    sassOptions: {
      sourceMap: true,
    },
    snippetSearchPaths: ['app', 'addon', 'tests/dummy/app'],
    postcssOptions: {
      compile: {
        enabled: false,
      },
    },
    'component-lineage': {
      enabled: true,
    },
    'ember-cli-storybook': {
      enableAddonDocsIntegration: true,
      componentFilePathPatterns: ['addon/components/*.js']
    },
    // 'nypr-design-system': {
    //   theme: 'gothamist'
    // },
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  return app.toTree();
};
