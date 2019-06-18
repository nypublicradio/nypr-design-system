import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { clickTrigger } from 'ember-basic-dropdown/test-support/helpers';


module('Integration | Component | nypr-a-toggle-box', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`
      <NyprAToggleBox as |toggle|>
        <toggle.trigger>
          <span class="the-label">Toggle Box Label</span>
        </toggle.trigger>

        <toggle.dropdown>
          Dropdown Contents
        </toggle.dropdown>
      </NyprAToggleBox>
    `);

    // target span b/c there's an icon with assistive text in the label
    assert.dom('.c-toggle-box__label span.the-label').hasText('Toggle Box Label');
    await clickTrigger();
    assert.dom('.c-toggle-box__dropdown').hasText('Dropdown Contents');
  });
});
