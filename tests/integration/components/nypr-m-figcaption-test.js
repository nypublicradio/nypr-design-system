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
    assert.dom('.o-caption > .o-icon').exists('inline form puts the icon insdide the caption root');
    assert.dom('.o-caption > .o-icon + .o-caption__text').exists('inline form puts the text as a sibling to the icon');
    assert.dom('.o-caption > .o-caption__text > span:not(.o-credit)').hasText(CAPTION);
    assert.dom('.o-caption > .o-caption__text > span.o-credit').hasText(CREDIT);

    await render(hbs`
      <NyprMFigcaption @credit={{credit}}/>
    `);
    assert.dom('.o-caption > .o-caption__text > span.o-credit > span.o-icon').exists('inline form WITHOUT a caption puts the icon inside the credit span');
    assert.dom('.o-caption > .o-caption__text > span.o-credit > span:not(.o-icon)').hasText(CREDIT);

    await render(hbs`
      <NyprMFigcaption as |figcaption|>
        <figcaption.caption @caption={{caption}} />
      </NyprMFigcaption>
    `);
    assert.dom('.o-caption > .o-icon + .o-caption__text').exists('block form with only an inline caption puts the icon directly below `.o-caption` as a sibling of `.o-caption__text`')
    assert.dom('.o-caption > .o-caption__text > span').hasText(CAPTION);

    await render(hbs`
      <NyprMFigcaption as |figcaption|>
        <figcaption.credit @credit={{credit}} />
        <figcaption.caption @caption={{caption}} />
      </NyprMFigcaption>
    `);
    assert.dom('.o-caption > .o-credit + .o-icon + .o-caption__text').exists('adding a credit does not interfere with the icon rendering');
    assert.dom('.o-caption > .o-credit > span').doesNotExist('no inner span for credit');
    assert.dom('.o-caption > .o-credit').hasText(CREDIT);
    assert.dom('.o-caption > .o-caption__text > span').hasText(CAPTION);

    await render(hbs`
      <NyprMFigcaption as |figcaption|>
        <figcaption.credit @credit={{credit}} @includeIcon={{true}}/>
      </NyprMFigcaption>
    `);
    assert.dom('.o-caption > .o-credit > span.o-icon').exists('block form with only inline credit requires @includeIcon to show an icon');
    assert.dom('.o-caption > .o-credit > span:not(.o-icon)').hasText(CREDIT, 'rendering with `@includeIcon` adds a wrapper span')
  })
});
