// BEGIN-SNIPPET nypr-m-inline-search-form.js
import Component from '@ember/component';
import layout from '../../templates/components/nypr-m-inline-search/form';

export default Component.extend({
  layout,
  tagName: 'form',
  classNames: ['c-search'],
  classNameBindings: ['isOpen'],
  attributeBindings: ['role'],
  role: 'dialog',


  submit(e) {
    e.preventDefault();
    this.search(this.query);
  },

  /**
    Close button handler

    @argument close
    @type {Function}
  */

  /**
    Perform a search with given query

    @argument search
    @type {Function}
  */
});
// END-SNIPPET
