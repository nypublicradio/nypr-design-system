'use strict';

module.exports = {
  name: require('./package').name,
  included: function(app) {
    let { sassOptions = {} } = app.options;
    if (!sassOptions.includePaths) {
      sassOptions.includePaths = [];
    }
    sassOptions.includePaths.push('node_modules/ember-basic-dropdown/app/styles');
    app.options.sassOptions = sassOptions;
    
    this._super.included.apply(this, arguments);
  },
  options: {
    outputPaths: {
      app: {
        css: {
          'white-label': '/assets/themes/white-label.css',
          'gothamist': '/assets/themes/gothamist.css'
        }
      }
    },
  }
};
