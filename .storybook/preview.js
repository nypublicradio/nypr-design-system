import { addParameters } from '@storybook/ember';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { setJSONDoc } from '@storybook/addon-docs/ember';
import docJson from '../dist/storybook-docgen/index.json';

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});
setJSONDoc(docJson);
