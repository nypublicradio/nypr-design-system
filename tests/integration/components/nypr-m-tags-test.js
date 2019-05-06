import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, findAll } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | nypr-m-tags', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('tags', ['foo', 'bar']);
    await render(hbs`<NyprMTags @tags={{tags}}/>`);

    assert.dom('.o-tags').hasText('#foo #bar');
    assert.dom('span.o-tag').exists({count: 2});

    await render(hbs`<NyprMTags @tags={{tags}} @prefix='' />`);
    assert.dom('.o-tags').hasText('foo bar', 'can override prefix');

    await render(hbs`
      <NyprMTags @tags={{tags}} as |Tag tag|>
        <Tag @url='/tags/{{tag}}' />
      </NyprMTags>
    `);
    assert.dom('a.o-tag').exists({count: 2});
    findAll('a.o-tag').forEach(el => {
      assert.dom(el).hasAttribute('href', `/tags/${el.textContent.trim().slice(1)}`);
    })
  });
});
