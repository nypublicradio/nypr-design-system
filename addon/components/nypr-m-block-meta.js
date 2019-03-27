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
  classNames: ['c-block-meta'],

  /**
    Author name

    @argument author
    @type {String}
  */
  author: null,

  /**
    Comment count

    @argument commentCount
    @type {Number}
  */
  commentCount: null,

  /**
    Story url. Will lead to comments section of given story url

    @argument url
    @type {String}
  */
  url: null,

});
// END-SNIPPET
