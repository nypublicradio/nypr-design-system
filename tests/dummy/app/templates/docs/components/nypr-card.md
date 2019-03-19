## `nypr-card`

### Examples
Given a story object with the following definition:
{{docs-snippet name="nypr-card-story.js"}}

{{#docs-demo as |demo|}}
  {{#demo.example name='nypr-card-example.hbs'}}
    {{nypr-card
      buttonText="Read Now"
      title=story.title
      body=story.body
      thumbnail=story.thumbnail}}
  {{/demo.example}}

  {{demo.snippet 'nypr-card-example.hbs' label='Usage'}}
  {{demo.snippet 'nypr-card.hbs' label='Source'}}
{{/docs-demo}}
