import { addDecorator, addParameters, configure } from '@storybook/ember';
import { withCssResources } from '@storybook/addon-cssresources';
import { withA11y } from '@storybook/addon-a11y';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);

addParameters({
  options: {
    storySort: (a, b) => {
      console.log(a,b);
    }
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});

addDecorator(withA11y);
addDecorator(withCssResources);
