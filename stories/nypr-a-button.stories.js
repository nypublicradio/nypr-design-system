import hbs from 'htmlbars-inline-precompile';
import { text, withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'nypr-a-button',
  decorators: [withA11y, withKnobs],
};


export const Donate = () => {
  return {
    template: hbs`<NyprAButton>
      {{text}}
    </NyprAButton>`,
    context: {
        text: text('text', 'Donate'),
    }
  }
};

export const MoreResults = () => {
  return {
    template: hbs`<NyprAButton class="o-button--c-quaternary o-button--extra">
      {{text}}
    </NyprAButton>`,
    context: {
        text: text('text', 'More Results'),
    }
  }
};
