import hbs from 'htmlbars-inline-precompile';
import { text, withKnobs } from '@storybook/addon-knobs';
import notes from './nypr-a-button.md';

export default {
  title: 'Components|Atoms/Button',
  decorators: [withKnobs],
  parameters: {
    notes: {'markdown': notes},
    lineage: {'name': 'nypr-a-button'},
  }
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

export const Usage = () => {
  return {
    template: hbs`
    <div class="c-style-guide" id="start">
      <section class="o-sg-section o-sg-section__colors u-spacing--quad">
        <div class="u-spacing--double">
            <header class="o-sg-section__header l-container--content u-spacing">
                <h2 class="o-sg-section__heading">Button - nypr-a-button</h2>
                <p>The nypr-a-button has variations including Donate and More Results. The button should apppear in lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </header>
        </div>
        <div class="u-spacing--double">
            <header class="o-sg-section__header l-container--content u-spacing">
                <p>The button will default to the Donate treatment if no class is added:</p>
                <p><NyprAButton>
                Donate
                  </NyprAButton>
                </p>
                <p>The <strong>More Results</strong> button is used to load more results on <a href="/">Listing Pages</a>.</p> 
                <p>Use the <strong>o-button--c-quaternary</strong> and <strong>o-button--extra</strong> classes for the <strong>More Results</strong> button.</p>
                <p><NyprAButton class="o-button--c-quaternary o-button--extra">
                {{text}}
              </NyprAButton></p>
            </header>
        </div>
      </section>
    </div>
    `,
    context: {
        text: text('text', 'More Results'),
    }
  }
};