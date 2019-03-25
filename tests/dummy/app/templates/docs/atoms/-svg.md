## Available Icons
<table class="example-grid">
  <thead>
    <tr>
      <th></th>
      <th><code>default</code></th>
      {{#theme-chooser tagName='' as |chooser|}}
        <th><code>{{chooser.theme}}</code></th>
      {{/theme-chooser}}
    </tr>
  </thead>
  <tbody>
    {{#each model as |path|}}
      <tr>
        <td class="example-label"><code>{{path}}</code></td>
        <td>
          {{atoms/-svg icon=path}}
        </td>

        {{#theme-chooser tagName='' as |chooser|}}
          <td>
            {{atoms/-svg icon=path class=chooser.theme}}
          </td>
        {{/theme-chooser}}
      </tr>
    {{/each}}
  </tbody>
</table>

## `atoms/-svg`

Render the above icons using the `{{atoms/-svg}}` component.


### Usage

{{#docs-demo as |demo|}}
  {{#demo.example name='svg-example.hbs'}}
    {{atoms/-svg icon='wnyc-logo'}}
  {{/demo.example}}

  {{demo.snippet 'svg-example.hbs' label='Usage'}}
{{/docs-demo}}
