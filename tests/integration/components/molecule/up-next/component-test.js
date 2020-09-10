import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | molecule/up-next', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('airing', { showTitle: 'All of It'});
    await render(hbs`<Molecule::UpNext @airing={{this.airing}} />`);
    assert.dom('.up-next-show-title').hasText('All of It');
  });
});
