/* eslint-disable import/extensions */
import hbs from 'htmlbars-inline-precompile';
import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';
import moment from 'moment';


export default {
  title: 'Pages|Article/Lead Image Header',
  decorators: [withKnobs]
};

export const LeadImageHeader = () => ({
  template: hbs`
  <NyprOArticleHeader as |header|>
  <header.top as |top|>
    <top.breadcrumb @breadcrumbs={{STORY.breadcrumbs}}/>
    <top.headline>
      {{STORY.title}}
    </top.headline>

    <top.meta @galleryPhotosCount={{STORY.gallery.length}} as |meta|>
      <meta.byline @authors={{authors}} @sponsor={{STORY.sponsor}}/>
      <meta.publishDate @publishDate={{STORY.publishDate}}/>
    </top.meta>
  </header.top>

  <header.lead as |lead|>
    <lead.left>
      <NyprMShareTools @vertical={{true}} as |share|>
        <share.link @service='twitter'/>
        <share.link @service='facebook'/>
        <share.link @service='instagram'/>
        <share.link @service='email'/>
      </NyprMShareTools>
    </lead.left>

    <lead.center>
      {{#if STORY.gallery}}
        <NyprMGalleryLead @slides={{STORY.gallery}} />
      {{else}}
        <NyprMFigure
          @srcS={{STORY.leadImage.src}}
          @caption={{STORY.leadImage.caption}}
          @credit={{STORY.leadImage.credit}}
        />
      {{/if}}
    </lead.center>

    <lead.right>
      <NyprORelatedContent @items={{STORY.relatedItems}}/>
    </lead.right>

  </header.lead>
</NyprOArticleHeader>
    
  `,
  context: {
        // breadcrumbs: [{ label: "Arts & Entertainment" }],
    // onClick: action('clicked'),
        authors: [{
            name: "Jake Offenhartz",
            org: undefined,
            // route: [ "author-detail" ],
            url: "/staff/jake-offenhartz"
        },
        {
            name: "Jen Chung",
            org: undefined,
            // route: [ "author-detail" ],
            url: "/staff/jen"
        },
        ],
        STORY: {
            title: "Cops Bust Costumed Characters In Rock Center: The Minions Were Hauling Ass",
            breadcrumbs: [{ label: "Arts & Entertainment" }],
            publishDate: moment('2019-12-13', 'YYYY-MM-DD'),
            leadImage: {
                src: "https://cms.prod.nypr.digital/images/298274/fill-661x496/",
                caption: "Has this Watchmen sequel gone too far?",
                credit: "Twitter/Acid Kat Sullivan"
            }
        },
    // tease: text("tease", "Cheese is a short walk from the office. This is a hyper targeted ad."),
    // image: text("image", "https://si.wsj.net/public/resources/images/BN-RZ602_NYCHEE_GR_20170207113552.jpg")
  },
});

