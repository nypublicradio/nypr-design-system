// BEGIN-SNIPPET nypr-m-author-block.js
import Component from '@ember/component';
import layout from '../templates/components/nypr-m-author-block';

/**
  Display author information

  @class nypr-m-author-block
*/
export default Component.extend({
  layout,
  classNames: ['c-author-block'],

  /**
    Author object. Keys required:
    - name
    - title
    - image
    - bio
    - contact: each key is a service where the value is the username

    @argument author
    @type {Object}
  */
});
// END-SNIPPET
