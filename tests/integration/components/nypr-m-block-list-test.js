import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | nypr-m-block-list', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`
      <NyprMBlockList @items={{array 'foo' 'bar'}} as |item|>
        {{item}}
      </NyprMBlockList>
    `);

    assert.dom('.c-block-list').exists();
    assert.dom('.c-block-list li').exists({count: 2});
    assert.dom('.c-block-list').includesText('foo bar', 'yields out items unchanged');
  });
});
