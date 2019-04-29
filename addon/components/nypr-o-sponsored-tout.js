// BEGIN-SNIPPET nypr-o-sponsored-tout.js
import Component from '@ember/component';
import layout from '../templates/components/nypr-o-sponsored-tout';

/**
  Sponsored content tout

  @class nypr-o-sponsored-tout
  @yield {Block} block
*/
export default Component.extend({
  layout,
  classNames: ['c-sponsored-tout', 'u-breakout', 'o-border-accent'],

  /**
    Heading text

    @argument heading
    @type {String}
  */
});
// END-SNIPPET
