// BEGIN-SNIPPET nypr-a-picture.js
import Component from '@ember/component';
import layout from '../templates/components/nypr-a-picture';
import { computed } from '@ember/object';

/**
  Picture element. Renders `<source>` elements for provided s, m, l, or xl breakpoints and images.

  Usage:
  ```hbs
  <NyprAPicture @breakXl=1000 @srcXl='https://example.com/xlarge-img.jpg' @breakL=800 @srcL='https://example.com/large-img.jpg' @alt='Descriptive alt text'/>
  ```
  @class nypr-a-picture
*/
export default Component.extend({
  tagName: 'picture',
  classNames: ['o-picture'],
  classNameBindings: ['ratioClass'],
  layout,

  ratioClass: computed('ratio', function() {
    if (this.ratio) {
      return `u-img-ratio--${this.ratio}`;
    }
  }),

  /**
    Extra Large Breakpoint
    @argument breakXl
    @type {Number}
  */
  breakXl: null,

  /**
    Image url for corresponding extra large breakpoint
    @argument srcXl
    @type {String}
  */
  srcXl: null,

  /**
    Large Breakpoint
    @argument breakL
    @type {Number}
  */
  breakL: null,

  /**
    Image url for corresponding large breakpoint
    @argument srcL
    @type {String}
  */
  srcL: null,

  /**
    Medium Breakpoint
    @argument breakM
    @type {Number}
  */
  breakM: null,

  /**
    Image url for corresponding medium breakpoint
    @argument srcM
    @type {String}
  */
  srcM: null,

  /**
    Small Breakpoint
    @argument breakS
    @type {String}
  */
  breakS: null,

  /**
    Image url for corresponding small breakpoint
    @argument srcS
    @type {String}
  */
  srcS: null,

  /**
    Should this image lazy load or not?
    @argument lazy
    @type {Boolean}
  */
  lazy: false,

  /**
    Text for `alt` attribute.
    @argument alt
    @type {String}
  */
  alt: null,

  /**
    Width for image element
    @argument width
    @type {Number}
  */

  /**
    Height for image element
    @argument height
    @type {Number}
  */
});
// END-SNIPPET
