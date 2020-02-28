function getComponentType(name) {
    let [ ,prefix] = name.split('-');
    let typePath = 'Organisms';
    switch(prefix) {
      case 'a':
          typePath = 'Atoms';
          break;
      case 'm':
          typePath = 'Molecules';
    }
    return typePath;
}

function getTitle(name) {
    let title;
    if (name.search(/nypr-\w-([\w-]+)/)) {                  // if name is 'nypr-x-xxxxxx-xxx',
        title = name.split('-').slice(2)                    // get words after 'nypr-x-',
        .map(word => word[0].toUpperCase() + word.slice(1)) // capitalize the first letter,
        .join(' ');                                         // and join with spaces between them.
    }
    return title || name;
}

module.exports = {
    locals(options) {
      const name = options.entity.name;
      return {
        type: getComponentType(name),
        title: getTitle(name) || name,
      };
    },
    
    fileMapTokens() {
      return {
        __type__(options) {
            return options.locals.type;
        }
      }
    },
  };
  