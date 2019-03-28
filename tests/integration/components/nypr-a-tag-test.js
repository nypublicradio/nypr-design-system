import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | nypr-a-tag', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<NyprATag @url='http://example.com' @tag='foo' />`);

    assert.dom('a.o-tag').hasText('#foo', 'prepends a "#" character');

    await render(hbs`<NyprATag @url='http://example.com' @tag='foo' @prefix='' />`);
    assert.dom('a.o-tag').hasText('foo', 'can override prefix');

    await render(hbs`<NyprATag @tag='bar'/>`);
    assert.dom('span.o-tag').exists('renders a span if no url is provided');
  });
});
