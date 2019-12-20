/* eslint-disable import/extensions */
import hbs from 'htmlbars-inline-precompile';
import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';
import moment from 'moment';


export default {
  title: 'Pages|Article/Article Page - Lead Image',
  decorators: [withKnobs]
};

export const ArticlePageLeadImage = () => ({
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

<NyprOArticleBody>
        <p>
        </p>
        <p>
            Three men dressed as the Grinch, Spiderman, and Captain Marvel were busted in Rockefeller Center on Thursday, sending other costumed characters dashing through the streets of Midtown amid fears of a possible cartoon crackdown.
        </p>
        <p>
            Lower East Side resident Kat Sullivan tells Gothamist she witnessed "a group of Minions hauling ass" through the <a href="/">newly pedestrianized zone</a> at around 1:30 p.m. on Thursday. "I asked for a picture and they were like, 'Sorry lady, got to go,'" said Sullivan, a 40-year-old nurse. "That struck me as weird."
        </p>
        <p>
        </p>
        <NyprOArticleFooter as |footer|>
        <footer.tags @tags={{array 'foo' 'bar'}} as |Tag tag|>
          <Tag @url='http://example.com/tags/{{tag}}'/>
        </footer.tags>
      
        <footer.contact>
          Contact us because you've got something to say
        </footer.contact>
      
        <footer.donate @linkText='Click' @linkUrl='https://example.com/pledge' @message='Donate because you like us'/>
      
        <footer.comments>
          comments go here
        </footer.comments>
      </NyprOArticleFooter>
</NyprOArticleBody>

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

