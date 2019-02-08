import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: '',

  svgPartial: computed(function() {
    return this.icon ? `components/nypr-svg/${this.icon}` : false;
  })
}).reopenClass({
  positionalParams: ['icon', 'class'],
});
