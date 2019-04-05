// BEGIN-SNIPPET nypr-o-header.js
import Component from '@ember/component';
import layout from '../templates/components/nypr-o-header';

/**
 Site header

 @class nypr-o-header
 @yield {Hash} hash
 @yield {Component} hash.leaderboard `blank-template`
 @yield {Component} hash.site `nypr-m-meta/site`
 @yield {Component} hash.article `nypr-m-meta/article`
 @yield {Component} hash.gallery `nypr-m-meta/gallery`
*/
export default Component.extend({
  layout,
  tagName: 'header',
  classNames: ['c-main-header'],
});
// END-SNIPPET
