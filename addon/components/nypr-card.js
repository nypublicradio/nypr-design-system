import Component from '@ember/component';
import layout from '../templates/components/nypr-card';

export default Component.extend({
  layout,
  classNames: ['nypr-card'],
  tagName: 'article',

  buttonText: 'default button text',
});
