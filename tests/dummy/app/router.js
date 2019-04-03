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
    this.route('global', function() {
      this.route('colors');
      this.route('typography');
    });
    this.route('atoms', function() {
      this.route('nypr-a-button');
      this.route('nypr-a-picture');
      this.route('nypr-a-media-object');
      this.route('nypr-a-svg');
      this.route('nypr-a-toggle-box');
      this.route('nypr-a-tag');
    });
    this.route('molecules', function() {
      this.route('nypr-m-figcaption');
      this.route('nypr-m-figure');
      this.route('nypr-m-block');
      this.route('nypr-m-block-meta');
      this.route('nypr-m-tags');
      this.route('nypr-m-byline');
      this.route('nypr-m-breadcrumb');
      this.route('nypr-m-gallery-lead');
    });
    this.route('organisms', function() {
      this.route('nypr-o-article-body');
      this.route('nypr-o-article-footer');
      this.route('nypr-o-article-header');
      this.route('nypr-o-contact');
      this.route('nypr-o-donate');
    })
  });

  this.route('not-found', {path: '/*path'});
});

export default Router;
