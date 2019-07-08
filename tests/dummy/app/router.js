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
      this.route('blocks');
      this.route('nypr-m-block-meta');
      this.route('nypr-m-tags');
      this.route('nypr-m-byline');
      this.route('nypr-m-breadcrumb');
      this.route('nypr-m-gallery-lead');
      this.route('nypr-m-share-tools');
      this.route('nypr-m-newsletter');
      this.route('nypr-m-newsletter-form');
      this.route('nypr-m-to-top');
      this.route('nypr-m-brands-linkroll');
      this.route('nypr-m-progress-bar');
      this.route('nypr-m-inline-search');
      this.route('nypr-m-box-banner');
    });
    this.route('organisms', function() {
      this.route('nypr-o-header');
      this.route('nypr-o-footer');
      this.route('nypr-o-article-body');
      this.route('nypr-o-article-footer');
      this.route('nypr-o-article-header');
      this.route('nypr-o-gallery-overlay');
      this.route('nypr-o-contact');
      this.route('nypr-o-donate');
      this.route('nypr-o-related-content');
      this.route('nypr-o-sponsored-tout');
      this.route('nypr-o-newsletter-tout');
    })
  });

  this.route('not-found', {path: '/*path'});
});

export default Router;
