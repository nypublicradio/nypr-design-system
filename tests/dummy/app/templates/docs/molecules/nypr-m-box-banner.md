## `nypr-m-box-banner`

A simple box to display notifications or callouts. Includes areas for `title`, `dek`, and a `cta` button, plus an optional `close` button that will call a passed in `@close` argument.

### Examples

<DocsDemo as |demo|>

  <demo.example>

    <fieldset>
      <legend>Show Box Banner Variations</legend>
      <p>
        <label for="body">Show the box content</label>
        <input id="body" type="checkbox" onclick={{action (mut showBody) (not showBody)}}>
      </p>

      <p>
        <label for="close">Show close button</label>
        <input id="close" type="checkbox" onclick={{action 'toggleCloseFn'}} checked={{close}}>
      </p>
    </fieldset>

    <!-- BEGIN-SNIPPET box-banner-example.hbs -->
    <NyprMBoxBanner @close={{close}} as |banner|>

        <banner.title>
          <a href="">
            Long Wrapping Linked Headline Goes Here Now.
          </a>
        </banner.title>

      {{#if showBody}}
        <banner.body as |body|>
          <body.dek>
            <p>
              A coalition of community groups are <a href="">suing the city</a> to stop a multi-billion dollar mega development of four high-rise towers that some locals fear will greatly.
            </p>
          </body.dek>

          <body.cta>
            <NyprAButton>
              Got it, thanks.
            </NyprAButton>
          </body.cta>
        </banner.body>
      {{/if}}

    </NyprMBoxBanner>
    <!-- END-SNIPPET -->
  </demo.example>

  <demo.snippet @name='box-banner-example.hbs' @label='Usage'/>
  <demo.snippet @name='nypr-m-box-banner.js' @label='nypr-m-box-banner.js'/>
  <demo.snippet @name='nypr-m-box-banner.hbs' @label='nypr-m-box-banner.hbs'/>
  <demo.snippet @name='nypr-m-box-banner-title.js' @label='nypr-m-box-banner-title.js'/>
  <demo.snippet @name='nypr-m-box-banner-title.hbs' @label='nypr-m-box-banner-title.hbs'/>
  <demo.snippet @name='nypr-m-box-banner-dek.js' @label='nypr-m-box-banner-dek.js'/>
  <demo.snippet @name='nypr-m-box-banner-dek.hbs' @label='nypr-m-box-banner-dek.hbs'/>
  <demo.snippet @name='nypr-m-box-banner-cta.js' @label='nypr-m-box-banner-cta.js'/>
  <demo.snippet @name='nypr-m-box-banner-cta.hbs' @label='nypr-m-box-banner-cta.hbs'/>

</DocsDemo>