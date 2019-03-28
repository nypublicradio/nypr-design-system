// BEGIN-SNIPPET nypr-m-tags.js
import Component from '@ember/component';
import layout from '../templates/components/nypr-m-tags';

/**
  Display a list of tags.

  Usage:
  ```hbs
  <NyprMTags @tags={{tags}} as |Tag tag|>
    <Tag @url='/tags/{{tag}}' />
  </NyprMTags>
  ```

  @class nypr-m-tags
  @yield {Component} nypr-a-tag
  @yield {String} tag
*/
export default Component.extend({
  layout,
  classNames: ['o-tags'],

  /**
    List of tag values to render.

    @argument tags
    @type {Array<String>}
  */
  tags: null,

  /**
    Prefix the rendered tag with a value. Defaults to `"#"`.
    Set to `''` to blank out.

    @argument prefix
    @type {String}
  */
  prefix: '#',
});
// END-SNIPPET
