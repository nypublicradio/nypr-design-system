// BEGIN-SNIPPET nypr-a-kicker.js
import Component from '@ember/component';
import layout from '../templates/components/nypr-a-kicker';

/**
  Render a "kicker" or small piece of decorated text.

  Usage:
  ```hbs
  <NyprAKicker>
    News
  </NyprAKicker>
  ```
  @class nypr-a-kicker
  @yield {Block} block
*/
export default Component.extend({
  layout,
  tagName: '',

  /**
    Text contents.
    @argument text
    @type {String}
  */

  /**
    Arguments to pass to a link-to component

    @argument route
    @type {Array}
  */

  /**
    URL for anchor tag

    @argument url
    @type {String}
  */
});
// END-SNIPPET
