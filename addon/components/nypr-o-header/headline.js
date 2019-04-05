import Component from '@ember/component';
import layout from '../../templates/components/nypr-o-header/headline';

export default Component.extend({
  layout,
  tagName: 'h1',
  classNames: ['c-main-header__title', 'u-truncate'],
});
