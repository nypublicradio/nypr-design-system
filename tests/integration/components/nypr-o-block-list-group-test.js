import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | nypr-o-block-list-group', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders columns', async function(assert) {
    await render(hbs`
      <NyprOBlockListGroup as |blg|>
        <blg.col1>
          column 1
        </blg.col1>
        <blg.col2>
          column 2
        </blg.col2>
      </NyprOBlockListGroup>
    `);

    assert.dom('.c-block-group__col1').hasText('column 1');
    assert.dom('.c-block-group__col2').hasText('column 2');
  });

  test('it tracks how many columns are rendered', async function(assert) {
    await render(hbs`
      <NyprOBlockListGroup as |blg|>
        <blg.col1>
          column 1
        </blg.col1>
      </NyprOBlockListGroup>
    `);

    assert.dom('.c-block-group').hasClass('c-block-group--single-col');
  });

  test('the ad unit has mutiple sizes', async function(assert) {
    await render(hbs`
      <NyprOBlockListGroup as |blg|>
        <blg.col1 as |col|>
          <col.ad @size='short'/>
        </blg.col1>
      </NyprOBlockListGroup>
    `);

    assert.dom('.o-ad--300x250').exists();

    await render(hbs`
      <NyprOBlockListGroup as |blg|>
        <blg.col1 as |col|>
          <col.ad @size='tall'/>
        </blg.col1>
      </NyprOBlockListGroup>
    `);

    assert.dom('.o-ad--300x600-flex').exists();
  });
});
