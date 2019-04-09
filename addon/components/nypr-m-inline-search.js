// BEGIN-SNIPPET nypr-m-inline-search.js
import Component from '@ember/component';
import layout from '../templates/components/nypr-m-inline-search';

/**
  Inline search form with optional expandable input

  Usage:
  ```hbs
  {{!-- block usage --}}
  <NyprMInlineSearch as |search|>
    <search.open/>
    <search.form @search={{action 'search'}}/>
  </NyprMInlineSearch>

  {{!-- inline usage --}}
  <NyprMInlineSearch @search={{action 'search'}} />
  ```

  @class nypr-m-inline-search
  @yield {Hash} hash
  @yield {Component} hash.open `nypr-m-inline-search/open`
  @yield {Component} hash.form `nypr-m-inline-search/form`
*/
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

  /**
    Controls whether or not the input is exapanded in block contexts

    @field isOpen
    @type {Boolean}
  */
  isOpen: false,
});
// END-SNIPPET
