// BEGIN-SNIPPET nypr-m-inline-search-form.js
import Component from '@ember/component';
import { bind } from '@ember/runloop';

import layout from '../../templates/components/nypr-m-inline-search/form';

export default Component.extend({
  layout,
  tagName: 'form',
  classNames: ['c-search'],
  classNameBindings: ['isOpen'],
  attributeBindings: ['role'],
  role: 'dialog',

  didInsertElement() {
    this._super(...arguments);

    this._boundTransitionHandler = bind(this, 'focusInput');

    this.element.addEventListener('transitionend', bind(this, 'focusInput'));
  },

  willDestroyElement() {
    this.element.removeEventListener('transitionend', this._boundTransitionHandler);
  },

  focusInput(e) {
    let input = this.element.querySelector('.c-search__input');
    if (e.target === input && this.isOpen) {
      input.focus();
    }
  },

  submit(e) {
    e.preventDefault();
    this.search(this.query);
  },

  /**
    Close button handler

    @argument close
    @type {Function}
  */

  /**
    Perform a search with given query

    @argument search
    @type {Function}
  */

  /**
    Is the form open or closed

    @field isOpen
    @type {Boolean}
  */

});
// END-SNIPPET
