import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | nypr-m-figcaption', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    const CAPTION = "Figure caption";
    const CREDIT = "Credit for this figure";

    this.setProperties({
      caption: CAPTION,
      credit: CREDIT,
    });
    await render(hbs`
      <NyprMFigcaption @caption={{caption}} @credit={{credit}}/>
    `);

    assert.dom('figcaption.o-figure__caption').exists();
    assert.dom('figcaption').includesText(CAPTION);
    assert.dom('figcaption .o-credit').hasText(CREDIT);
  })
});
