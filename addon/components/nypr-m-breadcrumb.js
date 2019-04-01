// BEGIN-SNIPPET nypr-m-breadcrumb.js
import Component from '@ember/component';
import layout from '../templates/components/nypr-m-breadcrumb';

/**
  Display a given list of breadcrumbs.

  Usage:
  ```hbs
  <NyprMBreadcrumb @breadcrumbs={{breadcrumbs}} />
  ```

  @class nypr-m-breadcrumb
*/
export default Component.extend({
  layout,
  classNames: ['o-breadcrumbs'],

  /**
    List of `breadcrumb` objects, with a `label` and `url` key.
    If there is no `url` value, a span will be rendered.

    @argument breadcrumbs
    @type {Array<Object>}
  */

});
// END-SNIPPET
