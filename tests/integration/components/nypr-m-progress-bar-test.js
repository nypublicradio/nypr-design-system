import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { scrollPastTarget } from 'nypr-design-system/test-support';

module('Integration | Component | nypr-m-progress-bar', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<NyprMProgressBar/>`);
    assert.dom('.o-progress').exists();
  });

  test('it updates as you scroll', async function(assert) {
    await render(hbs`
      <NyprMProgressBar/>
      <div id="foo" style="height: 1000px;"/>
    `);

    let reset = await scrollPastTarget(this, '#foo')

    assert.ok(`.o-progress has value ${this.element.querySelector('.o-progress')}`);

    assert.dom('.o-progress').hasValue(1);

    reset();
  });
});
