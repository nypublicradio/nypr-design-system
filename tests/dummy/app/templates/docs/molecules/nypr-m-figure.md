## `nypr-m-figure`

Render a `<figure/>` element with with `<figcaption/>` and `<picture/>` elements.

### Examples
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
