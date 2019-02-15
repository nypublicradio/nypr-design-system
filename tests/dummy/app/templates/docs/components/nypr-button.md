## `nypr-button`

### Examples
{{#docs-demo as |demo|}}
  {{#demo.example name='nypr-button-example.hbs'}}
    <p>
      {{#nypr-button}}
        default button
      {{/nypr-button}}
    </p>

    <p>
      {{#nypr-button theme='wnyc'}}
        button with a theme
      {{/nypr-button}}
    </p>
  {{/demo.example}}

  {{demo.snippet 'nypr-button-example.hbs' label='Usage'}}
  {{demo.snippet 'nypr-button.hbs' label='nypr-button.hbs'}}
  {{demo.snippet 'nypr-button.js' label='nypr-button.js'}}
  {{demo.snippet 'nypr-button.scss' label='\_nypr-button.scss'}}
{{/docs-demo}}

### Theme Samples
{{#theme-chooser as |chooser|}}
  {{#chooser.item}}
    {{#nypr-button theme=chooser.theme}}
      foo
    {{/nypr-button}}
  {{/chooser.item}}
{{/theme-chooser}}
