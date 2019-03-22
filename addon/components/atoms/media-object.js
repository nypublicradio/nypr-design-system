import Component from '@ember/component';
import layout from '../../templates/components/atoms/media-object';

/**
  The OOCSS Media Object [popularized by Nicole Sullivan](http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/)
  @class atoms/media-object
  @yield {Hash} mo
  @yield {Component} mo.media Abitrary block for the "media" area
  @yield {Component} mo.object Arbitrary block for the "object" area
*/
export default Component.extend({
  layout,
  classNames: ['media-object'],
  classNameBindings: ['valign'],

  /**
    Specify a vertical alignment.
    Accepts `'t'`, `'c'`, `'b'` for top, center, and bottom.

    @argument valign
    @type {String?}
    @default null
  */
  valign: null,
});
