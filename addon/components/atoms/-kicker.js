import Component from '@ember/component';
import layout from '../../templates/components/atoms/-kicker';

/**
  Render a "kicker" or small piece of decorated text.

  Usage:
  ```hbs
  {{#atoms/-kicker}}
    News
  {{/atoms/-kicker}}
  ```
  @class atoms/-kicker
  @yield {Block} block
*/
export default Component.extend({
  layout,
  classNames: ['o-kicker'],

  /**
    Filler text. Accepted as a positonal param as well.
    @argument text
    @type {String?}
  */
  text: null,
});
