import Controller from '@ember/controller';

export const ITEMS = [{
    title: 'Another Story',
    url: '/story/another-story',
  }, {
    title: 'Related Coverage',
    url: '/story/related-coverage',
  }, {
    title: 'Urban Organics Wants to Fix Food',
    url: '/story/urban-organics-wants-to-fix-food'
}];

export default Controller.extend({
  ITEMS,
});
