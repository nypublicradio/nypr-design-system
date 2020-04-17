import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('not-found', {path: '/*path'});
});

export default Router;
