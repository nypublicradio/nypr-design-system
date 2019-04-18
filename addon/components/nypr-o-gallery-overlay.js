// BEGIN-SNIPPET nypr-o-gallery-overlay.js
import Component from '@ember/component';
import { A } from '@ember/array';
import { computed } from '@ember/object';
import { debounce, bind } from '@ember/runloop';

import layout from '../templates/components/nypr-o-gallery-overlay';

/**
  Gallery overlay

  @class nypr-o-gallery-overlay
  @yield {Hash} hash
  @yield {Component} billboard `nypr-o-gallery-overlay/billboard`
*/
export default Component.extend({
  layout,
  classNames: ['c-article__gallery'],

  init() {
    this._super(...arguments);
    if (typeof FastBoot === 'undefined') {
      this.set('slideRefs', A([]));
      this._boundListener = bind(this, '_scrollListener');
      window.addEventListener('scroll', this._boundListener);
    }
  },

  willDestroy() {
    this._super(...arguments);
    if (typeof FastBoot === 'undefined') {
      window.removeEventListener('scroll', this._boundListener);
    }
  },

  /**
    References to slide elements. Set to an empty EmberArray the `init` hook.

    @field slideRefs
    @type {Array[HTMLElement]}
  */
  slideRefs: null,

  /**
    Parent route for "return" links

    @argument parentRoute
    @type {String}
  */

  /**
    Parent route model for "return" links

    @argument parentModel
    @type {Class}
  */

  /**
    Gallery title

    @argument title
    @type {String}
  */

  /**
    Gallery images

    @argument slides
    @type {Array[Object]}
  */

  /**
    Called with current slide object, DOM element, and slide index when
    a slide enters the viewport

    @argument viewedSlide
    @type {Function}
  */

  /**
    Current slide's index. Updated directly by scroll handler.

    @field currentIndex
    @type {Number}
  */
  currentIndex: 0,

  /**
    Current slide. Derived from `currentIndex`. If there is no index yet set, it returns the first slide.

    @accessor currentSlide
    @type {HTMLElement}
  */
  currentSlide: computed('slideRefs', 'currentIndex', function() {
    if (!this.slideRefs) {
      return null;
    }

    return this.slideRefs[this.currentIndex];
  }),

  /**
    Receives a new slide and adds it to the `slideRefs` field

    @method registerSlide
    @param {HTMLElement} slideEl
    @return {void}
  */
  registerSlide(slideEl) {
    this.slideRefs.pushObject(slideEl);
  },

  /**
    Calls `viewedSlide` handler when a slide enters or exits a view

    @method _scrollListener
    @param {EventObject} event
    @return {void}
  */
  _scrollListener(/* e */) {
    debounce(this, () => {
      let i;
      let currentEl;
      let els = this.slideRefs;

      for (i = 0; i < els.length; i++) {
        let slide = els[i];
        if (inViewport(slide)) {
          currentEl = slide;
          break;
        }
      }

      if (currentEl) {
        this.viewedSlide(this.slides[i], currentEl, i);
      }
    }, 100);
  },
});
// END-SNIPPET

function inViewport(el) {
  let { top, bottom } = el.getBoundingClientRect();
  return top >= 0 && bottom <= window.innerHeight;
}
