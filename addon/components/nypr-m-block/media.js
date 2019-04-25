import Component from '@ember/component';
import layout from '../../templates/components/nypr-m-block/media';

/**
  Block media markup.

  Renders an [`<NyprAPicture/>`](/docs/api/components/nypr-a-picture) component, and so accepts all relevant arguments.

  @class nypr-m-block/media
*/
export default Component.extend({
  layout,
  classNames: ['c-block__media'],

  /**
    Route for link-to helper

    @argument route
    @type {String}
  */

  /**
    Model for link-to helper

    @argument model
    @type {String|Model}
  */

  /**
    Optional tag to display with `model` and `label` keys.

    Model is passed to the `link-to` helper to render a link, and can be a `String` or a `Model` instance.

    @argument tag
    @type {Object}
  */

  /**
    Route for tag's link-to helper.

    @agument tagRoute
    @type {String}
  */

});
