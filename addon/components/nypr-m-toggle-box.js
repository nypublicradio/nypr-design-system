import Component from '@ember/component';
import { computed } from '@ember/object';
import { scheduleOnce } from '@ember/runloop';
import toggleBoxPositioner from '../utils/toggle-box-positioner';
import { task, timeout } from 'ember-concurrency';
import Ember from 'ember';
import layout from '../templates/components/nypr-m-toggle-box';

export default Component.extend({
  layout,
  classNames: ['toggle-box'],
  classNameBindings: ['open:is-active', 'theme', 'hPos', 'vPos'],
  open: false,
  theme: 'dark',
  icon: 'caret-down',
  closeDelay: 500000,
  contentClass: '',

  contentClasses: computed('theme', function() {
    return `toggle-box__dropdown ${this.theme} ${this.contentClass}`;
  }),

  calculatePosition(trigger, content, _destination, ref) {
    // Positions of elements were being calculated before they had
    // fully finished rendering. This ensures positioning is being
    // calculated correctly by positioning again after render

    scheduleOnce('afterRender',() => {
      let obj = toggleBoxPositioner(trigger, content, _destination, ref);
      ref.dropdown.applyReposition(trigger, content, obj)

      // #calculatePosition is called without this component's context
      // so we have to reach into this component through the ref argument
      ref.dropdown.parentView.hookUpContentListeners(content, ref);
    });

    return toggleBoxPositioner(...arguments);
  },

  hookUpContentListeners(contentElement, ref) {
    let _this = ref.dropdown.parentView;

    let autoclose = () => {
      _this.autoClose.perform(ref.dropdown)
    }

    contentElement.addEventListener('mouseenter', autoclose, true);
    contentElement.addEventListener('mousemove', autoclose, true);

    autoclose(); // trigger the first autoclose, which will be cancelled/deferred with element interaction
  },

  autoClose: task(function*(dropdown) {
    // restartable concurrency task will close dropdown after 5 seconds
    // task is renewed when its called again

    if (this.closeDelay && !Ember.testing) {
      yield timeout(this.closeDelay);

      // These differ based on how they were called, unfortunately
      if (dropdown && dropdown.actions && dropdown.actions.close) {
        dropdown.actions.close()
      }
      else if (dropdown && dropdown.close) {
        dropdown.close();
      }
    }

  }).restartable(),
});
