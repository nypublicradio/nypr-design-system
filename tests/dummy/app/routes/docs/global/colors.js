import Route from '@ember/routing/route';
import wnyc from '../../../utils/sass-vars/wnyc-colors';
import gothamist from '../../../utils/sass-vars/gothamist-colors';

export default Route.extend({
  model() {
    return {
      wnyc,
      gothamist
    };
  }
});
