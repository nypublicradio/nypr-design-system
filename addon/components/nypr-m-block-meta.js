// BEGIN-SNIPPET nypr-m-block-meta.js
import Component from '@ember/component';
import layout from '../templates/components/nypr-m-block-meta';

/**
  Display author name and comment count

  Usage:
  ```hbs
  <NyprMBlockMeta @authors={{@authors}} @commentCount={{@commentCount}} @commentRoute={{array 'comments'}}/>
  ```

  @class nypr-m-block-meta
*/
export default Component.extend({
  layout,
  classNames: ['c-block-meta', 'u-color--meta'],

  /**
    Author list

    @argument authors
    @type {Array[Object{name String}]}
  */

  /**
    Comment count

    @argument commentCount
    @type {Number}
  */

  /**
    Array of params passed to `link-to` to construct a url to the comments section

    @argument commentRoute
    @type {Array[route String, models Object|Array]}
  */

  /**
    If passed in, a plain old anchor will be rendered instead of a `link-to`

    @argument commentURL
    @type {String}
  */


});
// END-SNIPPET
