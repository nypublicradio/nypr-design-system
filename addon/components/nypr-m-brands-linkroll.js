// BEGIN-SNIPPET nypr-m-brands-linkroll.js
import Component from '@ember/component';
import layout from '../templates/components/nypr-m-brands-linkroll';
import { computed } from '@ember/object';

import { positionBottomCenter } from '../utils/toggle-box-positions';

const NAV_ITEMS = [{
  url: 'https://www.wnyc.org',
  title: 'WNYC',
}, {
  url: 'https://www.newsounds.org',
  title: 'New Sounds',
}, {
  url: 'https://www.wqxr.org',
  title: 'WQXR',
}, {
  url: 'https://gothamist.com',
  title: 'Gothamist',
}, {
  url: 'https://www.njpr.org',
  title: 'NJPR',
}, {
  url: 'https://www.wnycstudios.org',
  title: 'WNYC Studios',
}, {
  url: 'https://www.thegreenespace.org',
  title: 'The Greene Space',
}];

/**
  Extends `nypr-a-toggle-box` to make a flyout with links to NYPR properties.

  @class nypr-m-brands-linkroll
*/
export default Component.extend({
  layout,
  tagName: '',

  /**
    Navigation items objects with `url` and `title` keys.

    @argument navItems
    @type {Array<Object>}
  */
  navItems: NAV_ITEMS,

  /**
    Choose a nav item to exclude. Will coerce to lowercase and compare with
    each objects lowercased `title` key.

    @argument exclude
    @type {String}
  */

  items: computed('navItems', 'exclude', function() {
    let { navItems, exclude } = this;
    if (!navItems || navItems.length === 0) {
      return [];
    }

    if (exclude && typeof exclude === 'string') {
      return navItems.filter(item => item.title.toLowerCase() !== exclude.toLowerCase());
    } else if (Array.isArray(exclude)) {
      exclude = exclude
        .map(e => typeof e === 'string' && e.toLowerCase())
        .filter(e => !!e);
      return navItems.filter(item => !exclude.includes(item.title.toLowerCase()));
    } else {
      return navItems;
    }
  }),

  calculatePosition(trigger, content) {
    return positionBottomCenter(trigger, content, 15);
  }
});
// END-SNIPPET
