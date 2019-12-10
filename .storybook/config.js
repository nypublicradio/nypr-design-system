import { configure } from '@storybook/ember';

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);
configure(require.context('../addon', true, /\.stories\.js$/), module);
