// BEGIN-SNIPPET nypr-o-article-header-publish-date.js
import Component from '@ember/component';
import layout from '../../templates/components/nypr-o-article-header/publish-date';

export default Component.extend({
  layout,
  classNames: ['o-published-date'],

  /**
    Publish datetime

    @argument publishDate
    @type {String}
  */

  /**
    Display formatting for `publishDate`, according to moment.js rules: https://momentjs.com/docs/#/displaying/format/
    Defaults to `'MMM D, YYYY h:mmA'`

    @argument format
    @type {String}
  */
  format: 'MMM D, YYYY h:mmA'
});
// END-SNIPPET
