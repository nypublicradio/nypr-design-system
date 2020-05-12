import { module } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, fillIn } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import test from 'ember-sinon-qunit/test-support/test';

import * as fetch from 'fetch';

import { DEFAULT_SUBSCRIBED_MESSAGE } from 'nypr-design-system/components/nypr-m-newsletter-form';


module('Integration | Component | nypr-m-newsletter-form', function(hooks) {
  setupRenderingTest(hooks);

  test('it handles successful submissions', async function(assert) {
    const ENDPOINT = 'https://example.com';
    const EMAIL = 'foo@bar.com';
    const LOCATION = 'Footer';
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
        body: JSON.stringify({...OTHER_PARAMS, email: EMAIL, location: LOCATION})
      })
      .resolves(SUCCESS_RESPONSE);

    await render(hbs`
      <NyprMNewsletterForm @endpoint={{ENDPOINT}} @params={{OTHER_PARAMS}} as |form|>
        <form.input/>
        <form.submit/>
      </NyprMNewsletterForm>
    `);

    await fillIn('.c-newsletter-form__input', EMAIL);
    await click('[data-test-newsletter-submit]');

    assert.dom('.c-newsletter-form__message').hasText(DEFAULT_SUBSCRIBED_MESSAGE);
  });

  test('it handles error responses', async function(assert) {
    const EMAIL = 'foo@bar.com';
    const LOCATION = 'Footer';
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
        body: JSON.stringify({email: EMAIL, location: LOCATION})
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
