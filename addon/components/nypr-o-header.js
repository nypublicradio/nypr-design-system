// BEGIN-SNIPPET nypr-o-header.js
import Component from '@ember/component';
import { debounce, bind } from '@ember/runloop';
import layout from '../templates/components/nypr-o-header';

/**
 Site header

 @class nypr-o-header
 @yield {Hash} hash
 @yield {Component} hash.leaderboard `blank-template`
 @yield {Component} hash.site `nypr-m-meta/site`
 @yield {Component} hash.article `nypr-m-meta/article`
 @yield {Component} hash.gallery `nypr-m-meta/gallery`
*/
export default Component.extend({
  layout,
  tagName: 'header',
  classNames: ['c-main-header'],
  classNameBindings: ['isOpen:side-menu-is-active', 'outOfViewport'],

  isOpen: false,

  init() {
    this._super(...arguments);
    this._boundListener = bind(this, '_scrollListener');
    window.addEventListener('scroll', this._boundListener);
  },

  willDestroy() {
    this._super(...arguments);
    window.removeEventListener('scroll', this._boundListener);
  },

  /**
    @method _scrollListener
    @param {EventObject} event
    @return {Void}
  */
  _scrollListener() {
    debounce(this, () => {
      let { top, height } = this.element.getBoundingClientRect();
      this.set('outOfViewport', top + height < 0);
    }, 150);
  }

});
// END-SNIPPET
