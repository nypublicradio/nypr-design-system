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
    this.route('colors');
    this.route('typography');
    this.route('atoms', function() {
      this.route('-button');
      this.route('-picture');
      this.route('media-object');
      this.route('icons');
    });
    this.route('molecules', function() {
      this.route('-figcaption');
    })
    this.route('components', function() {
      this.route('nypr-card');
      this.route('story-header');
    });
  });

  this.route('not-found', {path: '/*path'});
});

export default Router;
