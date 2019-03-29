// BEGIN-SNIPPET nypr-m-byline.js
import Component from '@ember/component';
import layout from '../templates/components/nypr-m-byline';

/**
  Byline for articles to display authors, orgs, and sponsors

  Usage:
  ```hbs
  <NyprMByline @authors={{authors}} @sponsor={{sponsor}}/>
  ```
  @class nypr-m-byline
*/
export default Component.extend({
  tagName: 'span',
  classNames: ['o-byline'],
  layout,

  /**
    Array of Author objects with a `name`, `url`, and optional `org` keys

    @argument authors
    @type {Array<Object>}
  */

  /**
    Sponsor object with `name`, `url`, and `image` keys

    @argument sponsor
    @type {Object}
  */

});
// END-SNIPPET
