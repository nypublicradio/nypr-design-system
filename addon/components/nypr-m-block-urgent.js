// BEGIN-SNIPPET nypr-m-block-urgent.js
import Component from '@ember/component';
import layout from '../templates/components/nypr-m-block-urgent';

/**
  Implements nypr-m-block to display urgent story details
  for things like Breaking News.

  Usage:
  ```hbs
    <NyprMBlockUrgent
      @category='Breaking News'
      @url='Link'
      @title='Story Title'
      @description='Short summary of the story'
    />
  ```

  @class nypr-m-block
  @class nypr-m-block--urgent
*/
export default Component.extend({
  layout,
  tagName: '',
});

// END-SNIPPET
