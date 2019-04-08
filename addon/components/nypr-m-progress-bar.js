// BEGIN-SNIPPET nypr-m-progress-bar.js
import Component from '@ember/component';
import { debounce, bind } from '@ember/runloop';
import layout from '../templates/components/nypr-m-progress-bar';

export default Component.extend({
  layout,
  tagName: '',

  didInsertElement() {
    this._super(...arguments);
    this._boundListener = bind(this, '_measure');
    window.addEventListener('scroll', this._boundListener);
    window.addEventListener('resize', this._boundListener);

    this._measure();
  },

  willDestroy() {
    this._super(...arguments);
    window.removeEventListener('scroll', this._boundListener);
    window.removeEventListener('resize', this._boundListener);
  },

  _measure() {
    debounce(this, () => {
      if (this.isDestroyed || this.isDestroying) {
        return;
      }
      let scrolled = window.pageYOffset;
      let docHeight = document.body.getBoundingClientRect().height - window.innerHeight;
      this.set('progress', scrolled / docHeight);
    }, 150);
  }
});
// END-SNIPPET
