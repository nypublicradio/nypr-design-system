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
  classNameBindings: ['isActive:is-active'],

  isActive: computed('nowPlaying.slug', function() {
    return get(this, 'nowPlaying.slug') == get(this, 'stream.slug');
  }),

  click: function() {
    if (this.hifi.isPlaying || this.hifi.isLoading) {
      this.hifi.pause();
    }
    this.nowPlaying.setStreamSchedule(this.stream.slug);
  },
});
