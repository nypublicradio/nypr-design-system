import hbs from 'htmlbars-inline-precompile';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Atoms/Button',
  component: 'nypr-a-button'
};

export const Text = () => ({
  template: hbs`
  <NyprAButton onclick={{action onClick}} class='button--primary'>Primary Button</NyprAButton>
  <NyprAButton onclick={{action onClick}} class='button--donate'>Donate Button</NyprAButton>
  `,
  context: {
    onClick: action('clicked'),
  },
});

export const Emoji = () => ({
  template: hbs`
    <button {{action onClick}}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </button>
  `,
  context: {
    onClick: action('clicked'),
  },
});
