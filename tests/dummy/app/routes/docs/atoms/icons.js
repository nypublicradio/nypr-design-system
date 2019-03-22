/* global require */
import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    let paths = Object.keys(require.entries);
    return paths
      .filter(path => path.match('dummy/templates/components/atoms/-svg/'))
      .map(path => path.split('/').slice(-1))
      .flat();
  },

  actions: {
    didTransition() {
      this.controllerFor('docs.atoms').set('targetName', 'atoms/-svg');
    }
  }
});
