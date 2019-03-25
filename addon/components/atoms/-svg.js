import Component from '@ember/component';
import { computed } from '@ember/object';
import { getOwner } from '@ember/application';

const msg = icon =>
  `Could not find an icon in nypr-design-system/app/templates/components/atoms/-svg named ${icon}`;

/**
  A component that will safely render any svg icon found in the `app/templates/components/atoms/-svg` tree.

  If an svg template can't be found, a warning will be printed.

  Usage:
  ```hbs
  {{atoms/-svg icon='wnyc-logo'}}
  ```

  @class atoms/-svg
*/
export default Component.extend({
  tagName: '',

  /**
    Filename of the icon to render.

    @argument icon
    @type {String}
  */
  icon: null,

  /**
    Classname to be applied to rendered SVG markup.

    @argument class
    @type {String}
  */
  class: null,

  /**
    Looks up the svg template

    @accessor svgPartial
   */
  svgPartial: computed(function() {
    let owner = getOwner(this);
    let templateExists = Boolean(owner.lookup(`templates/component:atoms/-svg/${this.icon}`));
    if (templateExists) {
      return `components/atoms/-svg/${this.icon}`;
    } else {
      console.warn(msg(this.icon)); // eslint-disable-line
      return false;
    }
  })
});
