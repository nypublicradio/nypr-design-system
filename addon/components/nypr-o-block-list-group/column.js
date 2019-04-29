import Component from '@ember/component';
import layout from '../../templates/components/nypr-o-block-list-group/column';

export default Component.extend({
  layout,
  classNames: ['c-block-group__col', 'u-spacing--and-half'],

  didInsertElement() {
    this.register(this);
  },
});
