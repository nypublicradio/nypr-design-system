// BEGIN-SNIPPET nypr-a-story-headline.js
import Component from '@ember/component';
import layout from '../templates/components/nypr-a-story-headline';

/**
  Headline markup for stories.

  Usage:
  ```hbs
  <NyprAStoryHeadline>
    Headline goes here
  </NyprAStoryHeadline>
  ```
  @class nypr-a-story-headline
  @yield {Block} block
*/
export default Component.extend({
  layout,
  tagName: 'h1',
  classNames: ['o-headline'],

  /**
    Text contents.
    @argument text
    @type {String?}
  */
  text: null,
});
// END-SNIPPET
