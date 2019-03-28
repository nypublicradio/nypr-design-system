import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | nypr-m-block', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<NyprMBlock/>`);
    assert.dom('.c-block').exists();

    await render(hbs`<NyprMBlock @orientation='h'/>`);
    assert.dom('.c-block--item').exists('`orientation` controls view');

  });
});
