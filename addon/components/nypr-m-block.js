// BEGIN-SNIPPET nypr-m-block.js
import Component from '@ember/component';
import layout from '../templates/components/nypr-m-block';
import { computed } from '@ember/object';

/**
  Display story details

  Usage:
  ```hbs
  <NyprMBlock @url='https://example.com/story' @src='https://picsum.photos/400/500' @alt='alt text' @category='news' @title='Story Title' @tease='Short summary of the story' @author='Jen Chung' @commentCount=100 />
  ```

  @class nypr-m-block
*/
export default Component.extend({
  layout,
  classNames: ['c-block'],
  classNameBindings: ['orientationClass'],

  /**
   Alt text for image. Defaults to @title if null.

   @argument alt
   @type {String}
  */
  alt: null,

  /**
    Author name

    @argument author
    @type {String}
  */
  author: null,

  /**
    Category

    @argument category
    @type {String}
  */
  category: null,

  /**
    Comment count

    @argument commentCount
    @type {Number}
  */
  commentCount: null,

  /**
    Layout orientation.
    One of `'v'` or `'h'` for vertical or horizontal.

    @argument orientation
    @type {String}
  */
  orientation: 'v',

  /**
    Compute orientation class based on `'orientation'`

    @accessor orientationClass
    @type {String}
  */
  orientationClass: computed('orientation', function() {
    switch(this.orientation) {
      case 'h':
        return 'c-block--item';
      case 'v':
        return null;
    }
  }),

  /**
    Image url

    @argument src
    @type {String}
  */
  src: null,

  /**
    Story title

    @argument title
    @type {String}
  */
  title: null,

  /**
    Story url. Will lead to comments section of given story url

    @argument url
    @type {String}
  */
  url: null,

});
// END-SNIPPET
