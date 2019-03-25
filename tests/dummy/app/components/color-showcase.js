import Component from '@ember/component';
import layout from '../templates/components/color-showcase';

export default Component.extend({
  layout,

  colors: null,

  classNames: ['color-showcase', 'flex', 'justify-between', 'flex-wrap'],
});
