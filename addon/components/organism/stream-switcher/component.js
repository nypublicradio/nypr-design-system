import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { reads } from '@ember/object/computed';
import layout from './template';

/**
  Switch between available streams.

  Usage:
  ```
  <Organism::StreamSwitcher
    @streams={{nowPlaying.streamSchedules}}
  />
  ```

  @class stream-switcher
*/
export default Component.extend({
  dj: service(),
  hifi: service(),
  layout,
  classNames: ['stream-switcher'],
  classNameBindings: ['isPlaying:is-playing', 'isLoading'],

  isLoading: reads('hifi.isLoading'),
  isPlaying: reads('hifi.isPlaying'),

  /**
  Available streams.

  @argument streams
  @type {[stream-schedule]}
  */
  streams: null,
});
