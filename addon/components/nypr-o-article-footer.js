// BEGIN-SNIPPET nypr-o-article-footer.js
import Component from '@ember/component';
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
  @yield {Component} hash.comments `blank-template`
*/

export default Component.extend({
  layout,
  classNames: ['c-article__footer', 'u-section-spacing'],
});
// END-SNIPPET
