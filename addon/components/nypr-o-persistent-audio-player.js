import Component from '@ember/component'
import { inject as service } from '@ember/service';
import layout from '../templates/components/nypr-o-persistent-audio-player';

export default Component.extend({
  dj: service(),
  hifi: service(),
  classNames: ['nypr-o-audio-player'],
  layout,

  actions: {
    async playOrPause() {
      if (this.dj.isPlaying) {
        await this.dj.pause();
      }
      else {
        await this.dj.play(this.streamSlug);
      }
    },
    setVolume(vol) {
      this.hifi.set('volume', vol);
    },
    toggleMute() {
      this.hifi.toggleMute();
    }
  }
});
