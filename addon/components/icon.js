// BEGIN-SNIPPET nypr-a-svg.js
import Component from '@ember/component';
import { computed } from '@ember/object';
import { getOwner } from '@ember/application';

const msg = icon =>
  `Could not find an icon in nypr-design-system/app/templates/components/icons named ${icon}`;

/**
 A component that will safely render any svg icon found in the `app/templates/components/icons` tree.

 If an svg template can't be found, a warning will be printed.

 Usage:
 ```hbs
 <Icon @icon='facebook'/>
 ```

 @class icon
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
   title of the svg icon for accessibility

   @argument icon
   @type {String}
   */
  title: null,

  /**
   Looks up the svg template

   @accessor svgPartial
   */
  svgPartial: computed(function() {
    let owner = getOwner(this);
    let templateExists = Boolean(owner.lookup(`templates/component:icons/${this.icon}`));
    if (templateExists) {
      return `components/icons/${this.icon}`;
    } else {
      console.warn(msg(this.icon)); // eslint-disable-line
      return false;
    }
  }),
});
// END-SNIPPET
