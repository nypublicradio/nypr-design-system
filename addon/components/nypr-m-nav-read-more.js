import Component from '@ember/component';
import layout from '../templates/components/nypr-m-nav-read-more';

/**
  Render a list of links with a label in a dotted box

  @class nypr-m-nav-read-more
*/
export default Component.extend({
  layout,
  tagName: 'nav',
  classNames: ['c-read-more-nav', 'u-breakout'],

  /**
    List of items to render as links. Each item requires the following keys:
    - `label` display text
    - `route` array of arguments to pass to link-to component [`routeName', `model or identifier`]

    @argument items
    @type {Array[Object]}
  */

});
