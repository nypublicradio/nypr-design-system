import Component from '@ember/component';
import { computed } from '@ember/object';
import { getOwner } from '@ember/application';

const msg = icon =>
  `Could not find an icon in nypr-design-system/app/templates/components/nypr-svg named ${icon}`;

/**
  A component that will safely render any svg icon found in the `app/templates/components/nypr-svg` tree.

  If an svg template can't be found, a warning will be printed.

  @class NyprSvg
*/
export default Component.extend({
  tagName: '',

  /**
    Filename of the icon to render.

    @argument icon
    @type {string}
  */
  icon: null,

  /**
    Classname to be applied to rendered SVG markup.

    @argument class
    @type {string}
  */
  class: null,

  /**
    Looks up the svg template

    @accessor svgPartial
   */
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
