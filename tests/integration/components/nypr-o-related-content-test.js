import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | nypr-o-related-content', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('items', [{
      url: 'http://example.com',
      title: 'foo'
    }, {
      url: 'http://example.com/bar',
      title: 'bar',
    }])
    await render(hbs`<NyprORelatedContent/>`);

    assert.dom('h3.c-related-content__heading').hasText('Related');
    assert.dom('a').doesNotExist();

    await render(hbs`<NyprORelatedContent @items={{items}}/>`);
    assert.dom('a').exists({count: 2});

  });
});
