import Component from '@ember/component';
import layout from '../../templates/components/molecules/-figcaption';

/**
  `<figcaption/>` molecule for a `<figure/>` element.
  @class molecules/-figcaption
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
