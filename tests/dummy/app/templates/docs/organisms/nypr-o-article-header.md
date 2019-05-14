## `nypr-o-article-header`

### Example Article Usage

<DocsDemo as |demo|>
  <demo.example>

    <p>
      <button class="btn" {{action 'toggleLede'}}>
        View {{if STORY.gallery 'image lede' 'gallery lede'}}
      </button>
    </p>

    <div style="margin: 0 -160px;">
    <!-- BEGIN-SNIPPET article-header-example.hbs -->
    <NyprOArticleHeader as |header|>
      <header.top as |top|>
        <top.breadcrumb @breadcrumbs={{STORY.breadcrumbs}}/>
        <top.headline>
          {{STORY.title}}
        </top.headline>

        <top.meta @galleryPhotosCount={{STORY.gallery.length}} as |meta|>
          <meta.byline @authors={{STORY.authors}} @sponsor={{STORY.sponsor}}/>
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
    <!-- END-SNIPPET -->
    </div>
  </demo.example>

  <demo.snippet @name='article-header-example.hbs' @label='Usage'/>
  <demo.snippet @name='nypr-o-article-header.hbs' @label='nypr-o-article-header.hbs'/>
  <demo.snippet @name='nypr-o-article-header-top.hbs' @label='top.hbs'/>
  <demo.snippet @name='nypr-o-article-header-meta.hbs' @label='meta.hbs'/>
  <demo.snippet @name='nypr-o-article-header-publish-date.hbs' @label='publish-date.hbs'/>
  <demo.snippet @name='nypr-o-article-header-lead.hbs' @label='lead.hbs'/>
  <demo.snippet @name='nypr-o-article-header.js' @label='nypr-o-article-header.js'/>
</DocsDemo>
