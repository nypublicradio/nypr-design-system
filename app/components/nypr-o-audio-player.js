import Component from '@ember/component'
import { inject as service } from '@ember/service';

export default Component.extend({
  dj: service(),
  hifi: service(),
  classNames: ['nypr-o-audio-player'],

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
