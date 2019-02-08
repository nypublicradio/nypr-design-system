import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../templates/components/nypr-button';

export default Component.extend({
  layout,
  tagName: 'button',

  classNames: ['nypr-button'],
  classNameBindings: ['themeClass'],

  attributeBindings: ['type'],

  type: 'button',

  themeClass: computed('theme', function() {
    return `nypr-button--${this.theme || 'nypr'}`;
  })
});
