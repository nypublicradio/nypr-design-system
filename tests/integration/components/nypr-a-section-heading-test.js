import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | nypr-a-section-heading', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<NyprASectionHeading/>`);

    assert.dom('h2.o-section-heading').exists();

    // Template block usage:
    await render(hbs`
      <NyprASectionHeading>
        template block text
      </NyprASectionHeading>
    `);

    assert.dom('h2.o-section-heading').hasText('template block text');
  });
});
