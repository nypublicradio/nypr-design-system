import AddonDocsRouter, { docsRoute } from 'ember-cli-addon-docs/router';
import RouterScroll from 'ember-router-scroll';
import config from './config/environment';

const Router = AddonDocsRouter.extend(RouterScroll, {
  location: 'router-scroll',
  historySupportMiddleware: true,
  rootURL: config.rootURL
});

Router.map(function() {
  docsRoute(this, function() {
    this.route('atoms', function() {
      this.route('global', function() {
        this.route('colors');
      });
    });
  });

  this.route('not-found', {path: '/*path'});
});

export default Router;
