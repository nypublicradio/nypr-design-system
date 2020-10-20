import Component from '@ember/component';
import { computed, get } from '@ember/object';
import layout from './template';

export default Component.extend({
  layout,
  classNames: ['whats-on'],

  displayEpisode: computed('nowPlaying.stream.currentShow.description', 'nowPlaying.show.tease', function() { // eslint-disable-line
    // todo: if segments exist, then true
    // todo: refactor when we clean up data/api
    return get(this, 'nowPlaying.stream.currentShow.group_slug') == get(this, 'nowPlaying.show.slug') &&
           get(this, 'nowPlaying.stream.currentShow.episode_pk')
  }),
});
