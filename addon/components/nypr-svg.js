import Component from '@ember/component';
import { computed } from '@ember/object';
import { getOwner } from '@ember/application';

export default Component.extend({
  tagName: '',

  svgPartial: computed(function() {
    let owner = getOwner(this);
    let templateExists = Boolean(owner.lookup(`templates/component:nypr-svg/${this.icon}`));
    return templateExists ? `components/nypr-svg/${this.icon}` : false;
  })
}).reopenClass({
  positionalParams: ['icon', 'class'],
});
