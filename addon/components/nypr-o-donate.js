// BEGIN-SNIPPET nypr-o-donate.js
import Component from '@ember/component';
import layout from '../templates/components/nypr-o-donate';

/**
  Donate tout

  Inline Usage:
  ```hbs
  <NyprODonate @message='hello world' @linkText='click me' @linkUrl='http://example.com/pledge' @close=(action close) />
  ```

  @class nypr-o-donate
  @yield {Hash} hash
*/
export default Component.extend({
  layout,
  classNames: ['c-donate-tout'],
  classNameBindings: ['isActive'],

  /**
    Close button action

    @argument close
    @type {Function}
  */

  /**
    Pledge form URL

    @argument linkUrl
    @type {String}
  */
  linkUrl: null,

  /**
    Text for Donate Link

    @argument linkText
    @type {String}
  */
  linkText: null,
});
// END-SNIPPET
