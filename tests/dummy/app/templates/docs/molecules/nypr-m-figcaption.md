## `nypr-m-figcaption`

Render a `<figcaption/>` element with with a `caption` and `credit`.

### Examples


#### Inline Usage
<DocsDemo as |demo|>
  <demo.example @name='figcaption-example.hbs'>
    <NyprMFigcaption
      @caption='This is a figcaption!'
      @credit='Getty Images'
    />
  </demo.example>

  <demo.snippet @name='figcaption-example.hbs' @label='Usage'/>
  <demo.snippet @name='nypr-m-figcaption.js' @label='nypr-m-figcaption.js'/>
  <demo.snippet @name='nypr-m-figcaption.hbs' @label='nypr-m-figcaption.hbs'/>
</DocsDemo>

<h4 id="inline-usage" class="docs-md__h4">
  <a href="#inline-usage" class="heading-anchor">
    Block Usage
  </a>
</h4>

<DocsDemo as |demo|>
  <demo.example @name='figcaption-example-block.hbs'>
    <NyprMFigcaption as |caption|>
      <caption.credit @credit='Getty Images Block Format'/>

      <h2>Here's some arbitrary content</h2>

      <caption.caption @caption="Here's a figcaption in block form" />
    </NyprMFigcaption>
  </demo.example>

  <demo.snippet @name='figcaption-example-block.hbs' @label='Usage'/>
  <demo.snippet @name='nypr-m-figcaption-caption.hbs' @label='nypr-m-figcaption/caption.hbs'/>
  <demo.snippet @name='nypr-m-figcaption-credit.hbs' @label='nypr-m-figcaption/credit.hbs'/>
</DocsDemo>
