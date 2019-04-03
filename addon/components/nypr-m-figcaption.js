// BEGIN-SNIPPET nypr-m-figcaption.js
import Component from '@ember/component';
import layout from '../templates/components/nypr-m-figcaption';

/**
  `<figcaption/>` molecule for a `<figure/>` element.

  Usage:
  ```hbs
  <NyprMFigcaption @caption="hello world" @credit="Getty Images" />
  ```
  @class nypr-m-figcaption
  @yield {Hash} hash
  @yield {Component} hash.caption `nypr-m-figcaption/caption`
  @yield {Component} hash.credit `nypr-m-figcaption/credit`
*/
export default Component.extend({
  layout,

  tagName: 'figcaption',
  classNames: ['o-figure__caption', 'o-caption'],

  /**
    @argument caption
    @type {String?}
  */

  /**
    @argument credit
    @type {String?}
  */
});
// END-SNIPPET
