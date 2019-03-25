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
  classNames: ['o-kicker'],

  /**
    Text contents.
    @argument text
    @type {String?}
  */
  text: null,
});
// END-SNIPPET
