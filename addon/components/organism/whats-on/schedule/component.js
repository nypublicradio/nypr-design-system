import Component from '@ember/component';
import { computed } from '@ember/object';
import moment from 'moment';
import layout from './template';

export default Component.extend({
  layout,
  classNames: ['schedule'],
  MILLISECONDS_IN_HOUR: 3600000,
  MILLISECONDS_IN_MINUTE: 60000,
  MILLISECONDS_IN_SECOND: 1000,

  time: computed('clock.second', function() {
    if (this.airing && this.airing.startTime) {
      let currentTime = new Date();
      if (this.airing.startTime.getTime() - currentTime.getTime() > this.MILLISECONDS_IN_HOUR) {
        return moment(this.airing.startTime).format('h:mm A');
      } else if (this.airing.startTime.getTime() - currentTime.getTime() > this.MILLISECONDS_IN_MINUTE) {
        return 'in ' + ((this.airing.startTime.getTime() - currentTime.getTime()) / this.MILLISECONDS_IN_MINUTE).toFixed(0) + ' min';
      } else {
        return 'in ' + ((this.airing.startTime.getTime() - currentTime.getTime()) / this.MILLISECONDS_IN_SECOND).toFixed(0) + ' sec';
      }
    }
    return '';
  })
});
