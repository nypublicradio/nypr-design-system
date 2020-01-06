/* eslint-disable import/extensions */
import hbs from 'htmlbars-inline-precompile';
import { action } from '@storybook/addon-actions';
import { color, text, withKnobs, boolean } from '@storybook/addon-knobs';


export default {
  title: 'Components|Organisms/Sponsored Content',
  decorators: [withKnobs],
  parameters: { lineage: {'name': 'nypr-o-sponsored-tout'} },
};

export const sponsoredContent = () => ({
  template: hbs`
  <div class="c-style-guide" id="start" style="background: {{backgroundColor}}">
    <div class="l-container l-container--14col">
      <NyprOSponsoredTout @heading="Sponsored">
      <NyprMBlock @orientation='h' as |block|>
        <block.media
          @srcS={{image}}
        />

        <block.object as |o|>
          <o.eyebrow @text='Sponsored' style={{if hidden "display: none"}} />

          <o.title @h3>
            {{title}}
          </o.title>

          <o.body as |body|>
            <body.text>
              {{tease}}
            </body.text>

            <body.meta
              @timestamp='30 minutes ago'
              @commentCount=0
            />
          </o.body>
        </block.object>
      </NyprMBlock>
    </NyprOSponsoredTout>
    </div>
  </div>
  `,
  context: {
    onClick: action('clicked'),
    backgroundColor: color('Color Picker Ex.', '#FFFFFF'),
    title: text("Title", "Eat All The Cheese 🧀"),
    tease: text("Tease", "Cheese is a short walk from the office. This is a hyper targeted ad."),
    image: text("Image", "https://si.wsj.net/public/resources/images/BN-RZ602_NYCHEE_GR_20170207113552.jpg"),
    hidden: boolean('Hide Kicker', false),
  },
});

