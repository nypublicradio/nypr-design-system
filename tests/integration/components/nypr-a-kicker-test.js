import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | nypr-a-kicker', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<NyprAKicker/>`);

    assert.dom('.o-kicker').exists();

    // Template block usage:
    await render(hbs`
      <NyprAKicker>
        template block text
      </NyprAKicker>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
