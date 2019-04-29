import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | nypr-m-nav-read-more', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`
      <NyprMNavReadMore @items={{array
        (hash route=(array 'tags' 'news') label='News')
        (hash route=(array 'tags' 'arts') label='Arts')
      }}/>
    `);

    assert.dom('.c-read-more-nav').exists();
    assert.dom('.c-read-more-nav__item').exists({count: 2});
    assert.dom('.c-read-more-nav ul').includesText('News Arts');
  });
});
