// BEGIN-SNIPPET nypr-a-button.js
import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../templates/components/nypr-a-button';

/**
  Base button. Use this component to compose more specific buttons and components.

  If a `@url` is passed, an `a` tag is rendered.

  Usage:
  ```hbs
  <NyprAButton>
    Click Me
  </NyprAButton>
  ```

  @class nypr-a-button
  @yield {Block} block
*/
export default Component.extend({
  layout,
  tagName: '',

  /**
    Make this a plain, unstyled button. Useful for wrapping icons

    @argument blank
    @type {Boolean}
  */

  /**
    Specify a click handler

    @argument onclick
    @type {Function?}
  */

  /**
    Specify the `role` attribute. Default is 'button'.
    @argument role
    @type {String?}
    @default 'button'
  */
  role: 'button',
  /**
    Text for element contents

    @argument text
    @type {String?}
  */
  text: null,

  /**
    Which tier in the visual heirarchy this button should be.

    @argument tier
    @type {String?}
  */
  tier: null,

  /**
    Specify the `type` attribute for the button. Default is "button".
    @argument type
    @type {String?}
    @default 'button'
  */
  type: 'button',

  /**
    URL for linking

    @argument url
    @type {String?}
  */
  url: null,

  /**
    Computes the class applied based on the value of `tier`

    @accessor tierClass
    @type {String}
  */
  tierClass: computed('tier', function() {
    return this.tier ? `o-button--${this.tier}` : '';
  }),
});
//END-SNIPPET
