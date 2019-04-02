// BEGIN-SNIPPET nypr-o-article-header.js
import Component from '@ember/component';
import layout from '../templates/components/nypr-o-article-header';

export default Component.extend({
  layout,
  tagName: 'header',
  classNames: ['c-article__header', 'u-spacing--and-half', 'l-container'],

  /**
   Array of breadcrumbs objects

   @argument breadcrumbs
   @type {Array<Object>}
  */

  /**
   Article headline

   @argument headline
   @type {String}
  */
});
// END-SNIPPET
