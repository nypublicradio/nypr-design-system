import Component from '@ember/component';
import layout from './template';


/**
  A simple button. Use this standalone or as part of more complex forms and
  elements.

  If all you want is a link that looks like a button, you can provide a url
  as the "href" property, and it will generate markup with an "a" tag
  instead of a "button" tag.

  Usage:
  ```
  <Button @label="Donate" />
  ```

  @class button
*/
export default Component.extend({
  layout,
  tagName: '',

  /**
  The text label for the button.

  @argument label
  @type {String}
  */
  label: '',

  /**
  The name of an icon for the button.

  @argument icon
  @type {String}
  */
  icon: '',

  /**
  Alternate text for screenreaders. If you only provide and icon and no label,
  you need to include this.

  @argument alt
  @type {String}
  */
  alt: '',

  /**
  Provide a url to link to. This is for when you really want a link that looks
  like a button. Will render an `a` tag that has the same button styling. Will
  automatically add `target="_blank"` and `rel="noopener"`

  @argument href
  @type {String}
  */
  href: '',
});
