## `nypr-a-picture`

Render a `<picture/>` element with `srcset` values set for provided breakpoints.

All arguments are provided below.

<DocsDemo as |demo|>
  <demo.example @name='picture-example.hbs'>
    <NyprAPicture
      @breakXl=1200
      @srcXl='https://picsum.photos/1200/800'
      @breakL=1000
      @srcL='https://picsum.photos/1000/600'
      @breakM=800
      @srcM='https://picsum.photos/800/500'
      @breakS=600
      @srcS='https://picsum.photos/600/400'
      @alt='Pass in an alt tag'
    />
  </demo.example>

  <demo.snippet @name='picture-example.hbs' @label='Usage'/>
  <demo.snippet @name='nypr-a-picture.js' @label='nypr-a-picture.js'/>
  <demo.snippet @name='nypr-a-picture.hbs' @label='nypr-a-picture.hbs'/>
</DocsDemo>
