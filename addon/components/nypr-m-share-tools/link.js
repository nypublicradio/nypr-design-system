// BEGIN-SNIPPET nypr-m-share-tools-link.js
import Component from '@ember/component';
import layout from '../../templates/components/nypr-m-share-tools/link';
import { computed } from '@ember/object';

import { SERVICE_MAP } from '../nypr-m-share-tools';

export default Component.extend({
  layout,
  tagName: '',

  /**
    Social network service name to link to.

    @argument service
    @type {String}
  */

  /**
    Username on social network service

    @argument username
    @type {String}
  */

  /**
    URL of social profile. Can be passed in as an argument, or else will be
    dervied based on the given username and service

    @argument href
    @type {String}
  */
  href: computed('service', 'username', function() {
    let { username, service } = this;
    if (!SERVICE_MAP[service]) {
      return;
    }

    return `${SERVICE_MAP[service].profileBase}${username}`;
  }),

  actions: {
    handleClick() {
      if (this.clickAction) {
        this.clickAction();
      }
    },
  }
});
// END-SNIPPET
