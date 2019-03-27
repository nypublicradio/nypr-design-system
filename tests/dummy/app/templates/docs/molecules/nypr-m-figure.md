## `nypr-m-figure`

Render a `<figure/>` element with with `<figcaption/>` and `<picture/>` elements.

### Examples

#### Figure with an Image
<DocsDemo as |demo|>
  <demo.example @name='figure-example.hbs'>
    <NyprMFigure
      @caption='This is a figcaption!'
      @credit='Getty Images'
      @break-xl=1200
      @src-xl='https://picsum.photos/1200/800'
      @break-l=1000
      @src-l='https://picsum.photos/1000/600'
      @break-m=800
      @src-m='https://picsum.photos/800/500'
      @break-s=600
      @src-s='https://picsum.photos/600/400'
      @alt='Pass in an alt tag'
    />
  </demo.example>

  <demo.snippet @name='figure-example.hbs' @label='Usage'/>
  <demo.snippet @name='nypr-m-figure.js' @label='nypr-m-figure.js'/>
  <demo.snippet @name='nypr-m-figure.hbs' @label='nypr-m-figure.hbs'/>
</DocsDemo>

#### Figure with an Embed
<DocsDemo as |demo|>
  <demo.example @name='figure-embed-example.hbs'>
    <NyprMFigure @caption="embed caption" @credit="embed credit">
      <iframe width="100%" height="664" src="https://www.youtube.com/embed/pL-drozge8Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </NyprMFigure>
  </demo.example>

  <demo.snippet @name='figure-embed-example.hbs'/>
</DocsDemo>
