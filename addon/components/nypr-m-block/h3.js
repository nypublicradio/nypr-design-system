import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../../templates/components/nypr-m-block/title-layout';

export default Component.extend({
  layout,
  tagName: 'h3',
  classNames: ['c-block__title'],
  classNameBindings: ['galleryIconClass', 'externalIconClass'],

  galleryIconClass: computed('hasGallery', function() {
    if (this.hasGallery) {
      return 'c-block__title--has-icon c-block__title--is-gallery';
    }
  }),

  externalIconClass: computed('url', function() {
    if (this.url) {
      return 'c-block__title--has-icon c-block__title--is-outbound-link';
    }
  }),
});
