/* eslint-disable import/extensions */
import hbs from 'htmlbars-inline-precompile';
import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';


export default {
  title: 'Sponsored Content',
  decorators: [withKnobs]
};

export const sponsoredContent = () => ({
  template: hbs`
  <div class="c-style-guide" id="start">
    <div class="l-container l-container--14col">
      <NyprOSponsoredTout @heading="Sponsored">
      <NyprMBlock @orientation='h' as |block|>
        <block.media
          @srcS={{image}}
        />

        <block.object as |o|>
          <o.eyebrow @text='Sponsored'/>

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
    title: text("title", "Eat All The Cheese 🧀"),
    tease: text("tease", "Cheese is a short walk from the office. This is a hyper targeted ad."),
    image: text("image", "https://si.wsj.net/public/resources/images/BN-RZ602_NYCHEE_GR_20170207113552.jpg")
  },
});

