## `nypr-a-button`

### Examples

The `NyprAButton` component supports rendering as either an `a` tag or a `button` tag. If a `@url` argument is passed, an anchor will be rendered.

Accepts an `@onclick` argument for `button` variations. Also accepts a `@blank` argument to remove styling.

#### Simple Button
<DocsDemo as |demo|>
  <demo.example>

    <p>
      <label for="url-input">Set a URL for the button</label> {{input id="url-input" type="text" value=url}}
    </p>
    <p>
      Has been clicked? {{if clicked 'Yes' 'No'}}
    </p>
    <p>
      <label>`{{blank}}`? {{input type="checkbox" checked=blank}}</label>
    </p>

    <!-- BEGIN-SNIPPET button-example.hbs -->
    <NyprAButton
      @url={{url}}
      @onclick={{action (mut clicked) true}}
      @blank={{blank}}
    >
      Click Me
    </NyprAButton>
    <!-- END-SNIPPET -->
  </demo.example>

  <demo.snippet @name='button-example.hbs' @label='Usage'/>
  <demo.snippet @name='nypr-a-button.hbs' @label='nypr-a-button.hbs'/>
  <demo.snippet @name='nypr-a-button.js' @label='nypr-a-button.js'/>
</DocsDemo>
