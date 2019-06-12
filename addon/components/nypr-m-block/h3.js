import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../../templates/components/nypr-m-block/title-layout';

export default Component.extend({
  layout,
  tagName: 'h3',
  classNames: ['c-block__title'],
  classNameBindings: ['galleryIconClass', 'videoIconClass', 'audioIconClass', 'externalIconClass'],

  galleryIconClass: computed('hasGallery', function() {
    if (this.hasGallery) {
      return 'c-block__title--has-icon c-block__title--is-gallery';
    }
  }),

  videoIconClass: computed('hasVideo', function() {
    if (this.hasVideo) {
      return 'c-block__title--has-icon c-block__title--is-gallery';
    }
  }),

  audioIconClass: computed('hasAudio', function() {
    if (this.hasAudio) {
      return 'c-block__title--has-icon c-block__title--is-audio';
    }
  }),


  externalIconClass: computed('url', function() {
    if (this.url) {
      return 'c-block__title--has-icon c-block__title--is-outbound-link';
    }
  }),
});
