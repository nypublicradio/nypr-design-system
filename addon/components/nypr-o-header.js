// BEGIN-SNIPPET nypr-o-header.js
import Component from '@ember/component';
import { debounce, bind } from '@ember/runloop';
import layout from '../templates/components/nypr-o-header';

/**
 Site header

 See [usage docs](/docs/organisms/nypr-o-header) for more.

 @class nypr-o-header
 @yield {Hash} hash
 @yield {Block} hash.leaderboard `nypr-o-header/leaderboard`
 @yield {Component} hash.menu `nypr-o-header/menu`
 @yield {Block} hash.menu.branding `blank-template`
 @yield {Component} hash.menu.primaryNav `nypr-o-header/nav`
 @yield {Component} hash.menu.secondaryNav `nypr-m-secondary-nav`
 @yield {Component} hash.left `nypr-o-header/left`
 @yield {Block} hash.left.branding `blank-template`
 @yield {Block} hash.left.headline `nypr-o-header/headline`
 @yield {Component} hash.nav `nypr-o-header/nav`
 @yield {Component} hash.right `nypr-o-header/right`
 @yield {Component} hash.right.search `nypr-m-inline-search`
*/
export default Component.extend({
  layout,
  tagName: 'header',
  classNames: ['c-main-header'],
  classNameBindings: ['isOpen:side-menu-is-active', 'outOfViewport'],

  /**
    Controls whether the side menu is open

    @field isOpen
    @type {Boolean}
  */
  isOpen: false,

  /**
    Indicates whether or not the header has been scrolled up, out of the viewport.

    @field outOfViewport
    @type {Boolean}
  */
  outOfViewport: false,

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
    Measures whether the bottom of the element is out of the viewport

    @method _scrollListener
    @param {EventObject} event
    @return {void}
  */
  _scrollListener() {
    debounce(this, () => {
      let { top, height } = this.element.getBoundingClientRect();
      this.set('outOfViewport', top + height < 0);
    }, 150);
  }

});
// END-SNIPPET
