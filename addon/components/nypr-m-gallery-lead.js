// BEGIN-SNIPPET nypr-m-gallery-lead.js
import Component from '@ember/component';
import { computed, get } from '@ember/object';

import layout from '../templates/components/nypr-m-gallery-lead';

export default Component.extend({
  layout,
  classNames: ['c-lead', 'c-lead-gallery'],

  currentIndex: 0,

  currentSlide: computed('currentIndex', function() {
    if (!get(this, 'slides.length')) {
      return;
    } else {
      return this.slides[this.currentIndex];
    }
  }),

  actions: {
    setCurrent(index) {
      this.set('currentIndex', index);
    }
  }
});
// END-SNIPPET
