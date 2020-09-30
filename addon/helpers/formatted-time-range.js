import { helper } from '@ember/component/helper';
import moment from 'moment';

export function formattedTimeRange(params/*, hash*/) {
  if (!params) {
    return '';
  }

  return moment(params[0]).format('h:mm A') +
    ' to ' +
    moment(params[1]).format('h:mm A');
}

export default helper(formattedTimeRange);
