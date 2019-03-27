'use strict';
const sander = require('sander');
const Plugin = require('broccoli-plugin');


class ToNode extends Plugin {
  constructor(inputObject, options = {}) {
    super([], {
      annotation: options.annotation,
    });

    this.object = inputObject;
  }

  build() {
    sander.writeFileSync(this.outputPath, 'node', JSON.stringify(this.object));
  }
}

module.exports = ToNode;
