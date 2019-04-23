// BEGIN-SNIPPET nypr-o-gallery-overlay-slide.js
import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../../templates/components/nypr-o-gallery-overlay/slide';

export default Component.extend({
  layout,
  classNames: ['c-slide', 'u-spacing--and-half'],

  didInsertElement() {
    this._super(...arguments);
    this.register(this.element);
  },

  /**
    Gallery slide with `title`, `full`, `credit`, and `caption` keys

    @argument slide
    @type {Object}
  */

  /**
    Current one-based index

    @argument index
    @type {Number}
  */

  /**
    Total slide count

    @argument total
    @type {Number}
  */

  /**
    Current slide's one-based position

    @field count
    @type {Number}
  */
  count: computed('index', function() {
    return this.index + 1;
  }),

  calculatePosition(trigger/*, content, wormhole, options*/) {
    let { height } = trigger.getBoundingClientRect();

    return {
      style: {
        right: -25,
        top: height + 15,
      }
    }
  }

});
// END-SNIPPET
