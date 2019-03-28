## `nypr-m-tags`

### Examples

#### Inline
<DocsDemo as |demo|>
  <demo.example @name='tags-example.hbs'>
    <NyprMTags @tags={{array 'foo' 'bar'}} />
  </demo.example>

  <demo.snippet @name='tags-example.hbs' @label='Usage'/>
  <demo.snippet @name='nypr-m-tags.js' @label='nyp-m-tags.js'/>
  <demo.snippet @name='nypr-m-tags.hbs' @label='nypr-m-tags.hbs'/>
</DocsDemo>


#### Block
<DocsDemo as |demo|>
  <demo.example @name='tags-block-example.hbs'>
    <NyprMTags @tags={{array 'biz' 'baz'}} as |Tag tag|>
      <Tag @url='/tags/{{tag}}' />
    </NyprMTags>
  </demo.example>

  <demo.snippet @name='tags-block-example.hbs' @label='Block Usage'/>
</DocsDemo>
