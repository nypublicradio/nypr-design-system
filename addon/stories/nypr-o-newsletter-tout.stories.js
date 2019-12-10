import hbs from 'htmlbars-inline-precompile';

export default { title: 'nypr-o-newletter-tout' };

export const NyprONewsletterTout = () => {
  return {
    template: hbs`<NyprONewsletterTout
        @endpoint={{endpoint}}
        @params={{params}}
        @img={{hash
            src='http://www.gothamist.com/static-images/wtc.png'
            alt='We the Commuters"
        }}
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
        endpoint: "https://api.demo.nypr.digital/opt-in/v1/subscribe/mailchimp",
        params: {list:"8c376c6dff"},
        heading: "Sign Up for We the Commuters",
        blurb: "Comprehensive coverage of transportation in our region from WNYC, Gothamist and more."
    }
  }
};