// BEGIN-SNIPPET nypr-m-newsletter-form.js
import Component from '@ember/component';
import layout from '../templates/components/nypr-m-newsletter-form';

import { computed } from '@ember/object';
import { assert } from '@ember/debug';
import { task } from 'ember-concurrency';

import fetch from 'fetch';

export const DEFAULT_LEGAL = "By submitting your information, you're agreeing to receive communications from New York Public Radio in accordance with our <a href='https://www.wnyc.org/terms/' target='_blank' rel='noopener' class='u-has-accent u-has-accent--white'>Terms</a>."

export const DEFAULT_SUBSCRIBED_MESSAGE = "Thanks for signing up!";

export const DEFAULT_LABEL = 'Newsletter signup';

/**
  Newsletter sign up form

  @class nypr-m-newsletter-form
  @yield {Hash} hash
  @yield {Block} hash.label `blank-template`
  @yield {Component} hash.input `input`
  @yield {Block} hash.legal `blank-template`
*/
export default Component.extend({
  layout,
  tagName: 'form',
  classNames: ['c-newsletter-form__concrete'],
  classNameBindings: ['submitState'],

  defaultLegal: DEFAULT_LEGAL,

  submit(e) {
    e.preventDefault();
    this.onSubmit.perform(this.email);
  },

  legalChecked: true,

  /**
    Email opt in endpoint

    @argument endpoint
    @type {String}
  */

  /**
    Other endpoint params to include in outgoing payload.

    @argument params
    @type {Object}
  */

  /**
    Message to display on successful sign ups.
    Defaults to "Thanks for signing up!"

    @argument subscribedMessage
    @type {String}
  */
  subscribedMessage: DEFAULT_SUBSCRIBED_MESSAGE,

  /**
    Email submission handler. Makes a POST call to the provided `endpoint` argument,
    sending `body` and any additional `params` passed in.

    @method onSubmit
    @param {String} email
    @return {String} task value for success or error state
  */
  onSubmit: task(function * (email) {
    assert(this.endpiont, 'Please pass in the opt in endpoint');

    let params = this.params || {};

    try {
      let response = yield fetch(this.endpoint, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({...params, email})
      })
      .then(checkResponse);

      return this.getMessage(response);

    } catch({ detail }) {
      return detail;
    }
  }),

  /**
    Extracts corresponding message based on success status key

    @method getMessage
    @param {Object} response Payload. Expected to have a `status` key
    @return {String}
  */
  getMessage({ status }) {
    switch(status) {
      case "subscribed":
        return this.subscribedMessage;
      default:
        return `No message set for ${status}`;
    }
  },

  submitState: computed('onSubmit.last.isSuccessful', function() {
    if (!this.onSubmit.last) {
      return;
    }
    let { isSuccessful } = this.onSubmit.last;
    return isSuccessful ? 'is-success' : 'is-error';
  }),
});

function checkResponse(res) {
  if (res.status >= 400) {
    return res.json().then(j => Promise.reject(j));
  } else {
    return res.json();
  }
}
