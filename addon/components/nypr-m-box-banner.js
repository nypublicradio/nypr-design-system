// BEGIN-SNIPPET nypr-m-box-banner.js
import Component from '@ember/component';
import layout from '../templates/components/nypr-m-box-banner';

/**
  A box for rendering arbitrary content into `title` and `body` areas.

  Will render a `close` button if a `@close` argument is passed.

  @class nypr-m-box-banner
  @yield {Block} block
  @yield {Component} block.title `nypr-m-box-banner/title`
  @yield {Component} block.dek `nypr-m-box-banner/dek`
  @yield {Component} block.cta `nypr-m-box-banner/cta`
*/
export default Component.extend({
  layout,

  classNames: ['o-box-banner', 'u-spacing', 'o-3d-heading'],

  /**
    Function to call when the close button is clicked.

    @argument close
    @type {Function}
  */
});
// END-SNIPPET
