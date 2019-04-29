import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | nypr-o-sponsored-tout', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`
      <NyprOSponsoredTout>
        sponsored text
      </NyprOSponsoredTout>
    `);

    assert.dom('.c-sponsored-tout').hasText('sponsored text');

    await render(hbs`
      <NyprOSponsoredTout @heading='Sponsored'/>
    `);

    assert.dom('h2.c-sponsored-tout__heading').hasText('Sponsored');
  });

});
