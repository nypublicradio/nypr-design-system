import hbs from 'htmlbars-inline-precompile';

export default {
  title: 'Components/Atoms/Button',
  component: 'nypr-a-button',
};

export const main = () => ({
  template: hbs`
  <NyprAButton>Primary Button</NyprAButton>
  <NyprAButton @blank={{true}}>Text Button</NyprAButton>
  <NyprAButton class='o-button--c-quaternary'>Secondary Button</NyprAButton>
  <NyprAButton class='o-button--sm'>Small Button</NyprAButton>
  <NyprAButton class='o-button--extra'>Extra Button</NyprAButton>
  `
});

export const primary = () => ({
  template: hbs`<NyprAButton>Primary Button</NyprAButton>`,
});

export const secondary = () => ({
  template: hbs`<NyprAButton class='o-button--c-quaternary'>Secondary Button</NyprAButton>`,
});

export const text = () => ({
  template: hbs`<NyprAButton @blank={{true}}>Text Button</NyprAButton>`,
})

export const small = () => ({
  template: hbs`<NyprAButton class='o-button--sm'>Small Button</NyprAButton>`,
});

export const extra = () => ({
  template: hbs`<NyprAButton class='o-button--extra'>Extra Button</NyprAButton>`,
});
