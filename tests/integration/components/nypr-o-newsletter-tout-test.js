import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | nypr-o-newsletter-tout', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`
      <NyprONewsletterTout
        @img={{hash
          src='/test-image1.jpeg'
          alt='newsletter image'
        }}
        as |tout|>
        <tout.heading>
          Newsletter Tout
        </tout.heading>

        <tout.blurb>
          Tout Blurb
        </tout.blurb>

        <tout.legal/>
      </NyprONewsletterTout>
    `);

    assert.dom('.c-newsletter-tout__media img').hasAttribute('src', '/test-image1.jpeg');
    assert.dom('[data-test-newsletter-tout-heading]').hasText('Newsletter Tout');
    assert.dom('[data-test-newsletter-tout-blurb]').hasText('Tout Blurb');
    assert.dom('[data-test-newsletter-tout-legal] a').exists();
  });
});
