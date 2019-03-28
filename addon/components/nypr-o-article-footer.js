// BEGIN-SNIPPET nypr-o-article-footer.js
import Component from '@ember/component';
import layout from '../templates/components/nypr-o-article-footer';

/**
  Article Footer layout

  @class nypr-o-article-footer
  @yield {Hash} hash
  @yield {Component} hash.tags `nypr-m-tags`
  @yield {Component} hash.contact `nypr`
  @yield {Component} hash.donate
  @yield {Component} hash.donate.message
  @yield {Component} hash.donate.buttonLabel
*/
export default Component.extend({
  layout,
  classNames: ['c-article__footer', 'u-section-spacing'],
});
// END-SNIPPET
