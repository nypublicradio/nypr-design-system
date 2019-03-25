import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | nypr-a-svg', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<NyprASvg/>`);
    assert.equal(this.element.textContent.trim(), '', 'renders nothing with no inputs');

    await render(hbs`<NyprASvg @icon="whatever"/>`);
    assert.ok('renders ok with a bad filename');
  });
});
