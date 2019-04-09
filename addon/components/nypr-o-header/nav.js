// BEGIN-SNIPPET nypr-o-header-nav.js
import Component from '@ember/component';
import layout from '../../templates/components/nypr-o-header/nav';

export default Component.extend({
  layout,
  tagName: 'nav',
  classNames: ['c-primary-nav'],
  attributeBindings: ['role', 'aria-label'],

  role: 'navigation',
  'aria-label': 'Primary navigation',
});
// END-SNIPPET
