import Component from '@ember/component';
import layout from '../../templates/components/nypr-m-block/body';

/**
  Body area for `nypr-m-block` component

  @class nypr-m-block/body
  @yield {Hash} hash
  @yield {Component} hash.text `nypr-m-block/text`
  @yield {Component} hash.meta `nypr-m-block-meta`
*/
export default Component.extend({
  layout,
  classNames: ['c-block__body', 'u-spacing--quarter'],
});
