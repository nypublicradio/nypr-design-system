// BEGIN-SNIPPET nypr-m-block-meta.js
import Component from '@ember/component';
import layout from '../templates/components/nypr-m-block-meta';

/**
  Display author name and comment count

  Usage:
  ```hbs
  <NyprMBlockMeta @author={{@author}} @commentCount={{@commentCount}} @url={{@url}} />
  ```

  @class nypr-m-block-meta
*/
export default Component.extend({
  layout,
  classNames: ['c-block-meta', 'u-color--meta'],

  /**
    Author name

    @argument author
    @type {String}
  */

  /**
    Comment count

    @argument commentCount
    @type {Number}
  */

  /**
    Used to build a link to item's comments.

    @argument route
    @type {String}
  */

  /**
    Used to build a link to item's comments.

    @argument model
    @type {String|Model}
  */

  /**
    Used to build a link to item's comments.

    @argument hash
    @type {String}
  */

});
// END-SNIPPET
