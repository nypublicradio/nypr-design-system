// BEGIN-SNIPPET nypr-m-to-top.js
import Component from '@ember/component';
import layout from '../templates/components/nypr-m-to-top';

export default Component.extend({
  layout,
  tagName: '',

  /**
    Optional dom selector scroll target

    @argument selector
    @type {String}
  */

  /**
    Optional offset from selector target

    @argument offset
    @type {Number}
  */
  offset: 0,

  /**
    Scrolls window to top of page or provided selector

    @method toTop
    @return {Void}
  */
  toTop() {
    let offset = this.offset;
    let target = document.querySelector(this.selector);
    let y = target ? target.offsetTop - (target.offsetHeight + offset) : 0;
    window.scrollTo({top: y, behavior: 'smooth'});

    this.focusOnTop();
  },

  /**
    Focus screenreaders at top of page too

    @method focusOnTop
    @return {Void}
  */
  focusOnTop(){
    let header = document.getElementsByTagName("header")[0];
    if (header){
      header.setAttribute('tabIndex', -1);
      header.focus();
    }

  }
});
// END-SNIPPET
