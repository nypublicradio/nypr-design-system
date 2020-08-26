import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | organism/main-audio-player/episode-content', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{organism/main-audio-player/episode-content}}`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      {{#organism/main-audio-player/episode-content}}
        template block text
      {{/organism/main-audio-player/episode-content}}
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
