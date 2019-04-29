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
    Array of arguments to pass to `link-to` helper:
    - ['<route name>`, `<model or identifier>']

    @argument route
    @type {Array}
  */

  /**
    An external url. If supplied, this will render a conventional `<a/>` tag with `target="_blank"`.

    @argument url
    @type {String}
  */

  /**
    Optional tag to display with `route` and `label` keys:
    - `label` display text
    - `route` array of arguments to pass to link-to component [`<route name>`, `<model or identifier>`]

    @argument tag
    @type {Object}
  */

});
