import Component from '@ember/component';
import layout from '../../templates/components/atoms/media-object';

export default Component.extend({
  layout,
  classNames: ['media-object'],
  classNameBindings: ['valign'],
});
