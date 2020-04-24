import { addDecorator, addParameters } from '@storybook/ember';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { setJSONDoc } from '@storybook/addon-docs/ember';
import docJson from '../dist/storybook-docgen/index.json';
import { withA11y } from '@storybook/addon-a11y';
import './storybook-styles.css';

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});
addDecorator(withA11y);
setJSONDoc(docJson);
