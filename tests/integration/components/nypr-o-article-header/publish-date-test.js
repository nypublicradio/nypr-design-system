import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | nypr-o-article-header/publish-date', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Template block usage:
    await render(hbs`
      {{#nypr-o-article-header/publish-date}}
        template block text
      {{/nypr-o-article-header/publish-date}}
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
