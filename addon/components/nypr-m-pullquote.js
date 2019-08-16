// BEGIN-SNIPPET nypr-m-pullquote.js
import Component from '@ember/component';
import layout from '../templates/components/nypr-m-pullquote';

export default Component.extend({
  layout,

  tagName: 'blockquote',
  classNames: ['o-pullquote']
});
// END-SNIPPET
