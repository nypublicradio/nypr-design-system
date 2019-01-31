'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {
    'sass-vars': {
      appDir: 'tests/dummy/app',
      files: [
        {colors: 'app/styles/nypr-design-system/vars/_colors.scss'},
        {'wnyc-colors': 'app/styles/nypr-design-system/vars/_wnyc-colors.scss'},
        {'gothamist-colors': 'app/styles/nypr-design-system/vars/_gothamist-colors.scss'}
      ]
    }
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  return app.toTree();
};
