// BEGIN-SNIPPET nypr-a-section-heading.js
import Component from '@ember/component';
import layout from '../templates/components/nypr-a-section-heading';

/**
  Section header markup

  Usage:
  ```hbs
  <NyprASectionHeading>
    Section Header Goes Here
  </NyprASectionHeading>
  ```
  @class nypr-a-section-heading
  @yield {Block} block
*/
export default Component.extend({
  layout,
  tagName: 'h2',
  classNames: ['o-section-heading'],

  /**
    Text contents.
    @argument text
    @type {String?}
  */
  text: null,
});
// END-SNIPPET
