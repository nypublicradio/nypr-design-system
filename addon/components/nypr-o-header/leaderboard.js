// BEGIN-SNIPPET nypr-o-header-leaderboard.js
import Component from '@ember/component';
import layout from '../../templates/components/nypr-o-header/leaderboard';

export default Component.extend({
  layout,
  classNames: ['c-main-header__ad-unit'],
  attributeBindings: ['aria-hidden'],

  'aria-hidden': 'true',

  /**
    Hide the advertising label

    @argument hideLabel
    @type {Boolean}
  */

});
// END-SNIPPET
