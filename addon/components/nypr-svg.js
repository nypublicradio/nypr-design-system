import Component from '@ember/component';
import { computed } from '@ember/object';
import { getOwner } from '@ember/application';

const msg = icon =>
  `Could not find an icon in nypr-design-system/app/templates/components/nypr-svg named ${icon}`;

export default Component.extend({
  tagName: '',

  svgPartial: computed(function() {
    let owner = getOwner(this);
    let templateExists = Boolean(owner.lookup(`templates/component:nypr-svg/${this.icon}`));
    if (templateExists) {
      return `components/nypr-svg/${this.icon}`;
    } else {
      console.warn(msg(this.icon)); // eslint-disable-line
      return false;
    }
  })
}).reopenClass({
  positionalParams: ['icon', 'class'],
});
