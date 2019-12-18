import { addDecorator, addParameters, configure } from '@storybook/ember';
import { withCssResources } from '@storybook/addon-cssresources';
import { withA11y } from '@storybook/addon-a11y';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import componentManifest from '../dist/component-manifest';

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  cssresources: [{  
    id: `Gothamist Blue`,
    code: `<link rel="stylesheet" type="text/css" href="/assets/themes/nypr-design-system-blue.css" />`,
    picked: false,
  }],
  lineage: {
    manifest: componentManifest
  },
});

addDecorator(withA11y);
addDecorator(withCssResources);

configure(require.context('../stories/Docs', true, /\.stories\.js$/), module);// automatically import all files ending in *.stories.js
configure(require.context('../stories/Components', true, /\.stories\.js$/), module);
