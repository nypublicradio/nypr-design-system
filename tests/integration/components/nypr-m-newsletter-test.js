import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

import { DEFAULT_LEGAL } from 'nypr-design-system/components/nypr-m-newsletter-form';

module('Integration | Component | nypr-m-newsletter', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    const BLURB = "Sign up for this great newsletter.";
    const OTHER_LEGAL = "Waive all your rights.";

    this.setProperties({
      BLURB,
      OTHER_LEGAL,
    });

    await render(hbs`
      <NyprMNewsletter as |newsletter|>

        <newsletter.graphic>
          <NyprASvg @icon='party-confetti'/>
        </newsletter.graphic>

        <newsletter.blurb>
          {{BLURB}}
        </newsletter.blurb>

        <newsletter.legal/>

      </NyprMNewsletter>
    `);

    assert.dom('.c-newsletter-form__graphic svg.party-confetti-icon').exists('can render into graphic slot');
    assert.dom('[data-test-newsletter-blurb]').hasText(BLURB);
    assert.dom('.c-newsletter-form__terms').hasText(DEFAULT_LEGAL, 'must use the yielded `.legal` component in order to display terms');

    await render(hbs`
      <NyprMNewsletter as |newsletter|>
        <newsletter.legal>
          {{OTHER_LEGAL}}
        </newsletter.legal>
      </NyprMNewsletter>
    `);

    assert.dom('.c-newsletter-form__terms').hasText(OTHER_LEGAL, 'can pass in other legal terms');
  });

});
