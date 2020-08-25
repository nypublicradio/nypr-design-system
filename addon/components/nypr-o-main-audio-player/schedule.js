import Component from '@ember/component';
import { computed } from '@ember/object';
import moment from 'moment';
import layout from '../../templates/components/nypr-o-main-audio-player/schedule';

export default Component.extend({
  layout,
  classNames: ['schedule'],
  MILLISECONDS_IN_HOUR: 3600000,
  MILLISECONDS_IN_MINUTE: 60000,

  time: computed('clock.minute', function() {
    if (this.airing) {
      let currentTime = new Date();
      if (this.airing.startTime.getTime() - currentTime.getTime() > this.MILLISECONDS_IN_HOUR) {
        return moment(this.airing.startTime).format('h:mm A');
      } else {
        return 'in ' + ((this.airing.startTime.getTime() - currentTime.getTime()) / this.MILLISECONDS_IN_MINUTE).toFixed(0) + ' min';
      }
    }
    return '';
  })
});
