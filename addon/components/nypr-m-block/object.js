import Component from '@ember/component';
import layout from '../../templates/components/nypr-m-block/object';


/**
  Block object markup

  @class nypr-m-block/object
  @yield {Hash} object
  @yield {Component} object.eyebrow `nypr-m-block/eyebrow`
  @yield {Component} object.title `nypr-m-block/title`
  @yield {Hash} object.body `nypr-m-block/body`
*/
export default Component.extend({
  layout,
  classNames: ['c-block__object', 'u-spacing--half'],
});
