// BEGIN-SNIPPET nypr-m-figure.js
import Component from '@ember/component';
import layout from '../templates/components/nypr-m-figure';
import { computed } from '@ember/object';

/**
  A `<figure/>` element with an optional caption.

  See [nypr-a-picture](/docs/atoms/nypr-a-picture) and [nypr-m-figcaption](/docs/atoms/nypr-m-figcaption) for additional arguments.

  Usage:
  ```hbs
  <NyprMFigure @caption='hello' @credit='getty' @src-s='https://picsum.photos/800/600' />
  ```

  @class nypr-m-figure
*/
export default Component.extend({
  tagName: 'figure',
  classNames: ['o-figure'],
  classNameBindings: ['captionAlignment'],
  attributeBindings: ['role'],

  layout,

  role: 'group',

  /**
    Specify a horizontal alignment.
    Accepts `'l'`, `'c'`, `'r'` for left, center, and right

    @argument align-caption
    @type {String?}
  */
  'align-caption': null,

  /**
    @accessor captionAlignment
    @type {String}
  */
  captionAlignment: computed('align-caption', function() {
    switch(this['align-caption']) {
      case 'l':
        return 'u-alignleft';
      case 'c':
        return 'u-aligncenter';
      case 'r':
        return 'u-alignright';
    }
  }),
});
// END-SNIPPET
