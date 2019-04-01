## `nypr-m-breadcrumb`

Render a list of breadcrumbs with optional URLs

### Examples
The example below is with the following sample breadcrumb list:
<DocsSnippet @name='breadcrumb-definition.js' />

<DocsDemo as |demo|>
  <demo.example @name='breadcrumb-example.hbs'>
    <NyprMBreadcrumb @breadcrumbs={{BREADCRUMBS}} />
  </demo.example>

  <demo.snippet @name='breadcrumb-example.hbs' @label='Usage'/>
  <demo.snippet @name='nypr-m-breadcrumb.js' @label='nypr-m-breadcrumb.js'/>
  <demo.snippet @name='nypr-m-breadcrumb.hbs' @label='nypr-m-breadcrumb.hbs'/>
</DocsDemo>
