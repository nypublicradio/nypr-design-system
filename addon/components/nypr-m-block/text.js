import Component from '@ember/component';
import layout from '../../templates/components/nypr-m-block/text';

/**
  Where some text should go within an `nypr-m-block` component

  @class nypr-m-block/text
  @yield {Block} block
*/
export default Component.extend({
  layout,
  classNames: ['c-block__dek', 'o-rte-text'],

  /**
    Text to display. Wrapped in `<p/>` tags.

    @argument text
    @type {String}
  */
});
