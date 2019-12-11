import hbs from 'htmlbars-inline-precompile';
import { text, withKnobs } from '@storybook/addon-knobs';

export default { 
  title: 'nypr-o-newletter-tout',
  decorators: [withKnobs]
};

export const NyprONewsletterTout = () => {
  return {
    template: hbs`<NyprONewsletterTout
        @endpoint={{endpoint}}
        @params={{params}}
        @img={{img}}
        as |tout|>

        <tout.heading>
          {{heading}}
        </tout.heading>
  
        <tout.blurb>
          {{blurb}}
        </tout.blurb>
  
        <tout.legal/>
      </NyprONewsletterTout>`,
    context: {
        endpoint: text("api endpoint", "https://api.demo.nypr.digital/opt-in/v1/subscribe/mailchimp"),
        params: {list:"8c376c6dff"},
        heading: text("heading", "Sign Up for We the Commuters"),
        blurb: text("blurb", "Comprehensive coverage of transportation in our region from WNYC, Gothamist and more."),
        img: {
            src: text("img src", "https://www.gothamist.com/static-images/wtc.png"),
            alt: "We the Commuters"
        }
    }
  }
};