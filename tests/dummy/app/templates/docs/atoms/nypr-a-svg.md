## Available Icons
<table class="example-grid">
  <thead>
    <tr>
      <th></th>
      <th><code>default</code></th>
      <ThemeChooser @tagName='' as |chooser|>
        <th><code>{{chooser.theme}}</code></th>
      </ThemeChooser>
    </tr>
  </thead>
  <tbody>
    {{#each model as |path|}}
      <tr>
        <td class="example-label"><code>{{path}}</code></td>
        <td>
          <NyprASvg @icon={{path}} />
        </td>

        <ThemeChooser @tagName='' as |chooser|>
          <td>
            <NyprASvg @icon={{path}} @class={{chooser.theme}}/>
          </td>
        </ThemeChooser>
      </tr>
    {{/each}}
  </tbody>
</table>

## `nypr-a-svg`

Render the above icons using the `<NyprASvg/>` component.


### Usage

<DocsDemo as |demo|>
  <demo.example @name='svg-example.hbs'>
    <NyprASvg @icon='wnyc-logo'/>
  </demo.example>

  <demo.snippet @name='svg-example.hbs' @label='Usage'/>
  <demo.snippet @name='nypr-a-svg.js' @label='nypr-a-svg.js'/>
</DocsDemo>
