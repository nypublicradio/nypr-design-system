import { module } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, fillIn } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import test from 'ember-sinon-qunit/test-support/test';

import * as fetch from 'fetch';

import { DEFAULT_LEGAL, DEFAULT_SUBSCRIBED_MESSAGE } from 'dummy/components/nypr-m-newsletter';

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
          <NyprASvg @icon='confetti'/>
        </newsletter.graphic>

        <newsletter.blurb>
          {{BLURB}}
        </newsletter.blurb>

        <newsletter.legal/>

      </NyprMNewsletter>
    `);

    assert.dom('.c-newsletter-form__graphic svg.party-confetti').exists('can render into graphic slot');
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

  test('it handles successful submissions', async function(assert) {
    const ENDPOINT = 'https://example.com';
    const EMAIL = 'foo@bar.com';
    const OTHER_PARAMS = {id: 'baz'};
    const SUCCESS_RESPONSE = new Response(JSON.stringify({status: 'subscribed'}), {status: 200});

    this.setProperties({
      ENDPOINT,
      OTHER_PARAMS,
    });

    this.mock(fetch)
      .expects('default')
      .withArgs(ENDPOINT, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({...OTHER_PARAMS, email: EMAIL})
      })
      .resolves(SUCCESS_RESPONSE);

    await render(hbs`
      <NyprMNewsletter @endpoint={{ENDPOINT}} @params={{OTHER_PARAMS}} />
    `);

    await fillIn('.c-newsletter-form__input', EMAIL);
    await click('[data-test-newsletter-submit]');

    assert.dom('.c-newsletter-form__message').hasText(DEFAULT_SUBSCRIBED_MESSAGE);
  });

  test('it handles error responses', async function(assert) {
    const EMAIL = 'foo@bar.com';
    const ENDPOINT = 'https://example.com';
    const ERROR_MESSAGE = 'bad news';
    const ERROR_RESPONSE = new Response(JSON.stringify({detail: ERROR_MESSAGE}), {status: 400});

    this.setProperties({
      ENDPOINT,
    });

    this.mock(fetch)
      .expects('default')
      .withArgs(ENDPOINT, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email: EMAIL})
      })
      .resolves(ERROR_RESPONSE);

    await render(hbs`
      <NyprMNewsletter @endpoint={{ENDPOINT}} />
    `);

    await fillIn('.c-newsletter-form__input', EMAIL);
    await click('[data-test-newsletter-submit]');

    assert.dom('.c-newsletter-form__message').hasText(ERROR_MESSAGE);
  });
});
