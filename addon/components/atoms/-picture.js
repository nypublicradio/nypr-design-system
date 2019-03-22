import Component from '@ember/component';
import layout from '../../templates/components/atoms/-picture';

/**
  Picture element. Renders `<source>` elements for provided s, m, l, or xl breakpoints and images.
  @class atoms/-picture
*/
export default Component.extend({
  tagName: 'picture',
  classNames: ['picture'],
  layout,

  /**
    Extra Large Breakpoint
    @argument break-xl
    @type {Number?}
  */
  'break-xl': null,

  /**
    Image url for corresponding extra large breakpoint
    @argument src-xl
    @type {String?}
  */
  'src-xl': null,

  /**
    Large Breakpoint
    @argument break-l
    @type {Number?}
  */
  'break-l': null,

  /**
    Image url for corresponding large breakpoint
    @argument src-l
    @type {String?}
  */
  'src-l': null,

  /**
    Medium Breakpoint
    @argument break-m
    @type {Number?}
  */
  'break-m': null,

  /**
    Image url for corresponding medium breakpoint
    @argument src-m
    @type {String?}
  */
  'src-m': null,

  /**
    Small Breakpoint
    @argument break-s
    @type {String?}
  */
  'break-s': null,

  /**
    Image url for corresponding small breakpoint
    @argument src-s
    @type {String?}
  */
  'src-s': null,

  /**
    Should this image lazy load or not?
    @argument lazy
    @type {Boolean?}
  */
  lazy: false,

  /**
    Text for `alt` attribute.
    @argument alt
    @type {String?}
  */
  alt: null,
});
