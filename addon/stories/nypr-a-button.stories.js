import hbs from 'htmlbars-inline-precompile';
import { text, withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'nypr-a-button',
  decorators: [withKnobs],
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