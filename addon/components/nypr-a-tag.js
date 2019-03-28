// BEGIN-SNIPPET nypr-a-tag.js
import Component from '@ember/component';
import layout from '../templates/components/nypr-a-tag';

/**
  Show a tag

  Usage:
  ```hbs
    <NyprATag @tag='foo'/>
  ```

  @class nypr-a-tag
*/
export default Component.extend({
  layout,
  tagName: '',

  /**
    Prefix the rendered tag with a value. Defaults to `"#"`.
    Set to `''` to blank out.

    @argument prefix
    @type {String}
  */
  prefix: '#',

  /**
    Tag text to display

    @argument tag
    @type {String}
  */
  tag: null,

  /**
    Set the URL for this tag.
    If it's unset, the root element is a span. If it is set, this is an anchor tag.

    @argument url
    @type {String}
  */
  url: null,
});
// END-SNIPPET
