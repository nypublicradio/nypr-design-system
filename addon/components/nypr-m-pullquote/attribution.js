// BEGIN-SNIPPET nypr-m-pullquote-attribution.js
import Component from '@ember/component';
import layout from '../../templates/components/nypr-m-pullquote/attribution';

export default Component.extend({
  layout,

  tagName: 'span',
  classNames: ['o-pullquote__author'],
});
// END-SNIPPET
