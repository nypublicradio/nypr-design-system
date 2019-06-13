// BEGIN-SNIPPET nypr-m-progress-bar.js
import Component from '@ember/component';
import { debounce, bind } from '@ember/runloop';
import layout from '../templates/components/nypr-m-progress-bar';


const DEBOUNCE_TIMER = 75;

/**
  Progress bar to display how much of `document.body` has been scrolled.

  Usage:
  ```hbs
  <NyprMProgressBar/>
  ```

  @class nypr-m-progress-bar
*/
export default Component.extend({
  layout,
  tagName: '',

  /**
    Percentage of body scrolled

    @field progress
    @type {Number}
  */
  progress: 0,

  didInsertElement() {
    this._super(...arguments);
    this._boundListener = bind(this, '_measure');
    window.addEventListener('scroll', this._boundListener);
    window.addEventListener('resize', this._boundListener);

    this._measure();
  },

  willDestroyElement() {
    this._super(...arguments);
    window.removeEventListener('scroll', this._boundListener);
    window.removeEventListener('resize', this._boundListener);
  },

  /**
    Measure percentage of current body has been scrolled

    @method _measure
    @return {void}
  */
  _measure() {
    debounce(this, () => {
      if (this.isDestroyed || this.isDestroying) {
        return;
      }
      let scrolled = window.pageYOffset;
      let docHeight = document.body.getBoundingClientRect().height - window.innerHeight;
      let progress = scrolled / docHeight
      this.set('progress', isNaN(progress) ? 0 : progress);
    }, DEBOUNCE_TIMER);
  }
});
// END-SNIPPET
