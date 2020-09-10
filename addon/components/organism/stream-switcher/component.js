import Component from '@ember/component';
import { computed } from '@ember/object';
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
  layout,
  classNames: ['stream-switcher'],

  /**
  Available streams.

  @argument streams
  @type {[stream-schedule]}
  */
  streams: null,

});
