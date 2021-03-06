// BEGIN-SNIPPET nypr-m-secondary-nav.js
import Component from '@ember/component';
import layout from '../templates/components/nypr-m-secondary-nav';

/**
  @class nypr-m-secondary-nav
  @deprecated
*/
export default Component.extend({
  layout,
  tagName: 'div',
  classNames: ['c-secondary-nav'],

  attributeBindings: ['aria-label'],
  'aria-label': 'Secondary Navigation',

  /**
    Navigation items objects with `url` and `title` keys.

    @argument navItems
    @type {Array<Object>}
  */
});
// END-SNIPPET
