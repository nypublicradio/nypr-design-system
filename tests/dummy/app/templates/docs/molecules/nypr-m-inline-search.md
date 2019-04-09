## `nypr-m-inline-search`

### Usage

<DocsDemo as |demo|>

  <demo.example>
    <p>
      <strong>You searched for:</strong> <code>{{query}}</code>
    </p>

    <!-- BEGIN-SNIPPET search-usage.hbs -->
    <NyprMInlineSearch @search={{action (mut query)}} />
    <!-- END-SNIPPET -->

  </demo.example>

  <demo.snippet @name='search-usage.hbs' @label='Usage'/>
  <demo.snippet @name='nypr-m-inline-search.hbs' @label='nypr-m-inline-search.hbs'/>
  <demo.snippet @name='nypr-m-inline-search.js' @label='nypr-m-inline-search.js'/>

</DocsDemo>


### Block Usage

Inline search yields the form and a separate toggle button. Note the `<NyprMInlineSearch/>` component needs the `c-search--top` class to expose the toggle button.

{{#docs-demo as |demo|}}

  {{#demo.example name='block'}}
    <p>
      <strong>You searched for:</strong> <code>{{blockQuery}}</code>
    </p>

    <!-- BEGIN-SNIPPET search-block-usage.hbs -->
    <NyprMInlineSearch @formClass="c-search--top" as |search|>
      <search.open/>
      <search.form @search={{action (mut blockQuery)}}/>
    </NyprMInlineSearch>
    <!-- END-SNIPPET -->
  {{/demo.example}}

  {{demo.snippet name='search-block-usage.hbs' label='Usage'}}
{{/docs-demo}}
