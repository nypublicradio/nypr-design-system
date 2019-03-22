import Component from '@ember/component';
import layout from '../../templates/components/atoms/media-object';

/**
  The OOCSS Media Object [popularized by Nicole Sullivan](http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/)

  Usage:
  ```hbs
  {{#atoms/media-object as |mo|}}
    {{#mo.media}}
      Media area content, like an image
    {{/mo.media}}

    {{#mo.object}}
      Text content or other component
    {{/mo.object}}
  {{/atoms/media-object}}
  ```
  @class atoms/media-object
  @yield {Hash} mo
  @yield {Component} mo.media Yields a block
  @yield {Component} mo.object Yields a block
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
