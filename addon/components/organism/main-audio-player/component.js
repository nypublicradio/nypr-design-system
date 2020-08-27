import Component from '@ember/component';
import { computed, get } from '@ember/object';
import layout from './template';

export default Component.extend({
  layout,
  classNames: ['whats-on'],

  displayEpisodeContent: computed('this.nowPlaying.show', 'this.nowPlaying.stream', function() {
    // todo: if segments exist, then true
    // todo: clean this up when we clean up data/api
    return get(this, 'nowPlaying.stream.currentShow.description') != get(this, 'nowPlaying.show.about.body');
  }),
});
