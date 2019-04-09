import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, fillIn } from '@ember/test-helpers';
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

  test('interactivity', async function(assert) {
    assert.expect(3);

    const QUERY = 'foo';
    const SEARCH = val => assert.equal(val, QUERY);
    this.setProperties({
      QUERY,
      SEARCH,
    });

    await render(hbs`
      <NyprMInlineSearch as |search|>
        <search.open/>
        <search.form @search={{SEARCH}}/>
      </NyprMInlineSearch>
    `);

    await click('.c-search-toggle');
    assert.dom('.c-search.is-open').exists();

    await fillIn('.c-search__input', QUERY);
    await click('[data-test-inline-search-submit]');

    await render(hbs`<NyprMInlineSearch @search={{SEARCH}} />`);

    await fillIn('.c-search__input', QUERY);
    await click('[data-test-inline-search-submit]');

  });
});
