import Component from '@ember/component';
import layout from '../templates/components/nypr-o-featured-block-list';

/**
  Block Layout
  - heading area on top right
  - featured block on the left
  - list area on the right

  @class nypr-o-featured-block-list
  @yield {Hash} hash
  @yield {Component} hash.heading `nypr-o-featured-block-list/heading`
  @yield {Block} hash.featured `blank-template`
  @yield {Block} hash.col `blank-template`
*/
export default Component.extend({
  layout,
  tagName: 'section',
  classNames: ['c-featured-blocks', 'o-section', 'u-breakout']
});
