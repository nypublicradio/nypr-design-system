import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  colorPrimary: 'hotpink',
  colorSecondary: 'rgb(30, 167, 253);',

  // UI
  appBg: 'white',
  appContentBg: 'white',
  appBorderColor: 'gainsboro',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'silver',
  barSelectedColor: 'rgb(30, 167, 253);',
  barBg: 'white',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'Radial Design System',
  brandUrl: 'https://nypr-design-system.nypr.digital/',
  brandImage: './images/radial_logo.svg',
});
