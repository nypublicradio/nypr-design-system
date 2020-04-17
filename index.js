'use strict';

const defaultTheme = 'white-label';
var glob = require('glob');
const writeFile = require('broccoli-file-creator');
const MergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: require('./package').name,
  included: function(app) {
    // include styles for ember-basic-dropdown.
    // used for the toggle-box component
    let { sassOptions = {} } = app.options;
    if (!sassOptions.includePaths) {
      sassOptions.includePaths = [];
    }
    sassOptions.includePaths.push('node_modules/ember-basic-dropdown/app/styles');
    app.options.sassOptions = sassOptions;


    // read theme settings (or use default)
    this.themes = app.options['nypr-design-system'] && app.options['nypr-design-system'].themes || [defaultTheme];
    // wrap strings in an array
    if (typeof this.themes === 'string') {
      this.themes = [this.themes]
    }

    //build themes
    if (! app.options.outputPaths.app.css) {
      app.options.outputPaths.app.css = {};
    }

    this.themes.forEach(themeName => {
      app.options.outputPaths.app.css[themeName] = `/assets/nypr-design-system/themes/${themeName}.css`;
    });

    this._super.included.apply(this, arguments);
  },
  treeForStyles() {
   let tree = this._super.treeForStyles.apply(this, arguments);

   let target = this._findHost();

   let { env } = target;

   let sassEnvironmentFile = writeFile(
     '/app/styles/current-environment.scss',
     `$environment: "${env}"`
   );

   return new MergeTrees([sassEnvironmentFile, tree]);
 },
  contentFor(type, config) {
    const titleize = function(name) {
      return name.split('-')
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(' ');
    };

    if (type === 'head-footer') {
      return this.themes
      .map((themeName, index) => {
        return `<link integrity="" rel="${index > 0 ? 'alternate ' : ''}stylesheet" href="${config.rootURL}assets/nypr-design-system/themes/${themeName}.css" title="${titleize(themeName)}" />`
      })
      .join('\n    ');
    }
  }
};
