import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import Service from '@ember/service';

module('Integration | Component | organism/stream-switcher/stream', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    const HifiService = Service.extend({
    });
    this.owner.register('service:hifi', HifiService);
    const DjService = Service.extend({
    });
    this.owner.register('service:dj', DjService);

    await render(hbs`{{organism/stream-switcher/stream}}`);

    assert.equal(this.element.textContent.trim(), '');

  });
});
