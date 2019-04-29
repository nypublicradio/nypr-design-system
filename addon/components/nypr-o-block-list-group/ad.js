import Component from '@ember/component';
import layout from '../../templates/components/nypr-o-block-list-group/ad';

import { computed } from '@ember/object';

export default Component.extend({
  layout,
  classNames: ['o-ad'],
  classNameBindings: ['sizeClass'],

  /**
    Target specific ad sizes if need be

    @field size
    @type {String}
  */
  size: null,

  /**
    Compute class based on size

    @accessor sizeClass
    @type {String}
  */
  sizeClass: computed('size', function() {
    switch(this.size) {
      case 'short':
        return 'o-ad--300x250';
      case 'tall':
        return 'o-ad--300x600-flex';
    }
  }),
});
