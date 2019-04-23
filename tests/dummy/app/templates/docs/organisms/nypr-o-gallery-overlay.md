## `nypr-o-gallery-overlay`

<pre style="position: sticky; top: 0; z-index: 500000; background: white;">
  viewing slide
    src: {{viewed.src}}

    caption: {{viewed.caption}}

    credit: {{viewed.credit}}
</pre>

### Examples

Using a gallery defined as:
<DocsSnippet @name='sample-gallery.js'/>

<DocsDemo as |demo|>

  <demo.example @name='gallery-usage.hbs'>
    <NyprOGalleryOverlay
      @title="Gallery Title"
      @takeover={{false}}
      @slides={{SLIDES}}
      @viewedSlide={{action (mut viewed)}}>
    </NyprOGalleryOverlay>
  </demo.example>

  <demo.snippet @name='gallery-usage.hbs' @label='Usage'/>

</DocsDemo>
