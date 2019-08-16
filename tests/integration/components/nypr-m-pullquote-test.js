import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | nypr-m-pullquote', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    const QUOTE = "Lorem Ipsum";
    const AUTHOR = "Mrs. Foo Bar";
    this.setProperties({ QUOTE, AUTHOR });

    await render(hbs`<NyprMPullquote @quote={{QUOTE}} @attribution={{AUTHOR}} />`);

    assert.dom('blockquote.o-pullquote > p > span').hasText(QUOTE);
    assert.dom('blockquote.o-pullquote > .o-pullquote__author').hasText(AUTHOR);

    await render(hbs`
      <NyprMPullquote as |pull|>
        <pull.quote>
          {{QUOTE}}
        </pull.quote>

        <pull.attribution>
          {{AUTHOR}}
        </pull.attribution>
      </NyprMPullquote>
    `);

    assert.dom('blockquote.o-pullquote > p > span').hasText(QUOTE);
    assert.dom('blockquote.o-pullquote > .o-pullquote__author').hasText(AUTHOR);

    await render(hbs`
      <NyprMPullquote as |pull|>
        <pull.quote @quote={{QUOTE}} />

        <pull.attribution @attribution={{AUTHOR}} />
      </NyprMPullquote>
    `);

    assert.dom('blockquote.o-pullquote > p > span').hasText(QUOTE);
    assert.dom('blockquote.o-pullquote > .o-pullquote__author').hasText(AUTHOR);
  });
});
