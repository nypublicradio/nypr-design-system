import Component from '@ember/component';
import { computed, get } from '@ember/object';
import layout from './template';

export default Component.extend({
  layout,
  classNames: ['nypr-o-main-audio-player'],

  displayEpisodeContent: computed('this.nowPlaying.show', 'this.nowPlaying.stream', function() {
    // todo: if segments exist, then true
    return get(this, 'nowPlaying.stream.currentShow.description') != get(this, 'nowPlaying.show.about.body');
  }),
});
