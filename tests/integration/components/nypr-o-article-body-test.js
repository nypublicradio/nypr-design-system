import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | nypr-o-article-body', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<NyprOArticleBody/>`);

    assert.dom('.c-article__body').exists();

    // Template block usage:
    await render(hbs`
      <NyprOArticleBody>
        template block text
      </NyprOArticleBody>
    `);

    assert.dom('.c-article__body').hasText('template block text');
  });
});
