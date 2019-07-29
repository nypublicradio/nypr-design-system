import { module } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, fillIn } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import test from 'ember-sinon-qunit/test-support/test';

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
    assert.expect(10);

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

      <div id="outside">not in the search form</div>
    `);

    assert.dom('.c-search').hasAttribute('aria-hidden', 'true');

    await click('.c-search-toggle');
    assert.dom('.c-search.is-open').exists();
    assert.dom('.c-search').hasAttribute('aria-hidden', 'false');
    assert.dom('button.c-search__button[type="submit"]').exists('submit button exists');

    await fillIn('.c-search__input', QUERY);
    await click('#outside');
    assert.dom('.c-search.is-open').doesNotExist('should close on blur');
    await click('.c-search-toggle');
    assert.dom('.c-search__input').hasNoValue('should clear on blur');

    await fillIn('.c-search__input', QUERY);
    await click('[data-test-inline-search-submit]');

    assert.dom('.c-search.is-open').exists();
    await fillIn('.c-search__input', '');
    await click('[data-test-inline-search-submit]');
    assert.dom('.c-search.is-open').doesNotExist('should close if field is empty and submit is clicked');

    await render(hbs`<NyprMInlineSearch @search={{SEARCH}} />`);

    await fillIn('.c-search__input', QUERY);
    await click('[data-test-inline-search-submit]');
  });

  test('can init with a query value', async function(assert) {
    const QUERY = 'foo';
    this.setProperties({
      QUERY,
    });
    await render(hbs`<NyprMInlineSearch @query={{QUERY}}/>`);

    assert.dom('.c-search__input').hasValue(QUERY);
  });

  test('can update search value from outer context', async function(assert) {
    const SEARCH = this.spy();
    const QUERY = 'foo'
    this.setProperties({
      SEARCH,
      QUERY,
    });

    await render(hbs`<NyprMInlineSearch @query={{QUERY}} @search={{SEARCH}}/>`);
    await click('[data-test-inline-search-submit]');

    this.set('QUERY', 'bar');
    await click('[data-test-inline-search-submit]');

    assert.ok(SEARCH.firstCall.calledWith('foo'), 'first call is called with the initial value');
    assert.ok(SEARCH.secondCall.calledWith('bar'), 'second call is called with the updated value');
  });
});
