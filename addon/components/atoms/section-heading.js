import Component from '@ember/component';
import layout from '../../templates/components/atoms/section-heading';

/**
  Section header markup

  Usage:
  ```hbs
  {{#atoms/section-heading}}
    Section Header Goes Here
  {{/atoms/section-heading}}
  ```
  @class atoms/section-heading
  @yield {Block} block
*/
export default Component.extend({
  layout,
  tagName: 'h2',
  classNames: ['o-section-heading'],
});
