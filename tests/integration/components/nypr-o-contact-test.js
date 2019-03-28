import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | nypr-o-contact', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<NyprOContact/>`);
    assert.dom('.c-contact-tout').exists();

    await render(hbs`
      <NyprOContact>
        <p><strong>hello</strong> <em>world</em></p>
      </NyprOContact>
    `);

    assert.dom('.c-contact-tout').hasText('hello world');
  });
});
