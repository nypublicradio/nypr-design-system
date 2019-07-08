// BEGIN-SNIPPET nypr-a-ad-label.js
import Component from '@ember/component';
import layout from '../templates/components/nypr-a-ad-label';

/**
  Advertising label

  @class nypr-a-ad-label
*/
export default Component.extend({
  layout,
  tagName: 'span',
  classNames: ['o-ad__label', 'u-font--secondary-style', 'u-font--xxs'],
});
// END-SNIPPET
