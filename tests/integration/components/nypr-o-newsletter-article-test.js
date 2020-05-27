import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | nypr-o-newsletter-tout', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`
      <NyprONewsletterArticle
        as |tout|>
        <tout.heading>
          Newsletter Tout
        </tout.heading>

        <tout.legal/>
      </NyprONewsletterArticle>
    `);

    assert.dom('[data-test-newsletter-article-heading]').hasText('Newsletter Tout');
    assert.dom('[data-test-newsletter-tout-legal] a').exists();
  });
});
