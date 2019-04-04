// BEGIN-SNIPPET nypr-o-footer.js
import Component from '@ember/component';
import layout from '../templates/components/nypr-o-footer';

/**
  Site Footer

  @class nypr-o-footer
  @yield {Hash} hash
  @yield {Component} hash.slogan blank-template
  @yield {Component} hash.nav nypr-m-secondary-nav
  @yield {Component} hash.signup blank-template
*/
export default Component.extend({
  layout,
  tagName: '',
});
// END-SNIPPET
