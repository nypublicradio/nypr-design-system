import { module } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import test from 'ember-sinon-qunit/test-support/test';

module('Integration | Component | nypr-m-box-banner', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<NyprMBoxBanner/>`);

    assert.dom('.o-box-banner').exists();

    // Template block usage:
    await render(hbs`
      <NyprMBoxBanner as |banner|>
        <banner.title>TITLE</banner.title>

        <banner.dek>BODY</banner.dek>

        <banner.cta>CTA</banner.cta>
      </NyprMBoxBanner>
    `);

    assert.dom('.o-box-banner__title').hasText('TITLE');
    assert.dom('.o-box-banner__dek').hasText('BODY');
    assert.dom('.o-box-banner__cta').hasText('CTA');
  });

  test('it calls the @close action when close is clicked', async function(assert) {
    await render(hbs`<NyprMBoxBanner/>`);
    assert.dom('.o-box-banner__close').doesNotExist('no close button if @close is not passed in');

    this.set('CLOSE', this.mock('close').once());

    await render(hbs`<NyprMBoxBanner @close={{CLOSE}}/>`);

    await click('.o-box-banner__close');
  });
});
