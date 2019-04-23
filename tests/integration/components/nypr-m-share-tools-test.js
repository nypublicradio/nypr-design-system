import { module } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import test from 'ember-sinon-qunit/test-support/test';

module('Integration | Component | nypr-m-share-tools', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`
      <NyprMShareTools as |tools|>
        <tools.link @service='facebook' @username='foo'/>
        <tools.link @service='twitter' @username='bar'/>
        <tools.link @service='instagram' @username='baz'/>
      </NyprMShareTools>
    `);

    assert.dom('a[href="https://www.facebook.com/foo"]').exists();
    assert.dom('.o-facebook-icon').exists();
    assert.dom('a[href="https://twitter.com/bar"]').exists();
    assert.dom('.o-twitter-icon').exists();
    assert.dom('a[href="https://www.instagram.com/baz"]').exists();
    assert.dom('.o-instagram-icon').exists();
  });

  test('it opens a popup to facebook', async function() {
    const URL = window.location.toString();
    this.mock(window)
      .expects('open')
      .withArgs(`https://www.facebook.com/sharer.php?u=${URL}`);

    await render(hbs`
      <NyprMShareTools as |tools|>
        <tools.share @service='facebook'/>
      </NyprMShareTools>
    `);

    await click('button.c-share-tools__link');
  });

  test('it opens a popup to twitter', async function() {
    const URL = window.location.toString();
    const TEXT = 'bar';
    const VIA = 'baz';
    this.mock(window)
      .expects('open')
      .withArgs(`https://twitter.com/intent/tweet?text=${TEXT}&via=${VIA}&url=${URL}`);

    this.setProperties({
      TEXT,
      VIA
    });

    await render(hbs`
      <NyprMShareTools as |tools|>
        <tools.share @service='twitter' @params={{hash text=TEXT via=VIA}}/>
      </NyprMShareTools>
    `);

    await click('button.c-share-tools__link');
  });

  test('it can override the derived share url', async function() {
    const URL = 'http://example.com';
    const TEXT = 'bar';
    const VIA = 'baz';
    this.mock(window)
      .expects('open')
      .withArgs(`https://twitter.com/intent/tweet?text=${TEXT}&via=${VIA}&url=${URL}`);

    this.setProperties({
      TEXT,
      VIA,
      URL,
    });

    await render(hbs`
      <NyprMShareTools as |tools|>
        <tools.share @service='twitter' @url={{URL}} @params={{hash text=TEXT via=VIA}}/>
      </NyprMShareTools>
    `);

    await click('button.c-share-tools__link');

  })
});
