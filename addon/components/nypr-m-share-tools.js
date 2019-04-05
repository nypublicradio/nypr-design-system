// BEGIN-SNIPPET nypr-m-share-tools.js
import Component from '@ember/component';
import layout from '../templates/components/nypr-m-share-tools';

export default Component.extend({
  layout,
  classNames: ['c-share-tools'],
  classNameBindings: ['vertical:c-share-tools--vertical'],

  /**
    Use vertical orientation

    @argument vertical
    @type {Boolean}
  */
  vertical: false,

  /**
    Label text

    @argument label
    @type {String}
  */
});
// END-SNIPPET

const filter = params =>
  Object.keys(params)
    .filter(key => params[key])
    .map(key => `${key}=${params[key]}`)
    .join('&');

// BEGIN-SNIPPET share-tools-services.js
export const SERVICE_MAP = {
  facebook: {
    profileBase: 'https://www.facebook.com/',
    shareBase: 'https://www.facebook.com/sharer.php',
    getParams: url => `u=${url}`,
  },
  twitter: {
    profileBase: 'https://twitter.com/',
    shareBase: 'https://twitter.com/intent/tweet',
    getParams(url, params = {}) {
      return filter({...params, url});
    }
  },
  instagram: {
    profileBase: 'https://www.instagram.com/',
    shareBase: '',
    getParams() {},
  },
  email: {
    shareBase: 'mailto:',
    getParams(url, params = {}) {
      return filter({...params, url});
    }
  },
};
// END-SNIPPET
