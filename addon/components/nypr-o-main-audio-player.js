import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../templates/components/nypr-o-main-audio-player';

export default Component.extend({
  layout,
  classNames: ['nypr-o-main-audio-player'],

  displayEpisodeContent: computed('this.nowPlaying.show', function() {
    // todo: if segments exist, then true
    return this.nowPlaying.stream.currentShow.description &&
           this.nowPlaying.stream.currentShow.description != this.onAirDescription;
  }),

  actions: {
    openTwitterMention() {
      let height = 450;
      let width = 560;
      let left = (screen.width / 2) - (width / 2);
      let top = (screen.height / 2) - (height / 2);
      window.open('https://twitter.com/intent/tweet?screen_name=' + this.twitterHandle,
                  'popup',
                  'width=' + width + ', height=' + height + ', toolbar=no, location=no, directories=no, status=no, menubar=no, copyhistory=no, top=' + top + ', left=' + left);
    }
  }
});
