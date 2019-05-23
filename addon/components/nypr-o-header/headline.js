// BEGIN-SNIPPET nypr-o-header-headline.js
import Component from '@ember/component';
import layout from '../../templates/components/nypr-o-header/headline';

export default Component.extend({
  layout,
  tagName: 'span',
  classNames: ['c-main-header__title', 'u-truncate'],
});
// END-SNIPPET
