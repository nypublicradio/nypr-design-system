import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | icon', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<Icon/>`);
    assert.dom(this.element).hasText('', 'renders nothing with no inputs');

    await render(hbs`<Icon @icon="whatever"/>`);
    assert.ok('renders ok with a bad filename');
  });
});
