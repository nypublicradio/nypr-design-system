// import { module, test } from 'qunit';
// import { setupRenderingTest } from 'ember-qunit';
// import { render } from '@ember/test-helpers';
// import hbs from 'htmlbars-inline-precompile';
// import Service from '@ember/service';
//
// module('Integration | Component | organism/stream-switcher', function(hooks) {
//   setupRenderingTest(hooks);
//
//   test('it renders', async function(assert) {
//     const DataLayerService = Service.extend({
//     });
//     this.owner.register('service:dataLayer', DataLayerService);
//     const HifiService = Service.extend({
//     });
//     this.owner.register('service:hifi', HifiService);
//     const DjService = Service.extend({
//     });
//     this.owner.register('service:dj', DjService);
//
//     this.set('nowPlaying', {
//       stream: {
//         name: 'WNYC FM 93.9',
//         slug: 'wnyc-fm939',
//         currentShow: {
//           description: '<p>Your morning companion from NPR and the WNYC Newsroom, with world news, local features, and weather updates.',
//         }
//       },
//       show: {
//         title: 'Morning Edition',
//         about: {
//           body: '<p>Morning Edition is your perfect morning companion: gentle, but straightforward, explaining the vagaries of international diplomacy, reporting weather and even recommending the best film in town. Mornings and hard news can coexist in peace. Morning hosts make complex news digestible to millions of listeners who have yet to finish their first cup of coffee. Whether the story breaks in Bosnia or Brooklyn, news reports with on-the-spot sound create a complete picture for your ears.</p>\n<p>Contact us using <a href="http://www.wnyc.org/contact/">our feedback form</a>.</p>',
//         },
//         tease: '<p>Your morning companion from NPR and the WNYC Newsroom, with world news, local features, and weather updates.</p>'
//       },
//       nextAiring: {
//         showTitle: 'BBC World Service',
//         startTime: new Date(2020, 8, 27, 8, 0, 0, 0),
//         show: {
//           image: {
//             url: ''
//           }
//         }
//       }
//     });
//
//     await render(hbs`<Organism::StreamSwitcher />`);
//     assert.dom('.stream-switcher').exists();
//   });
//
//   test('it doesn\'t render a list without any streams', async function(assert) {
//     const DataLayerService = Service.extend({
//     });
//     this.owner.register('service:dataLayer', DataLayerService);
//     const HifiService = Service.extend({
//     });
//     this.owner.register('service:hifi', HifiService);
//     const DjService = Service.extend({
//     });
//     this.owner.register('service:dj', DjService);
//
//     this.set('nowPlaying', {
//       stream: {
//         name: 'WNYC FM 93.9',
//         slug: 'wnyc-fm939',
//         currentShow: {
//           description: '<p>Your morning companion from NPR and the WNYC Newsroom, with world news, local features, and weather updates.',
//         }
//       },
//       show: {
//         title: 'Morning Edition',
//         about: {
//           body: '<p>Morning Edition is your perfect morning companion: gentle, but straightforward, explaining the vagaries of international diplomacy, reporting weather and even recommending the best film in town. Mornings and hard news can coexist in peace. Morning hosts make complex news digestible to millions of listeners who have yet to finish their first cup of coffee. Whether the story breaks in Bosnia or Brooklyn, news reports with on-the-spot sound create a complete picture for your ears.</p>\n<p>Contact us using <a href="http://www.wnyc.org/contact/">our feedback form</a>.</p>',
//         },
//         tease: '<p>Your morning companion from NPR and the WNYC Newsroom, with world news, local features, and weather updates.</p>'
//       },
//       nextAiring: {
//         showTitle: 'BBC World Service',
//         startTime: new Date(2020, 8, 27, 8, 0, 0, 0),
//         show: {
//           image: {
//             url: ''
//           }
//         }
//       }
//     });
//
//     await render(hbs`<Organism::StreamSwitcher />`);
//     assert.dom('.stream-switcher-streams').doesNotExist();
//   });
//
//   test('it renders with streams', async function(assert) {
//     const DataLayerService = Service.extend({
//     });
//     this.owner.register('service:dataLayer', DataLayerService);
//     const HifiService = Service.extend({
//     });
//     this.owner.register('service:hifi', HifiService);
//     const DjService = Service.extend({
//     });
//     this.owner.register('service:dj', DjService);
//
//     this.set('nowPlaying', {
//       stream: {
//         name: 'WNYC FM 93.9',
//         slug: 'wnyc-fm939',
//         currentShow: {
//           description: '<p>Your morning companion from NPR and the WNYC Newsroom, with world news, local features, and weather updates.',
//         }
//       },
//       show: {
//         title: 'Morning Edition',
//         about: {
//           body: '<p>Morning Edition is your perfect morning companion: gentle, but straightforward, explaining the vagaries of international diplomacy, reporting weather and even recommending the best film in town. Mornings and hard news can coexist in peace. Morning hosts make complex news digestible to millions of listeners who have yet to finish their first cup of coffee. Whether the story breaks in Bosnia or Brooklyn, news reports with on-the-spot sound create a complete picture for your ears.</p>\n<p>Contact us using <a href="http://www.wnyc.org/contact/">our feedback form</a>.</p>',
//         },
//         tease: '<p>Your morning companion from NPR and the WNYC Newsroom, with world news, local features, and weather updates.</p>'
//       },
//       nextAiring: {
//         showTitle: 'BBC World Service',
//         startTime: new Date(2020, 8, 27, 8, 0, 0, 0),
//         show: {
//           image: {
//             url: ''
//           }
//         }
//       }
//     });
//
//     this.set('streams', {'1': {}, '2': {}, '3': {}});
//
//     await render(hbs`<Organism::StreamSwitcher @streams={{this.streams}}/>`);
//     assert.dom('.stream-switcher').exists('.stream-switcher exists');
//     assert.dom('.stream-switcher-streams').exists('stream list displayed');
//     assert.dom('.stream-switcher-streams-stream').exists({ count: 3 }, 'correct number of streams displayed in list');
//   });
// });
