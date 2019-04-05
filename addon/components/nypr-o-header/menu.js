// BEGIN-SNIPPET nypr-o-header-menu.js
import Component from '@ember/component';
import layout from '../../templates/components/nypr-o-header/menu';

export default Component.extend({
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
});
// END-SNIPPET
