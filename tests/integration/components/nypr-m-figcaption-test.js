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

    assert.dom('figcaption.o-caption').exists();
    assert.dom('figcaption').includesText(CAPTION);
    assert.dom('figcaption .o-credit').hasText(CREDIT);
  });

  test('the many variations of figcaptions', async function(assert) {
    const CAPTION = "Figure caption";
    const CREDIT = "Credit for this figure";
    this.setProperties({
      caption: CAPTION,
      credit: CREDIT,
    });

    await render(hbs`
      <NyprMFigcaption @caption={{caption}} @credit={{credit}}/>
    `);
    assert.dom('.o-caption__text > span > span.o-icon').exists('inline form puts the icon insdide an unmarked span.');

    await render(hbs`
      <NyprMFigcaption @credit={{credit}}/>
    `);
    assert.dom('.o-caption__text > span.o-credit > span.o-icon').exists('inline form WITHOUT a caption puts the icon inside the credit span');

    await render(hbs`
      <NyprMFigcaption as |figcaption|>
        <figcaption.caption @caption={{caption}} @credit={{credit}} />
      </NyprMFigcaption>
    `);
    assert.dom('.o-caption__text > span > span.o-icon').exists('block form with inline caption puts the icon insdide an unmarked span.');

    await render(hbs`
      <NyprMFigcaption as |figcaption|>
        <figcaption.caption @caption={{caption}} />
        <figcaption.credit @credit={{credit}} />
      </NyprMFigcaption>
    `);
    assert.dom('.o-caption__text > span > span.o-icon').exists('block form with inline caption and inline credit puts the icon inside an unmarked span.');

    await render(hbs`
      <NyprMFigcaption as |figcaption|>
        <figcaption.credit @credit={{credit}} @includeIcon={{true}}/>
      </NyprMFigcaption>
    `);
    assert.dom('.o-caption > span.o-credit > span.o-icon').exists('block form with only inline credit requires @includeIcon to show an icon');
  })
});
