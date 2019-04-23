// BEGIN-SNIPPET nypr-o-gallery-overlay.js
import imagesloaded from 'imagesloaded';

import Component from '@ember/component';
import { A } from '@ember/array';
import { computed } from '@ember/object';
import { debounce, throttle, bind } from '@ember/runloop';

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
    this.set('slideEls', A([]));
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

    // CSS transition
    this.element.classList.add('gallery-is-active');

    // scroll to an image if its index is passed in
    if (this.activeSlide) {
      let index = this.activeSlide;
      let activeSlide = this.slideEls[index];

      // wait for all slides to load so scroll position is correct
      imagesloaded(this.element.querySelectorAll('.c-slide'), () => {
        // const HEADER_OFFSET = 80;

        let image = activeSlide.querySelector('img');
        // let { top, height:imageHeight } = image.getBoundingClientRect();
        //
        // let imageAtTopOfWindow = top + window.scrollY;
        // let diff = Math.abs(window.innerHeight - imageHeight);
        // let targetY = imageAtTopOfWindow - (diff / 2) - HEADER_OFFSET;
        //
        // window.scrollTo(0, targetY);

        // TODO: see if this passes QA
        image.scrollIntoView({block: 'center'});
      });
    }
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

    @field slideEls
    @type {Array[HTMLElement]}
  */
  slideEls: null,

  /**
    Scroll to the slide at the given index

    @argument activeSlide
    @type {Number}
  */

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
  currentSlide: computed('slideEls', 'currentIndex', function() {
    if (!this.slideEls) {
      return null;
    }

    return this.slideEls[this.currentIndex];
  }),

  /**
    Receives a new slide and adds it to the `slideEls` field

    @method registerSlide
    @param {HTMLElement} slideEl
    @return {void}
  */
  registerSlide(slideEl) {
    this.slideEls.pushObject(slideEl);
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
      let els = this.slideEls;

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
