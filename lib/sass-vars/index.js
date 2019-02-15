'use strict';
const fs = require('fs');
const stripComments = require('strip-json-comments');
const filendir = require('filendir');

// lifted from https://github.com/davidpett/ember-cli-sass-variables and configured for our needs:
// 1. allow for multiple sass imports
// 2. configurable file names
// 3. scoped options

function getSassVars(filepath) {
  const REGEX = /\$(.+):\s+(.+);/;
  const vars = {};
  const sassFile = fs.readFileSync(filepath, 'utf8');

  stripComments(sassFile).split('\n').forEach(line => {
    const sassVar = REGEX.exec(line);
    if (!sassVar) { return; }

    let [, name, value] = sassVar;

    vars[name.trim()] = value.replace(/!default|!important/g, '').trim();
  });

  return vars;
}

module.exports = {
  name: require('./package').name,

  preBuild() {
    let ops = this.app.options['sass-vars'];
    if (!ops || !Array.isArray(ops.files)) {
      return;
    }

    ops.files.forEach(file => {
      let outputFile;

      const [ name ] = Object.keys(file);
      const filepath = file[name];
      const outputPath = `${ops.appDir}/utils/sass-vars/${name}.js`;
      const vars = getSassVars(filepath);
      const sassAsJSON = `/* eslint-disable */\nexport default ${JSON.stringify(vars)};`

      try {
        outputFile = fs.readFileSync(outputPath, 'utf8');
      } catch(e) { /* doesn't already exist */ }

      if (outputFile !== sassAsJSON) {
        // updated, re render
        filendir.writeFileSync(outputPath, sassAsJSON, 'utf8');
      }
    });
  },
};
