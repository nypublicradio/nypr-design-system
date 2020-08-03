import Component from '@ember/component';
import InViewportMixin from 'ember-in-viewport';
import { inject as service } from '@ember/service';
import { not, readOnly, reads } from '@ember/object/computed';
import layout from '../templates/components/nypr-m-play-button';

export default Component.extend(InViewportMixin, {
  layout,
  classNames: ['play-button', 'gtm__click-tracking'],
  classNameBindings: ['isPlaying:is-playing:is-paused', 'isLoading'],
  dataLayer: service(),
  playerLabel: 'persistent', // default

  hifi                : service(),
  dj                  : service(),
  disabled            : not('hifi.isReady'),
  'aria-label'        : readOnly('title'),
  isReady             : reads('hifi.isReady'),
  isPlaying           : reads('hifi.isPlaying'),
  isLoading           : reads('hifi.isLoading'),
  isStream            : reads('hifi.isStream'),

  init() {
    this._super(...arguments);
    this.set('viewportSpy', true);
  },

  click() {
    if (this.isPlaying) {
      this.hifi.pause();
    }
    else {
      this.dj.play(this.playItemId);
    }
    this.dataLayer.push({ playerSource: this.playerLabel });
  },

  onEnterViewport: function() {},
  onExitViewport: function() {},

  didEnterViewport() {
    this.onEnterViewport();
  },

  didExitViewport() {
    this.onExitViewport();
  }
});
