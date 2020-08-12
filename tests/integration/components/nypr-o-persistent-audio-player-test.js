import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import Service from '@ember/service';

module('Integration | Component | nypr-o-persistent-audio-player', function(hooks) {
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

    await render(hbs`{{nypr-o-persistent-audio-player}}`);
    assert.dom('.nypr-o-audio-player-play-button').exists();
  });
});
