import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | nypr-a-button', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(3);

    await render(hbs`<NyprAButton @text='Foo' />`);

    assert.dom('.o-button').hasText('Foo');

    this.set('click', () => assert.ok('click handler called'));

    await render(hbs`
      <NyprAButton @onclick={{click}}>
        Click Me
      </NyprAButton>
    `);

    assert.dom('.o-button').hasText('Click Me');
    await click('.o-button');
  });

  test('alternate forms', async function(assert) {

    await render(hbs`<NyprAButton @url='https://example.com' @text='foo' />`);
    assert.dom('a.o-button').hasAttribute('href', 'https://example.com', 'passing a @url makes an `a` tag');
    assert.dom('a.o-button').hasText('foo');

    await render(hbs`<NyprAButton @blank={{true}} @text='plain' />`);
    assert.dom('button.o-button').doesNotExist('rendered without class');
    assert.dom('button').exists('rendered a blank button');

  });
});
