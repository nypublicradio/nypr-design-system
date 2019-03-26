// BEGIN-SNIPPET nypr-m-figcaption.js
import Component from '@ember/component';
import layout from '../templates/components/nypr-m-figcaption';

/**
  `<figcaption/>` molecule for a `<figure/>` element.
  @class nypr-m-figcaption
*/
export default Component.extend({
  layout,

  tagName: 'figcaption',
  classNames: ['o-figure__caption', 'o-caption'],

  /**
    @argument caption
    @type {String?}
  */
  caption: null,

  /**
    @argument credit
    @type {String?}
  */
  credit: null,
});
// END-SNIPPET
