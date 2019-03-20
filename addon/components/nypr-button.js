// BEGIN-SNIPPET nypr-button.js
import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../templates/components/nypr-button';

/**
  Base button. Use this component to compose more specific buttons and components.

  @class NyprButton
*/
export default Component.extend({
  layout,
  tagName: 'button',

  classNames: ['nypr-button', 'o-button'],
  classNameBindings: ['tierClass'],

  attributeBindings: ['type', 'role'],

  /**
    Specify the `role` attribute. Default is 'button'.
    @argument role
    @type {string}
  */
  role: 'button',

  /**
    Specify the `type` attribute for the button. Default is "button".
    @argument type
    @type {string}
  */
  type: 'button',

  /**
    Which tier in the visual heirarchy this button should be.

    @argument tier
    @type {string}
  */
  tier: null,


  /**
    Computes the class applied based on the value of `tier`

    @accessor tierClass
    @type {string}
  */
  tierClass: computed('tier', function() {
    return this.tier ? `o-button--${this.tier}` : '';
  }),

  /**
    Specify a click handler

    @argument click
    @type {function}
  */
  click() {}
});
//END-SNIPPET
