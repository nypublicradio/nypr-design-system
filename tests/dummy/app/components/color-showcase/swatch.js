import Component from '@ember/component';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/string';

import layout from '../../templates/components/color-showcase/swatch';

export default Component.extend({
  layout,

  attributeBindings: ['style'],

  style: computed('color', function() {
    let style = '';
    if (this.color) {
      style = `background-color: ${this.color}`;
    }

    return htmlSafe(style);
  })
});
