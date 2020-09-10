// BEGIN-SNIPPET nypr-header-o-left.js
import Component from '@ember/component';
import layout from '../../templates/components/nypr-o-header/left';

export default Component.extend({
  layout,
  classNames: ['c-main-header__left', '_u-truncate--flex'],
  init() {
    this._super(...arguments);
    if (this.showMenuButton === undefined) {
      this.showMenuButton = true;
    }
  }
});
// END-SNIPPET
