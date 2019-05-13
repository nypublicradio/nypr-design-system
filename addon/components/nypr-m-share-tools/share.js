// BEGIN-SNIPPET nypr-m-share-tools-share.js
import Component from '@ember/component';
import layout from '../../templates/components/nypr-m-share-tools/share';

import { SERVICE_MAP } from '../nypr-m-share-tools';

const windowString = ({top, left}) =>
  `location=no,toolbar=no,menubar=no,scrollbars=no,status=no,width=550,height=600,top=${top},left=${left}`

/**
  Share Tools Share Button

  @class nypr-m-share-tools/share
*/
export default Component.extend({
  tagName: '',
  layout,

  /**
    Target service of share dialog

    @argument service
    @type {String}
  */

  /**
    Hash of key value pairs to pass to service via query string

    @argument params
    @type {Object}
  */

  /**
    Optional URL to override the derived share URL

    @argument url
    @type {String}
  */

  /**
    Measure window center to position pop up

    @method getPopupPosition
    @return {Object} positions
  */
  getPopupPosition() {
    const dualScreenLeft = screen.availLeft;
    const dualScreenTop = screen.availTop;

    const windowWidth = screen.availWidth;
    const windowheight =  screen.availHeight;

    const left = ((windowWidth / 2) - (600 / 2)) + dualScreenLeft;
    const top = ((windowheight / 2) - (600 / 2)) + dualScreenTop;

    return {left: left, top: top};
  },

  /**
    Build a URL to the given services share dialog

    @method getURL
    @param {String} service
    @param {Object} params
    @param {String} override
    @return {String} url
  */
  getURL(service, params, override) {
    if (!SERVICE_MAP[service]) {
      return;
    }
    let { shareBase, getParams } = SERVICE_MAP[service];
    let url = override || window.location.toString();

    return `${shareBase}?${getParams(url, params)}`
  },


  /**
    Opens a share dialog

    @method openShare
    @param {String} service Name of the target service
    @param {Object} params Parameters to pass to share dialog
    @param {String} urlOverride Optional override to the derived URL
    @return {void}
  */
  actions: {
    openShare(service, params, urlOverride) {
      if (!service) {
        return;
      }

      let url = this.getURL(service, params, urlOverride);
      let popupPosition = this.getPopupPosition();
      var newWindow = window.open(url, 'share window', windowString(popupPosition));

      // make sure it actually opened and bring it to the front
      if (typeof newWindow !== 'undefined' && newWindow !== null && newWindow.focus) {
        newWindow.focus();
      }
    }
  }

});
// END-SNIPPET
