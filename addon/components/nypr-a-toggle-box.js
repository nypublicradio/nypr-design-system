// BEGIN-SNIPPET nypr-a-toggle-box.js
import Component from '@ember/component';
import layout from '../templates/components/nypr-a-toggle-box';

/**
  @class nypr-a-toggle-box
  @yield {Block} block
*/
export default Component.extend({
  layout,

  classNames: ['c-toggle-box'],

  /**
    Icon trigger

    @argument icon
    @type {String}
  */
  icon: 'caret-down',
});
// END-SNIPPET
