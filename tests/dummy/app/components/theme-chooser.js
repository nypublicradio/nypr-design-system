import Component from '@ember/component';
import layout from '../templates/components/theme-chooser';

const THEMES = [
  'nypr',
  'wnyc',
  'gothamist',
  'wqxr',
  'new-sounds',
  'greene-space'
];

export default Component.extend({
  layout,

  classNames: ['theme-chooser'],

  themes: THEMES,
});
