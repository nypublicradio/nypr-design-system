// BEGIN-SNIPPET nypr-o-gallery-overlay.js
import Component from '@ember/component';
import { A } from '@ember/array';
import { computed } from '@ember/object';
import { debounce, throttle, bind/*, schedule*/ } from '@ember/runloop';

import layout from '../templates/components/nypr-o-gallery-overlay';

import { inViewport } from '../helpers/in-viewport';


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
    this.set('slideRefs', A([]));
  },

  didInsertElement() {
    // make sure the body height matches the gallery height for scroll measure purposes
    if (this.takeover) {
      this._boundResizeListener = bind(this, '_setBodyHeight');
      window.addEventListener('resize', this._boundResizeListener);
      this._setBodyHeight();
    }

    // track which slide is on screen
    this._boundScrollListener = bind(this, '_activeSlideWatcher');
    window.addEventListener('scroll', this._boundScrollListener);
  },

  willDestroy() {
    this._super(...arguments);
    if (typeof FastBoot === 'undefined') {
      // clear watchers for body height and currently viewed slide
      window.removeEventListener('scroll', this._boundListener);
      window.removeEventListener('resize', this._boundResizeListener);
      document.body.style.height = '';
    }
  },

  /**
    References to slide elements. Set to an empty EmberArray the `init` hook.

    @field slideRefs
    @type {Array[HTMLElement]}
  */
  slideRefs: null,

  /**
    Specify whether the gallery should resize the body to to the gallery's height

    @argument takeover
    @type {Boolean}
  */
  takeover: true,

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
    Handles some DOM management for scrolling events
    - calls `viewedSlide` handler when a slide enters the viewport

    @method _activeSlideWatcher
    @param {EventObject} event
    @return {void}
  */
  _activeSlideWatcher(/* e */) {
    throttle(this, () => {
      let i;
      let currentEl;
      let els = this.slideRefs;

      for (i = 0; i < els.length; i++) {
        let slide = els[i];
        if (inViewport(slide, {offset: {top: window.innerHeight / 2}})) {
          currentEl = slide;
          break;
        }
      }

      if (currentEl) {
        this.viewedSlide(this.slides[i], currentEl, i);
      }
    }, 100);
  },

  /**
    Force the body's height to match the gallery's height. Enables consistent measurements.

    @method _setBodyHeight
    @param {EventObject} event
    @return {void}
  */
  _setBodyHeight(/* e */) {
    debounce(this, () => {
      let { height } = this.element.getBoundingClientRect();
      height = `${height}px`;
      if (document.body.style.height !== height) {
        document.body.style.height = height;
      }
    }, 100);
  },

});
// END-SNIPPET
