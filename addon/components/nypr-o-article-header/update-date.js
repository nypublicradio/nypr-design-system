import Component from '@ember/component';
import layout from '../../templates/components/nypr-o-article-header/update-date';

export default Component.extend({
  layout,
  classNames: ['o-updated-date'],

  /**
   Publish datetime

   @argument updateDate
   @type {String}
   */

  /**
   Display formatting for `updateDate`, according to moment.js rules: https://momentjs.com/docs/#/displaying/format/
   Defaults to `'MMM D, YYYY h:mmA'`

   @argument format
   @type {String}
   */
  format: 'MMM D, YYYY h:mm A'
});

