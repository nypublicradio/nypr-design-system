import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { get, computed } from '@ember/object';
import layout from './template';

export default Component.extend({
  dj: service(),
  hifi: service(),
  layout,
  tag: 'li',
  classNames: ['stream-switcher-streams-stream'],
  classNameBindings: ['isActive:is-active', 'isPlaying:is-playing', 'isLoading'],

  isActive: computed('nowPlaying.slug', function() {
    return get(this, 'nowPlaying.slug') == get(this, 'stream.slug');
  }),

  isPlaying: computed('nowPlaying.slug', 'hifi.isPlaying', function() {
    return get(this, 'hifi.isPlaying') === true &&
      get(this, 'nowPlaying.slug') == get(this, 'stream.slug');
  }),

  isLoading: computed('nowPlaying.slug', 'hifi.isLoading', function() {
    return get(this, 'hifi.isLoading') &&
      get(this, 'nowPlaying.slug') == get(this, 'stream.slug');
  }),

  click: function(event) {
    event.target.scrollIntoView({
      behavior: 'smooth', block: 'nearest'
    });

    if (this.nowPlaying.slug == this.stream.slug) {
      if (!(this.hifi.isPlaying || this.hifi.isLoading)) {
        this.dj.play(this.stream.slug);
      }
    } else {
      this.nowPlaying.setStreamSchedule(this.stream.slug);
      this.dj.play(this.stream.slug);
    }
  },
});
