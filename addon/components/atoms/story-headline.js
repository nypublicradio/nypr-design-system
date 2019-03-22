import Component from '@ember/component';
import layout from '../../templates/components/atoms/story-headline';

/**
  Headline markup for stories.

  Usage:
  ```hbs
  {{#atoms/story-headline}}
    Headline goes here
  {{/atoms/story-headline}}
  ```
  @class atoms/story-headline
  @yield {Block} block
*/
export default Component.extend({
  layout,
  tagName: 'h1',
  classNames: ['o-headline'],
});
