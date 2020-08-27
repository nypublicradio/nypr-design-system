import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import Service from '@ember/service';

module('Integration | Component | organism/whats-on', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders with show, episode, and up next metadata', async function(assert) {
    const DataLayerService = Service.extend({
    });
    this.owner.register('service:dataLayer', DataLayerService);
    const HifiService = Service.extend({
    });
    this.owner.register('service:hifi', HifiService);
    const DjService = Service.extend({
    });
    this.owner.register('service:dj', DjService);

    this.set('nowPlaying', {
      stream: {
        name: 'WNYC FM 93.9',
        slug: 'wnyc-fm939',
        currentShow: {
          description: '<p>Your morning companion from NPR and the WNYC Newsroom, with world news, local features, and weather updates.',
        }
      },
      show: {
        title: 'Morning Edition',
        about: {
          body: '<p>Morning Edition is your perfect morning companion: gentle, but straightforward, explaining the vagaries of international diplomacy, reporting weather and even recommending the best film in town. Mornings and hard news can coexist in peace. Morning hosts make complex news digestible to millions of listeners who have yet to finish their first cup of coffee. Whether the story breaks in Bosnia or Brooklyn, news reports with on-the-spot sound create a complete picture for your ears.</p>\n<p>Contact us using <a href="http://www.wnyc.org/contact/">our feedback form</a>.</p>',
        },
        tease: '<p>Your morning companion from NPR and the WNYC Newsroom, with world news, local features, and weather updates.</p>'
      },
      nextAiring: {
        showTitle: 'BBC World Service',
        startTime: new Date(2020, 8, 27, 8, 0, 0, 0),
        show: {
          image: {
            url: ''
          }
        }
      }
    });

    await render(hbs`<Organism::WhatsOn @nowPlaying={{this.nowPlaying}} @scheduleUrl='https://www.wnyc.org/schedule/'/>`);

    assert.dom('.play-button').exists();
    assert.dom('.on-air-image').exists();
    assert.dom('.whats-on-show-title').hasText('Morning Edition');
    assert.dom('.whats-on-show-description').hasText('Your morning companion from NPR and the WNYC Newsroom, with world news, local features, and weather updates.');
    assert.dom('.whats-on-episode').exists();
    assert.dom('.whats-on-schedule').exists();

    this.set('nowPlaying', {
      stream: {
        name: 'WNYC FM 93.9',
        slug: 'wnyc-fm939',
      },
      show: {
        title: 'Morning Edition',
        about: {
          body: '<p>Morning Edition is your perfect morning companion: gentle, but straightforward, explaining the vagaries of international diplomacy, reporting weather and even recommending the best film in town. Mornings and hard news can coexist in peace. Morning hosts make complex news digestible to millions of listeners who have yet to finish their first cup of coffee. Whether the story breaks in Bosnia or Brooklyn, news reports with on-the-spot sound create a complete picture for your ears.</p>\n<p>Contact us using <a href="http://www.wnyc.org/contact/">our feedback form</a>.</p>',
        }
      }
    });

    await render(hbs`<Organism::WhatsOn @nowPlaying={{this.nowPlaying}} @scheduleUrl='https://www.wnyc.org/schedule/'/>`);

    assert.dom('.whats-on-episode').doesNotExist();
    assert.dom('.whats-on-schedule').doesNotExist();
  });
});
