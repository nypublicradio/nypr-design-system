// BEGIN-SNIPPET nypr-o-related-content.js
import Component from '@ember/component';
import layout from '../templates/components/nypr-o-related-content';

/**
  List of related content

  Usage:
  ```hbs
  <NyprORelatedContent @items={{items}}/>
  ```

  @class nypr-o-related-content
*/
export default Component.extend({
  layout,
  classNames: ['c-related-content', 'u-spacing']

  /**
    List of items Objects with `title` and `url` keys.

    @argument items
    @type {Array<Object>}
  */
});
// END-SNIPPET
