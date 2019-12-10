import hbs from 'htmlbars-inline-precompile';

export default { title: 'nypr-a-button' };

export const NyprAButton = () => {
  return {
    template: hbs`<NyprAButton>
      {{text}}
    </NyprAButton>`,
    context: {
        text: "Hello World"
    }
  }
};