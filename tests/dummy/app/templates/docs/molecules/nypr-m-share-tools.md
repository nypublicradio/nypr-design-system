## `nypr-m-share-tools`

Render links and share dialogs to various social networks.

Supported services are defined in `addon/components/nypr-m-share-tools.js`.
<DocsSnippet @name='share-tools-services.js' @showCopy={{false}}/>


<h4 id="examples" class="docs-md__h4">
  <a href="#examples" class="anchor-link">
    Examples
  </a>
</h4>

<DocsDemo as |demo|>
  <demo.example>

    <h4>Links</h4>
    <!-- BEGIN-SNIPPET share-tools-links.hbs -->
    <NyprMShareTools as |tools|>
      <tools.link @service='facebook' @username='foo'/>
      <tools.link @service='twitter' @username='bar'/>
      <tools.link @service='instagram' @username='baz'/>
    </NyprMShareTools>
    <!-- END-SNIPPET -->

    <h4>Share Dialog</h4>
    <!-- BEGIN-SNIPPET share-tools-share.hbs -->
    <NyprMShareTools as |tools|>
      <tools.share @service='facebook' />
      <tools.share @service='twitter' @params={{hash text='Read this great article' via='WNYC'}}/>
    </NyprMShareTools>
    <!-- END-SNIPPET -->

  </demo.example>

  <demo.snippet @name='share-tools-links.hbs' @label='Links'/>
  <demo.snippet @name='share-tools-share.hbs' @label='Share'/>
  <demo.snippet @name='nypr-m-share-tools-share.js' @label='nypr-m-share-tools-share.js'/>
  <demo.snippet @name='nypr-m-share-tools-share.hbs' @label='nypr-m-share-tools-share.hbs'/>
  <demo.snippet @name='nypr-m-share-tools-link.js' @label='nypr-m-share-tools-link.js'/>
  <demo.snippet @name='nypr-m-share-tools-link.hbs' @label='nypr-m-share-tools-link.hbs'/>
</DocsDemo>
