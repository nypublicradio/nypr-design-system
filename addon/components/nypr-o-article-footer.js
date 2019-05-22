// BEGIN-SNIPPET nypr-o-article-footer.js
import Component from '@ember/component';
import { debounce, bind } from '@ember/runloop';

import layout from '../templates/components/nypr-o-article-footer';

/**
  Article Footer layout

  Usage:
  ```hbs
  <NyprOArticleFooter as |footer|>
    <footer.tags @tags={{array 'foo' 'bar'}} as |Tag tag|>
      <Tag @url='http://example.com/tags/{{tag}}'/>
    </footer.tags>

    <footer.contact>
      Contact us because you've got something to say
    </footer.contact>

    <footer.donate @linkText='Click' @linkUrl='https://example.com/pledge' @message='Donate because you like us'/>

    <footer.comments>
      comments go here
    </footer.comments>
  </NyprOArticleFooter>
  ```

  @class nypr-o-article-footer
  @yield {Hash} hash
  @yield {Component} hash.tags `nypr-m-tags`
  @yield {Component} hash.contact `nypr-o-contact`
  @yield {Component} hash.donate `nypr-o-donate`
  @yield {Block} hash.comments `blank-template`
*/

export default Component.extend({
  layout,
  classNames: ['c-article__footer', 'u-section-spacing'],

  didInsertElement() {
    this._super(...arguments);
    this._boundListener = bind(this, '_watchForTout');
    window.addEventListener('scroll', this._boundListener);
  },

  willDestroyElement() {
    this._super(...arguments);
    window.removeEventListener('scroll', this._boundListener);
  },

  /**
    Indicates whether or not this element is in the viewport

    @field inViewport
    @type {Boolean}
  */
  inViewport: false,

  /**
    Measures whether the footer is scrolled into view, and shows donate tout if so.

    @method _watchForTout
    @param {EventObject} event
    @return {void}
  */
  _watchForTout(/* e */) {
    debounce(this, () => {
      let toutInDom = this.element.querySelector('.c-donate-tout');
      let windowCenter = document.documentElement.clientHeight / 2;
      let footerTopEdge = this.element.getBoundingClientRect().top;

      if (toutInDom && footerTopEdge - windowCenter < 0) {
        this.set('inViewport', true);
        window.removeEventListener('scroll', this._watchForTout);
      }
    }, 150);
  }
});
// END-SNIPPET
