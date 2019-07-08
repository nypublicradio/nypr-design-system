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
    @param {String} override
    @return {String} url
  */
  getURL(override) {
    if (!SERVICE_MAP[this.service]) {
      return;
    }
    let { shareBase, getParams } = SERVICE_MAP[this.service];
    let url = override || window.location.toString();

    if (this.utm) {
      let utmParams = Object.keys(this.utm).map(key => `utm_${key}=${this.utm[key]}`).join('&');

      if (url.indexOf('?') > -1) {
        url += `&${utmParams}`;
      } else {
        url += `?${utmParams}`;
      }
      url = encodeURIComponent(url);
    }

    return `${shareBase}?${getParams(url, this.params)}`
  },


  /**
    Opens a share dialog

    @method openShare
    @return {void}
  */
  actions: {
    openShare() {
      if (!this.service) {
        return;
      }

      let urlOverride = this.url;
      let url = this.getURL(urlOverride);
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
