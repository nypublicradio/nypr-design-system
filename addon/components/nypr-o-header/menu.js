// BEGIN-SNIPPET nypr-o-header-menu.js
import ClickOutsideMixin from 'ember-click-outside/mixin';
import { closest } from 'ember-click-outside/utils';

import Component from '@ember/component';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/string';
import { inject } from '@ember/service';
import layout from '../../templates/components/nypr-o-header/menu';

export default Component.extend(ClickOutsideMixin, {
  router: inject(),

  layout,
  classNames: ['c-side-menu'],
  attributeBindings: ['style'],

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
    Offset height by this amount to make room for an ad at the top fo the screen

    @argument heightOffset
    @type {Number}
  */

  /**
    Height offset computed as an inline CSS declaration

    @accessor style
    @type {String}
  */
  style: computed('heightOffset', function() {
    return htmlSafe(`height: calc(100vh - ${this.heightOffset}px);`);
  }),

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

    this.router.on('routeDidChange', this.close);
  },

  willDestroyElement() {
    this._super(...arguments);
    this.removeClickOutsideListener();
  },
});
// END-SNIPPET
