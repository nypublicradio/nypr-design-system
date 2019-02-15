'use strict';
const fs = require('fs');

const Plugin = require('broccoli-plugin');
const glob = require('glob');

const getName = path => path.split('/').slice(-1)[0].replace('.hbs', '');

class ComponentFinder extends Plugin {
  constructor(inputNodes, options = {}) {
    super(inputNodes, {
      annotation: options.annotation,
    });

    this.options = options;
  }

  // required Broccoli Plugin method
  build() {
    const files = this.loadFiles(this.inputPaths);
    const componentTree = this.buildTree(files);
    this.writeFileTree(componentTree);
  }

  /**
   * Given a list of directories, find all the handlebars templates and read
   * their contents into memory.
   * @method loadFiles
   * @param {Array<String>} dirs array of directories to search
   * @returns {Object} component names with their corresponding `path` and `contents`
   */
  loadFiles(dirs) {
    return dirs
      .map(dir => glob.sync(`${dir}/**/*.hbs`))
      .reduce((flat, paths) => flat.concat(paths), []) // flatten [['path/1', 'path/2'], ['path/3', 'path/4']] structure
      .reduce((files, path) => {
        // build up a useful data structure
        // {
        //   "component-name": {
        //     path: "/path/to/component-name.hbs",
        //     contents: "... file contents ..."
        //   }
        // }
        let name = getName(path);
        files[name] = {
          path,
          contents: fs.readFileSync(path, 'utf-8'),
        };
        return files;
      }, {});
  }

  /**
   * Generate a lineage map for each component in given object. Each key in the object is a different component,
   * the value of which is an object with a `contents` and `path` key.
   * For each component, look at its `contents` key and pull out any components that are invoked. Then look at
   * every other
   * @method buildTree
   * @param {Object} files Discovered components keyed on their dasherized name
   * @returns {Object} map of
   */
  buildTree(files) {
    let tree = {};
    Object.keys(files).forEach(name => {
      let { contents } = files[name];
      const children = this.extractComponents(contents);
      const parents = this.findUsage(files, name);
      tree[name] = { children, parents };
    });
    return tree;
  }


  /**
   * Write out the full component tree to temporary file path to be consumed and merged by another broccoli filter
   * @method writeFiles
   */
  writeFileTree(componentTree) {
    Object.keys(componentTree).forEach(name => {
      fs.writeFileSync(`${this.outputPath}/${name}`, JSON.stringify(componentTree[name]));
    });
  }

  /**
   * Given a file's contents, extract all invoked components
   * @method extractComponents
   * @param {String} contents
   * @returns {Array} matched component names
   */
  extractComponents(contents) {
    let { regexes } = this.options;
    const matches = [];
    regexes.forEach(pattern => {
      let regex = pattern();
      let results;
      while (results = regex.exec(contents)) {
        matches.push(results[1]);
      }
    });
    return matches.length ? matches : null;
  }

  /**
   * Search the each component's `contents` in the given `componentTree` for component invocations
   * of the given `name`
   * @method findUsage
   * @param {Object} componentTree
   * @param {String} names
   * @returns {Array} matched component names
   */
  findUsage(componentTree, name) {
    let { regexes } = this.options;
    const matches = [];
    Object.keys(componentTree).forEach(component => {
      // don't bother looking at our own template
      if (component === name) {
        return;
      }
      let { contents } = componentTree[component];
      for (let i = 0; i < regexes.length; i++) {
        let pattern = regexes[i];
        let regex = pattern(name);
        let results = regex.exec(contents);
        if (results) {
          matches.push(component);
          break;
        }
      }
    });
    return matches.length ? matches : null;
  }
}

module.exports = ComponentFinder;
