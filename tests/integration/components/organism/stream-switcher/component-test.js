import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | organism/stream-switcher', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    await render(hbs`<Organism::StreamSwitcher />`);
    assert.dom('.stream-switcher').exists();
  });

  test('it renders without any streams', async function(assert) {
    await render(hbs`<Organism::StreamSwitcher />`);
    assert.dom('.stream-switcher-streams').doesNotExist();
  });

  test('it renders with streams', async function(assert) {
    this.set('streams', {'1': {}, '2': {}, '3': {}});
    await render(hbs`<Organism::StreamSwitcher @streams={{this.streams}}/>`);
    assert.dom('.stream-switcher').exists('.stream-switcher exists');
    assert.dom('.stream-switcher-streams').exists('stream list displayed');
    assert.dom('.stream-switcher-streams-stream').exists({ count: 3 }, 'correct number of streams displayed in list');
  });
});
