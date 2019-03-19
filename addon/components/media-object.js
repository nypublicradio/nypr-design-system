import Component from '@ember/component';
import layout from '../templates/components/media-object';

export default Component.extend({
  layout,
  classNames: ['media-object'],
  classNameBindings: ['valign'],
});
