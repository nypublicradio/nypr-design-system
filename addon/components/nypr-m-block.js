// BEGIN-SNIPPET nypr-m-block.js
import Component from '@ember/component';
import layout from '../templates/components/nypr-m-block';
import { computed } from '@ember/object';

/**
  Display story details

  Usage:
  ```hbs
  <NyprMBlock @orientation={{orientation}} @size={{size}} as |block|>
    <block.media @route={{array 'story' 'slug'}} @srcS='https://picsum.photos/800/450' @alt='alt text' />

    <block.object as |o|>
      <o.eyebrow @text='News'/>

      <o.title @h2 @route={{array 'story' 'slug'}}>
        Story Title
      </o.title>

      <o.body as |body|>
        <body.text>
          Short summary of the story
        </body.text>

        <body.meta @author='Jen Chung' @commentCount=46 />
      </o.body>
    </block.object>

  </NyprMBlock>
  ```

  @class nypr-m-block
  @yield {Hash} hash
  @yield {Component} title `nypr-m-block/title`
  @yield {Component} media `nypr-m-block/media`
  @yield {Hash} object `nypr-m-block/object`
  @yield {Component} object.eyebrow `nypr-m-block/eyebrow`
  @yield {Component} object.title `nypr-m-block/title`
  @yield {Hash} object.body `nypr-m-block/body`
  @yield {Component} object.body.text `nypr-m-block/text`
  @yield {Component} object.body.meta `nypr-m-block-meta`
*/
export default Component.extend({
  layout,
  classNames: ['c-block'],
  classNameBindings: ['orientationClass', 'sizeClass'],

  /**
    Layout orientation.
    One of `'v'` or `'h'` for vertical or horizontal.

    @argument orientation
    @type {String}
  */
  orientation: 'v',

  /**
    Block size.
    One of `'l'` or `'s'`

    @argument size
    @type {String}
  */
  size: 'l',

  /**
    Compute orientation class based on `'orientation'`

    @accessor orientationClass
    @type {String}
  */
  orientationClass: computed('orientation', function() {
    switch(this.orientation) {
      case 'h':
        return 'c-block--horizontal';
      case 'v':
        return null;
    }
  }),

  /**
    Compute size class based on `'size'`

    @accessor sizeClass
    @type {String}
  */
  sizeClass: computed('size', 'orientation', function() {
    switch(this.size) {
      case 'l':
        return this.orientation === 'h' ? 'c-block--horizontal--large' : null;
      case 's':
        // not implemented
        return;
      default:
        return null;
    }
  }),
});
// END-SNIPPET
