// BEGIN-SNIPPET nypr-m-text-banner.js
import Component from '@ember/component';
import layout from '../templates/components/nypr-m-text-banner';

/**
  A banner to display story details for Breaking News.

  Usage:
  ```hbs
    <NyprMTextBanner
      @category='Breaking News'
      @url='Link'
      @route={{array 'article' 'slug'}}
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

  /**
    Category

    @argument category
    @type {String}
  */

  /**
    URL
    Link to an external page
    Use this or @route for a link

    @argument url
    @type {String}
  */

  /**
    Route
    Array of Routing Parameters
    Use this or @url for a link

    @argument route
    @type {[String]}
  */

  /**
    Title

    @argument title
    @type {String}
  */

  /**
    Description

    @argument description
    @type {String}
  */
});
// END-SNIPPET
