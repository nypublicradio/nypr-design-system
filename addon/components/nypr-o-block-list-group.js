import Component from '@ember/component';
import layout from '../templates/components/nypr-o-block-list-group';

import { A } from '@ember/array';
import { equal } from '@ember/object/computed';

/**
  Structured layout for block groups

  @class nypr-o-block-list-group
  @yield {Hash} hash
  @yield {Component} hash.col1 `nypr-o-block-list-group/column`
  @yield {Component} hash.col2 `nypr-o-block-list-group/column`
  @yield {Component} hash.ad `nypr-o-block-list-group/ad`
*/
export default Component.extend({
  layout,
  classNames: ['c-block-group', 'o-section'],
  classNameBindings: [
    'isSingleColumn:c-block-group--single-col',
    'twoUp:c-block-group--2up',
  ],
  tagName: 'section',

  init() {
    this._super(...arguments);
    this.set('columns', A([]));
  },

  /**
    Rendered columns

    @field columns
    @type {Array}
  */
  columns: null,

  /**
    Capture how many columns are rendered

    @method addColumn
    @param {Component} column component
  */
  addColumn(component) {
    this.columns.pushObject(component);
  },

  /**
    Remove column from tracked list

    @method removeColumn
    @param {Component} column component
  */
  removeColumn(component) {
    this.columns.removeObject(component);
  },

  /**
    Computes if there's more than one column rendered

    @accessor isSingleColumn
    @type {Boolean}
  */
  isSingleColumn: equal('columns.length', 1),

  /**
    Make the columns equal width

    @argument twoUp
    @type {Boolean}
  */

});
