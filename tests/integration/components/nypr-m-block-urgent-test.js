import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | nypr-m-block-urgent', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`
      <NyprMBlockUrgent/>
    `);

    assert.dom('.c-block.c-block--urgent').exists();
  });

  test('it renders properties', async function(assert) {
    const CATEGORY = "Test";
    const TITLE = "Test Title";
    const URL = "http://example.com";
    const TIMESTAMP = "Just Now";
    const DESCRIPTION = "Test Description";

    this.setProperties({
      category: CATEGORY,
      title: TITLE,
      url: URL,
      timestamp: TIMESTAMP,
      description: DESCRIPTION,
    });

    await render(hbs`
      <NyprMBlockUrgent
        @category={{category}}
        @title={{title}}
        @url={{url}}
        @timestamp={{timestamp}}
        @description={{description}}
      />
    `);

    assert.dom('.c-block__eyebrow').includesText(CATEGORY);
    assert.dom('.c-block__title>a').includesText(TITLE);
    assert.dom('.c-block__title>a').hasAttribute('href', URL);
    assert.dom('.c-block-meta').includesText(TIMESTAMP);
    assert.dom('.c-block__dek').includesText(DESCRIPTION);
  });
});
