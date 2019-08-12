// BEGIN-SNIPPET nypr-o-contact.js
import Component from '@ember/component';
import layout from '../templates/components/nypr-o-contact';

/**
  A contact tout

  Usage:
  ```hbs
  <NyprOContact>
    <p><strong>hello</strong> <em>world</em></p>
  </NyprOContact>
  ```

  @class nypr-o-contact
  @yield {Block} element contents
*/
export default Component.extend({
  layout,
  classNames: ['c-contact-tout', 'o-rte-text', 'u-reversed-out', 'o-3d-heading'],

  /**
    Text content

    @argument text
    @type {String}
  */
  text: null,
});
// END-SNIPPET
