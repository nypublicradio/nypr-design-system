import Component from '@ember/component';
import { inject as service } from "@ember/service";
import layout from '../templates/components/nypr-m-on-air-image';
import { reads } from "@ember/object/computed";

export default Component.extend({
  layout,
  dataLayer: service(),
  playerLabel: 'persistent', // default
  classNames: ['on-air-image'],

  hifi                : service(),
  dj                  : service(),
  isReady             : reads('hifi.isReady'),
  isPlaying           : reads('hifi.isPlaying'),
  isLoading           : reads('hifi.isLoading'),
  isStream            : reads('hifi.isStream'),

  handleClick() {
    if (this.isPlaying) {
      this.hifi.pause();
    }
    else {
      this.dj.play(this.playItemId);
    }
    this.dataLayer.push({ playerSource: this.playerLabel });
  },
});
