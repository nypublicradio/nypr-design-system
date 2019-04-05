import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | nypr-m-inline-search', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<NyprMInlineSearch/>`);

    assert.dom('form.c-search').exists();

    await render(hbs`
      <NyprMInlineSearch as |search|>
        <search.open/>

        <search.form/>
      </NyprMInlineSearch>
    `);

    assert.dom('button.c-search-toggle').exists();
    assert.dom('form.c-search').exists();
  });
});
