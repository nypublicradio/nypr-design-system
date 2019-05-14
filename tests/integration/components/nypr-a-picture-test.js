import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | nypr-a-picture', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    const IMG = 'https://picsum.photos/300';
    this.set('img', IMG);
    await render(hbs`<NyprAPicture @srcS={{img}}/>`);

    assert.dom('picture').exists();
    assert.dom('picture img').hasAttribute('src', IMG);
  });
});
