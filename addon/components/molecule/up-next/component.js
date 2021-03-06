import Component from '@ember/component';
import { computed } from '@ember/object';
import moment from 'moment';
import layout from './template';

/**
  Displays a given airing as the next scheduled airing. Optionally display the airing's show image.

  Usage:
  ```
  <Organism::UpNext
    @airing={{nowPlaying.streamSchedules}}
    @displayImage=true
  />
  ```

  @class up-next
*/
export default Component.extend({
  layout,
  classNames: ['up-next'],
  MILLISECONDS_IN_HOUR: 3600000,
  MILLISECONDS_IN_MINUTE: 60000,
  MILLISECONDS_IN_SECOND: 1000,

  /**
  Next scheduled airing.

  @argument airing
  @type {[airing]}
  */
  airing: null,

  time: computed('clock.second', function() {
    if (this.airing && this.airing.startTime) {
      let currentTime = new Date();
      if (this.airing.startTime.getTime() - currentTime.getTime() > this.MILLISECONDS_IN_HOUR) {
        return moment(this.airing.startTime).format('h:mm A');
      } else if (this.airing.startTime.getTime() - currentTime.getTime() > this.MILLISECONDS_IN_MINUTE) {
        return 'in ' + ((this.airing.startTime.getTime() - currentTime.getTime()) / this.MILLISECONDS_IN_MINUTE).toFixed(0) + ' min';
      } else if (this.airing.startTime.getTime() - currentTime.getTime() >= 0) {
        return 'in ' + ((this.airing.startTime.getTime() - currentTime.getTime()) / this.MILLISECONDS_IN_SECOND).toFixed(0) + ' sec';
      } else {
        return 'now';
      }
    }
    return '';
  })
});

