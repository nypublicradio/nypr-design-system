/* global instgrm, twttr */
// BEGIN-SNIPPET nypr-o-article-body.js
import Component from '@ember/component';
import layout from '../templates/components/nypr-o-article-body';
import { schedule } from '@ember/runloop';

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

  didRender() {
    schedule('afterRender', () => {
      // instagram embeds need a manual push after rehydration
      // ember will re-render a fastboot DOM tree,
      // but the IG embed script will only operate once
      if (typeof instgrm !== 'undefined') {
        instgrm.Embeds.process();
      }

      // load twitter widgets manually after twitter callback has run
      // twitter scripts are stripped from gothamist payload responses to allow
      // for more reliable rendering
      if (typeof twttr !== 'undefined') {
        twttr.ready(() => twttr.widgets.load());
      }
    });
  }
});
// END-SNIPPET
