## Buttons

### Usage
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

  {{demo.snippet 'nypr-button-example.hbs'}}
{{/docs-demo}}

### Theme Samples
{{#theme-chooser as |theme|}}
  {{#nypr-button theme=theme}}
    foo
  {{/nypr-button}}
{{/theme-chooser}}
