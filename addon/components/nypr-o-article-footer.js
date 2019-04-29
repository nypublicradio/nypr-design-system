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

  init() {
    this._super(...arguments);
    if (typeof FastBoot === 'undefined') {
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
    Indicates whether or not this element is in the viewport

    @field inViewport
    @type {Boolean}
  */
  inViewport: false,


  /**
    Measures whether the footer is scrolled into view, and shows donate tout if so.

    @method _scrollListener
    @param {EventObject} event
    @return {void}
  */
  _scrollListener(/* e */) {
    debounce(this, () => {
      let footerTopEdge = this.element.offsetTop
      let viewportBottom = (window.scrollY + window.innerHeight)
      this.set('inViewport', footerTopEdge < viewportBottom); // top of footer has passed the bottom of the viewport
    }, 150);
  }
});
// END-SNIPPET
