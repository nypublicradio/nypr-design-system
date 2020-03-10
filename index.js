'use strict';

const defaultTheme = 'white-label';

module.exports = {
  name: require('./package').name,
  included: function(app) {
    let { sassOptions = {} } = app.options;
    if (!sassOptions.includePaths) {
      sassOptions.includePaths = [];
    }
    sassOptions.includePaths.push('node_modules/ember-basic-dropdown/app/styles');
    app.options.sassOptions = sassOptions;

    if (! app.options.outputPaths.app.css) {
      app.options.outputPaths.app.css = {};
    }
    //build themes
    this.theme = app.options['nypr-design-system'] && app.options['nypr-design-system'].theme || defaultTheme
    if (this.theme  !== "none") {
      app.options.outputPaths.app.css[this.theme] = `/nypr-design-system/themes/${this.theme }.css`;
    }

    this._super.included.apply(this, arguments);
  },
  contentFor(type, config) {
    if (type === 'head-footer' && this.theme  !== "none") {
      return `<link integrity="" rel="stylesheet" href="${config.rootURL}assets/nypr-design-system/themes/${this.theme}.css" />`;
    }
  }
};
