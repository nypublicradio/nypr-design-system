// BEGIN-SNIPPET nypr-o-article-body.js
import Component from '@ember/component';
import layout from '../templates/components/nypr-o-article-body';

/**
 Article body element

 Usage:
 ```hbs
 <NyprOArticleBody>
  <p>some <strong>raw</strong> HTML</p>
</NyprOArticleBody>
```

 @class nypr-o-article-body
 @yield {Block} Element contents
*/
export default Component.extend({
  layout,
  classNames: ['c-article__body', 'o-rte-text', 'u-spacing', 'l-container--content'],

  /**
    Body content.
    **Warning** will be rendered raw, unescaped into the DOM

    @argument body
    @type {String}
  */
  body: null,
});
// END-SNIPPET
