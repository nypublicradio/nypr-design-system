// BEGIN-SNIPPET nypr-o-gallery-overlay-slide.js
import Component from '@ember/component';
import { computed } from '@ember/object';
import { reads } from '@ember/object/computed';
import layout from '../../templates/components/nypr-o-gallery-overlay/slide';

export default Component.extend({
  layout,
  classNames: ['c-slide', 'u-spacing--and-half'],
  attributeBindings: ['data-test-gallery-slide'],

  'data-test-gallery-slide': reads('index'),

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
    Parameters to pass into share tools. Should have keys for:
    - facebook
    - twitter
    - reddit
    - email

    @argument share
    @type {Object}
  */

  /**
    Current slide's one-based position

    @field count
    @type {Number}
  */
  count: computed('index', function() {
    return this.index + 1;
  }),

  /**
    Manually pass in the share URL so `image` query param is in sync with
    the slide itself, and not the current scroll position.

    @accessor shareURL
    @type {String}
  */
  shareURL: computed('index', function() {
    let { protocol, host, pathname } = window.location;
    return `${protocol}//${host}${pathname}?image=${this.index}`;
  }),

  calculatePosition(trigger, content/*, wormhole, options*/) {
    const BUFFER = 10;
    let { height, right } = trigger.getBoundingClientRect();
    let { padding } = window.getComputedStyle(content);
    padding = parseInt(padding, 10);

    let distanceFromEdge = Math.abs(right - document.documentElement.clientWidth);

    return {
      style: {
        right: distanceFromEdge < padding + BUFFER ? -5 : -padding * 2,
        top: height + 15,
      }
    }
  }

});
// END-SNIPPET
