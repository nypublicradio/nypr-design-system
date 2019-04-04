// BEGIN-SNIPPET nypr-m-brands-linkroll.js
import Component from '@ember/component';
import layout from '../templates/components/nypr-m-brands-linkroll';

import { positionBottomCenter } from './nypr-a-toggle-box';

const NAV_ITEMS = [{
  url: 'https://www.wnyc.org',
  title: 'WNYC',
}, {
  url: 'https://www.newsounds.org',
  title: 'New Sounds',
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

export default Component.extend({
  layout,
  tagName: '',

  /**
    Navigation items objects with `url` and `title` keys.

    @argument navItems
    @type {Array<Object>}
  */
  navItems: NAV_ITEMS,

  calculatePosition(trigger, content) {
    return positionBottomCenter(trigger, content, 15);
  }
});
// END-SNIPPET
