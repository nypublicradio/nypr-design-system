## `nypr-a-tag`

### Examples
<DocsDemo as |demo|>
  <demo.example>
    Basic Usage<br>
    <!-- BEGIN-SNIPPET tag-example.hbs -->
    <NyprATag @tag='foo' />
    <!-- END-SNIPPET -->
    <br>
    <br>
    With a URL:<br>
    <!-- BEGIN-SNIPPET tag-url-example.hbs -->
    <NyprATag @tag='foo' @url='https://example.com/foo' />
    <!-- END-SNIPPET -->
    <br>
    <br>
    Strip the prefix:<br>
    <!-- BEGIN-SNIPPET tag-without-prefix.hbs -->
    <NyprATag @prefix='' @tag='foo'/>
    <!-- END-SNIPPET -->

  </demo.example>

  <demo.snippet @name='tag-example.hbs' @label='Usage'/>
  <demo.snippet @name='tag-url-example.hbs' @label='Set a URL'/>
  <demo.snippet @name='tag-without-prefix.hbs' @label='Remove Prefix'/>
  <demo.snippet @name='nypr-a-tag.js' @label='nyp-a-tag.js'/>
  <demo.snippet @name='nypr-a-tag.hbs' @label='nypr-a-tag.hbs'/>
</DocsDemo>
