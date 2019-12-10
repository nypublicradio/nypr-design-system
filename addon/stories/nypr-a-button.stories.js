import hbs from 'htmlbars-inline-precompile';
import { text, withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'nypr-a-button',
  decorators: [withA11y, withKnobs],
};

export const NyprAButton = () => {
  return {
    template: hbs`<NyprAButton>
      {{text}}
    </NyprAButton>`,
    context: {
        text: text('text', 'Hello World'),
    }
  }
};
