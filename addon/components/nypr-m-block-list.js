import Component from '@ember/component';
import layout from '../templates/components/nypr-m-block-list';

/**
  Layout container for blocks
  @class nypr-m-block-list
  @yield {any} item Current item
  @yield {Number} index
*/
export default Component.extend({
  layout,
  classNames: ['c-block-list'],

  /**
    List of blocks to render

    @argument items
    @type {Array}
  */

  /**
    Optional heading text

    @argument heading
    @type {String}
  */
});
