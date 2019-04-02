## `nypr-o-article-header`

### Example Usage

<DocsDemo as |demo|>
  <demo.example @name='article-header-example.hbs'>
    <NyprOArticleHeader as |header|>
      <header.top as |top|>
        <top.breadcrumb @breadcrumbs={{STORY.breadcrumbs}}/>
        <top.headline>
          {{STORY.title}}
        </top.headline>

        <top.meta
          @galleryPhotosCount={{STORY.gallery.length}}
          as |meta|>
          <meta.byline @authors={{STORY.authors}} @sponsor={{STORY.sponsor}} />
          <meta.publishDate @publishDate={{STORY.publishDate}}/>
        </top.meta>
      </header.top>
    </NyprOArticleHeader>
  </demo.example>

  <demo.snippet @name='article-header-example.hbs' @label='Usage'/>
  <demo.snippet @name='nypr-o-article-header.js' @label='nypr-o-article-header.js'/>
  <demo.snippet @name='nypr-o-article-header.hbs' @label='nypr-o-article-header.hbs'/>
</DocsDemo>
