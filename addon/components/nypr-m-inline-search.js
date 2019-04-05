// BEGIN-SNIPPET nypr-m-inline-search.js
import Component from '@ember/component';
import layout from '../templates/components/nypr-m-inline-search';

export default Component.extend({
  layout,
  tagName: '',

  /**
    Class list passed to `nypr-m-inline-search/form` component

    @argument formClass
    @type {String}
  */

  /**
    Perform a search with given query. Passed to nested `nypr-m-inline-search/form` component.

    @argument search
    @type {Function}
  */
});
// END-SNIPPET
