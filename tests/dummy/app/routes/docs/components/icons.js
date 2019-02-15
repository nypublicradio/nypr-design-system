/* global require */
import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    let paths = Object.keys(require.entries);
    return paths
      .filter(path => path.match('dummy/templates/components/nypr-svg/'))
      .map(path => path.split('/').slice(-1))
      .flat();
  }
});
