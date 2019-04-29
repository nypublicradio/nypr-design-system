// BEGIN-SNIPPET nypr-o-article-header.js
import Component from '@ember/component';
import layout from '../templates/components/nypr-o-article-header';

/**
  Header layout for articles. See [nypr-o-article-header](/docs/organisms/nypr-o-article-header) for usage.

  @class nypr-o-article-header
  @yield {Hash} hash
  @yield {Hash} hash.top `nypr-o-article-header/top`
  @yield {Component} hash.top.breadcrumb `nypr-m-breadcrumb`
  @yield {Component} hash.top.headline `nypr-a-story-headline`
  @yield {Hash} hash.top.meta `nypr-o-article-header/meta`
  @yield {Component} hash.top.meta.byline `nypr-m-byline`
  @yield {Component} hash.top.meta.publishDate `nypr-o-article-header/publish-date`
  @yield {Component} hash.lead `nypr-o-article-header/lead`
  @yield {Block} hash.lead.left `blank-template`
  @yield {Block} hash.lead.center `blank-template`
  @yield {Block} hash.lead.right `blank-template`
*/
export default Component.extend({
  layout,
  tagName: 'header',
  classNames: ['c-article__header', 'u-spacing--and-half', 'l-container'],
});
// END-SNIPPET
