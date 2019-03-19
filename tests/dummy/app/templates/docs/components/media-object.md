## `media-object`

The [famous](http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/) media object.

## Examples
{{#docs-demo as |demo|}}
  {{#demo.example name="media-object-basic.hbs"}}
    {{#media-object as |mo|}}
      {{#mo.media}}
        <img src="https://via.placeholder.com/150" />
      {{/mo.media}}

      {{#mo.object}}
        The humble media object.
      {{/mo.object}}
    {{/media-object}}
  {{/demo.example}}

  {{demo.snippet 'media-object-basic.hbs' label="Basic Usage"}}
{{/docs-demo}}
