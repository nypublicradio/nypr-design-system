## `nypr-o-donate`

### Examples
You must pass a `close` action to remove the component from its outer context.

<DocsDemo as |demo|>
  <demo.example @name=''>

    {{#unless close}}
      <!-- BEGIN-SNIPPET donate-example.hbs -->
      <NyprODonate
        @message='hello world'
        @linkText='click me'
        @linkUrl='http://example.com/pledge'
        @close={{action (mut close) true}}
      />
      <!-- END-SNIPPET -->
    {{else}}
      <p>
        <button class="btn" {{action (mut close) false}}>Show Donate Tout</button>
      </p>
    {{/unless}}
  </demo.example>

  <demo.snippet @name='donate-example.hbs' @label='Usage'/>
  <demo.snippet @name='nypr-o-donate.hbs' @label='nypr-o-donate.hbs'/>
  <demo.snippet @name='nypr-o-donate.js' @label='nypr-o-donate.js'/>
</DocsDemo>
