import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import Service from '@ember/service';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | nypr-o-main-audio-player', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    const DataLayerService = Service.extend({
    });
    this.owner.register('service:dataLayer', DataLayerService);
    const HifiService = Service.extend({
    });
    this.owner.register('service:hifi', HifiService);
    const DjService = Service.extend({
    });
    this.owner.register('service:dj', DjService);

    await render(hbs`{{nypr-o-main-audio-player}}`);
    assert.dom('.on-air-now-label-text').hasText('live');
  });
});
