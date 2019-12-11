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
    'component-lineage': {
      enabled: true,
    },
    outputPaths: {
      app: {
        css: {
          'nypr-design-system': '/assets/themes/nypr-design-system.css',
          'nypr-design-system-blue': '/assets/themes/nypr-design-system-blue.css'
        }
      }
    },
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  return app.toTree();
};
