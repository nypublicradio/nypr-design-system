import Controller from '@ember/controller';

// BEGIN-SNIPPET breadcrumb-definition.js
const BREADCRUMBS = [{
  label: 'News',
  url: '/tags/news',
}, {
  label: 'Politics'
}];
// END-SNIPPET  

export default Controller.extend({
  BREADCRUMBS,
});
