## `nypr-o-article-footer`

### Example Usage

<DocsDemo as |demo|>
  <demo.example @name='article-footer-example.hbs'>
    <NyprOArticleFooter as |footer|>
      <footer.tags @tags={{array 'bronx' 'police'}} as |Tag tag|>
        <Tag @url='http://example.com/tags/{{tag}}'/>
      </footer.tags>

      <footer.contact>
        <p><strong>Do you know the scoop?</strong> &nbsp; <a href="">Comment</a> below or <a href="">Send us a Tip</a></p>
      </footer.contact>

      <footer.donate
        @linkText='Donate'
        @linkUrl='https://pledge3.wnyc.org/donate/gothamist/onestep'>
        <p>
          Hey, do you know that it  takes money to write these stories? Help us tell more with your help today.
        </p>
      </footer.donate>

      <footer.comments>
        comments go here
      </footer.comments>
    </NyprOArticleFooter>
  </demo.example>

  <demo.snippet @name='article-footer-example.hbs' @label='Usage'/>
  <demo.snippet @name='nypr-o-article-footer.js' @label='nypr-o-article-footer.js'/>
  <demo.snippet @name='nypr-o-article-footer.hbs' @label='nypr-o-article-footer.hbs'/>
</DocsDemo>
