## `media-object`

The [famous](http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/) media object.

## Examples
<DocsDemo as |demo|>
  <demo.example @name="media-object-basic.hbs">
    <NyprAMediaObject as |mo|>
      <mo.media>
        <img src="https://via.placeholder.com/150" />
      </mo.media>

      <mo.object>
        The humble media object.
      </mo.object>
    </NyprAMediaObject>
  </demo.example>

  <demo.snippet @name='media-object-basic.hbs' @label="Basic Usage"/>
  <demo.snippet @name='nypr-a-media-object.js' @label="nypr-a-media-object.js"/>
  <demo.snippet @name='nypr-a-media-object.hbs' @label="nypr-a-media-object.hbs"/>
</DocsDemo>
