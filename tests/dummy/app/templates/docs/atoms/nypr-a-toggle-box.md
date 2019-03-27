## `nypr-a-toggle-box`

### Examples
<DocsDemo as |demo|>
  <demo.example @name='toggle-box-example.hbs'>
    <NyprAToggleBox @horizontalPosition='right' as |toggle|>
      <toggle.trigger>
        <strong>Toggle Box Label</strong>
      </toggle.trigger>

      <toggle.dropdown>
        Dropdown Contents
      </toggle.dropdown>
    </NyprAToggleBox>
  </demo.example>

  <demo.snippet @name='toggle-box-example.hbs' @label='Usage'/>
</DocsDemo>
