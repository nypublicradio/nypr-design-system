// BEGIN-SNIPPET nypr-a-svg.js
import Component from '@ember/component';
import { computed } from '@ember/object';
import { getOwner } from '@ember/application';

const msg = icon =>
  `Could not find an icon in nypr-design-system/app/templates/components/nypr-a-svg named ${icon}`;

/**
  A component that will safely render any svg icon found in the `app/templates/components/nypr-a-svg` tree.

  If an svg template can't be found, a warning will be printed.

  Usage:
  ```hbs
  <NyprASvg @icon='wnyc-logo'/>
  ```

  @class nypr-a-svg
*/
export default Component.extend({
  tagName: '',

  /**
    Classname to be applied to rendered SVG markup.

    @argument class
    @type {String}
  */
  class: null,

  /**
    Filename of the icon to render.

    @argument icon
    @type {String}
  */
  icon: null,

  /**
    Height attribute in pixels

    @argument height
    @type {Number}
  */
  height: null,

  /**
    Looks up the svg template

    @accessor svgPartial
  */
  svgPartial: computed(function() {
    let owner = getOwner(this);
    let templateExists = Boolean(owner.lookup(`templates/component:nypr-a-svg/${this.icon}`));
    if (templateExists) {
      return `components/nypr-a-svg/${this.icon}`;
    } else {
      console.warn(msg(this.icon)); // eslint-disable-line
      return false;
    }
  }),

  /**
    Width attribute in pixels

    @argument width
    @type {Number}
  */
  width: null,
});
// END-SNIPPET
