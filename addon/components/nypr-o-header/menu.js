// BEGIN-SNIPPET nypr-o-header-menu.js
import ClickOutsideMixin from 'ember-click-outside/mixin';
import { closest } from 'ember-click-outside/utils';

import Component from '@ember/component';
import layout from '../../templates/components/nypr-o-header/menu';

export default Component.extend(ClickOutsideMixin, {
  layout,
  classNames: ['c-side-menu'],

  /**
    Items for primary nav

    @argument primaryNav
    @type {Array<Object>}
  */

  /**
    Items for secondary nav

    @argument secondaryNav
    @type {Array<Object>}
  */

  /**
    Function to close menu when user clicks elsewhere in the document

    @argument close
    @type {Function}
  **/

  /**
    Handler called by `ClickOutsideMixin`

    @method clickOutside
    @param {Event} e
    @return {void}
  */
  clickOutside(e) {
    if (!closest(e.target, '.c-menu-toggle')) {
      this.close();
    }
  },

  didInsertElement() {
    this._super(...arguments);
    this.addClickOutsideListener();
  },

  willDestroy() {
    this._super(...arguments);
    this.removeClickOutsideListener();
  },
});
// END-SNIPPET
