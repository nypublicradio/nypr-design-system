'use strict';
const sander = require('sander');

const Plugin = require('broccoli-plugin');
const glob = require('glob');

const slugify = str => str.replace(/[A-Z][a-z]*/g, ([f, ...rest], offset) =>
  (offset > 0 ? '-' : '') + f.toLowerCase() + rest.join(''));

const unslugify = str => str.replace(/[a-z][a-z]*-?/g, ([f, ...rest]) =>
  f.toUpperCase() + rest.join('').replace('-', ''));


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
    let regex = new RegExp(`(${dirs.join('|')})/`, 'gi');
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

        // strip leading paths
        let name = path.replace(regex, '').replace('.hbs', '');
        files[name] = {
          path,
          contents: sander.readFileSync(path),
        };
        return files;
      }, {});
  }

  /**
   * Generate a lineage map for each component in given object. Each key in the object is a different component,
   * the value of which is an object with a `contents` and `path` key.
   * For each component, look at its `contents` key and pull out any components that are invoked. Then look at
   * every other component to search for invokations of the current component `name`.
   * ```js
   * {
   *  'component-name': {
   *    children: ['other-component', 'nested-component'],
   *    parents: ['top-level-component', 'other-global-component'],
   *   },
   *   ...
   * }
   * ```
   * @method buildTree
   * @param {Object} files Discovered components keyed on their dasherized name
   * @returns {Object} map of found components and their invocations
   */
  buildTree(files) {
    let tree = {};
    Object.keys(files).forEach(name => {
      let { contents } = files[name];
      const children = this.extractComponents(contents);
      const parents = this.findUsage(files, name);
      tree[name] = {
        children: [...new Set(children.map(slugify))],
        parents: [...new Set(parents.map(slugify))],
      };
    });
    return tree;
  }


  /**
   * Write out the full component tree to temporary file path to be consumed and merged by another broccoli filter
   * @method writeFiles
   */
  writeFileTree(componentTree) {
    Object.keys(componentTree).forEach(name => {
      sander.writeFileSync(this.outputPath, `${name}.hbs`, JSON.stringify(componentTree[name]));
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
    return matches;
  }

  /**
   * Search the each component's `contents` in the given `componentTree` for component invocations
   * of the given `name`
   * @method findUsage
   * @param {Object} componentTree
   * @param {String} name
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
        if (regex.exec(contents)) {
          matches.push(component);
          break;
        }
        // look for unslugified versions
        regex = pattern(unslugify(name));
        if (regex.exec(contents)) {
          matches.push(component);
          break;
        }
      }
    });
    return matches;
  }
}

module.exports = ComponentFinder;
