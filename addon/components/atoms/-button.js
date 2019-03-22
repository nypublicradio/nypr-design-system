// BEGIN-SNIPPET atoms-button.js
import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../../templates/components/atoms/-button';

/**
  Base button. Use this component to compose more specific buttons and components.

  Usage:
  ```hbs
  {{#atoms/-button}}
    Click Me
  {{/atoms/-button}}
  ```

  @class atoms/-button
  @yield {Block} block
*/
export default Component.extend({
  layout,
  tagName: 'button',

  classNames: ['o-button'],
  classNameBindings: ['tierClass'],

  attributeBindings: ['type', 'role'],

  /**
    Specify the `role` attribute. Default is 'button'.
    @argument role
    @type {String?}
    @default 'button'
  */
  role: 'button',

  /**
    Specify the `type` attribute for the button. Default is "button".
    @argument type
    @type {String?}
    @default 'button'
  */
  type: 'button',

  /**
    Which tier in the visual heirarchy this button should be.

    @argument tier
    @type {String?}
  */
  tier: null,


  /**
    Computes the class applied based on the value of `tier`

    @computed tierClass
    @type {String}
  */
  tierClass: computed('tier', function() {
    return this.tier ? `o-button--${this.tier}` : '';
  }),

  /**
    Specify a click handler

    @argument click
    @type {Function?}
  */
  click() {}
});
//END-SNIPPET
