// BEGIN-SNIPPET nypr-m-inline-search-form.js
import ClickOutsideMixin from 'ember-click-outside/mixin';
import { closest } from 'ember-click-outside/utils';

import Component from '@ember/component';
import { bind } from '@ember/runloop';
import { computed } from '@ember/object';

import layout from '../../templates/components/nypr-m-inline-search/form';

export default Component.extend(ClickOutsideMixin, {
  layout,
  tagName: 'form',
  classNames: ['c-search'],
  classNameBindings: ['isOpen'],
  attributeBindings: ['role', 'ariaHidden:aria-hidden'],
  role: 'dialog',

  ariaHidden: computed('isOpen', function() {
    return this.get('isOpen') ? "false" : "true";
  }),

  didInsertElement() {
    this._super(...arguments);

    this.addClickOutsideListener();

    this._boundTransitionHandler = bind(this, 'focusInput');

    this.element.addEventListener('transitionend', bind(this, 'focusInput'));
  },

  willDestroyElement() {
    this.removeClickOutsideListener();
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
    if (this.query) {
      this.search(this.query);
    } else {
      this.doClose();
    }
  },


  /**
    Handler called by `ClickOutsideMixin`

    @method clickOutside
    @param {Event} e
    @return {void}
  */
  clickOutside(e) {
    if (!closest(e.target, '.c-search') && !closest(e.target, '.c-search-toggle')) {
      this.doClose();
    }
  },

  /**
    Handles closing the form. Clears the input and guards for if the action isn't passed in

    @method doClose
    @return {void}
  */
  doClose() {
    if (this.close) {
      this.set('query', null); // clear the query on close
      this.close();
    }
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
