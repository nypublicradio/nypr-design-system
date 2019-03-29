import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | nypr-o-donate', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(3)

    this.set('close', () => assert.ok('close argument is called'));

    await render(hbs`
      <NyprODonate
        @message='hello world'
        @linkText='click me'
        @linkUrl='http://example.com/pledge'
        @close={{action close}}
      />
    `);

    await click('[data-test-donate-close]');

    assert.dom('.c-donate-tout__inner p').hasText('hello world');
    assert.dom('a.o-button').hasAttribute('href', 'http://example.com/pledge');
  });

  test('yields a block for the "message" area', async function(assert) {
    const TEXT = 'Donate';
    const URL = 'https://example.com';

    this.setProperties({
      TEXT,
      URL,
      message: '<p data-test-message>hello <strong>world</strong></p>',
    });

    await render(hbs`
      <NyprODonate @linkText={{TEXT}} @linkUrl={{URL}}>
        {{{message}}}
      </NyprODonate>
    `);

    assert.dom('[data-test-message]').hasText('hello world');
    assert.dom('a.o-button').hasAttribute('href', URL);
    assert.dom('a.o-button').hasText(TEXT);
  });
});
