// BEGIN-SNIPPET nypr-m-newsletter.js
import Component from '@ember/component';
import layout from '../templates/components/nypr-m-newsletter';
import { assert } from '@ember/debug';
import { task } from 'ember-concurrency';

import fetch from 'fetch';

const DEFAULT_LEGAL = "By submitting your information, you're agreeing to receive communications from New York Public Radio in accordance with our Terms."

const DEFAULT_SUBSCRIBED_MESSAGE = "Thanks for signing up!";

/**
  Newsletter sign up widget

  @class nypr-m-newsletter
  @yield {Hash} graphic `blank-template`
  @yield {Hash} blurb `blank-template`
  @yield {Hash} legal `blank-template`
*/
export default Component.extend({
  layout,
  tagName: 'form',

  classNames: ['c-newsletter-form'],
  classNameBindings: ['onSubmit.last.isSuccessful:is-success:is-error'],

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
});
// END-SNIPPET

function checkResponse(res) {
  if (res.status >= 400) {
    return res.json().then(j => Promise.reject(j));
  } else {
    return res.json();
  }
}
