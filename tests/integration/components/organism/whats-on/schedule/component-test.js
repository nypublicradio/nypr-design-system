import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | organism/whats-on/schedule', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders with correct title and timestamp', async function(assert) {
    let currentTime = new Date();
    let startTime = new Date(currentTime.getTime() + (24 * 60 * 60 * 1000));
    startTime.setHours(8);
    startTime.setMinutes(0);
    startTime.setSeconds(0);
    startTime.setMilliseconds(0);

    this.set('nowPlaying', {
      nextAiring: {
        showTitle: 'BBC World Service',
        startTime: startTime,
        show: {
          image: {
            url: ''
          }
        }
      }
    });

    await render(hbs`<Organism::WhatsOn::Schedule @airing={{this.nowPlaying.nextAiring}} @scheduleUrl='https://www.wnyc.org/schedule/' />`);

    assert.dom('.schedule-metadata-copy-title-text').hasText('BBC World Service');
    assert.dom('.schedule-metadata-copy-time').hasText('8:00 AM');
    assert.dom('.schedule-full-schedule-button').exists();
  });
});
