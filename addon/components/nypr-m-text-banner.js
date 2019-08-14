import Component from '@ember/component';
import layout from '../templates/components/nypr-m-text-banner';

/**
  A banner to display story details for Breaking News.

  Usage:
  ```hbs
    <NyprMTextBanner
      @category='Breaking News'
      @url='Link'
      @title='Story Title'
      @description='Short summary of the story'
    />
  ```

  @class o-text-banner
  @class u-spacing--half
*/
export default Component.extend({
  layout,
  classNames: ['o-text-banner', 'u-spacing--half'],
});
