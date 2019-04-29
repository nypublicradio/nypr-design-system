// BEGIN-SNIPPET nypr-m-newsletter.js
import Component from '@ember/component';
import layout from '../templates/components/nypr-m-newsletter';

/**
  Newsletter sign up widget

  @class nypr-m-newsletter
  @yield {Hash} hash
  @yield {Block} hash.graphic `blank-template`
  @yield {Block} hash.blurb `blank-template`
  @yield {Block} hash.legal `blank-template`
*/
export default Component.extend({
  layout,
  classNames: ['c-newsletter-form'],
});
// END-SNIPPET
