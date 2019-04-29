import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | nypr-o-featured-block-list', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`
      <NyprOFeaturedBlockList as |fbl|>
        <fbl.heading>
          Featured Block List Heading
        </fbl.heading>

        <fbl.featured>
          Featured Block List Content
        </fbl.featured>

        <fbl.col>
          column to the side
        </fbl.col>
      </NyprOFeaturedBlockList>
    `);

    assert.dom('section.c-featured-blocks').exists();
    assert.dom('h2.c-featured-blocks__heading').hasText('Featured Block List Heading');
    assert.dom('.c-featured-blocks__col1').hasText('Featured Block List Content');
    assert.dom('.c-featured-blocks__col2').hasText('column to the side');
  });
});
