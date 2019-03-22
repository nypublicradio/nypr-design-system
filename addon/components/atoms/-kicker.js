import Component from '@ember/component';
import layout from '../../templates/components/atoms/-kicker';

/**
  Render a "kicker" or small piece of decorated text.
  @class atoms/-kicker
  @yield {Hash} block
*/
export default Component.extend({
  layout,
  classNames: ['o-kicker'],

  /**
    Filler text. Accepted as a positonal param as well.
    @argument text
    @type {String?}
  */
  text: null,

}).reopenClass({
  positionalParams: ['text']
});
