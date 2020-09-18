import Component from '@ember/component';
import layout from './template';

export default Component.extend({
  layout,
  classNames: ['sound-animation'],
  classNameBindings: ['isPlaying:is-playing'],
  isPlaying: false,
});
