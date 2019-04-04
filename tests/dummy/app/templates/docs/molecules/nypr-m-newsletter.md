## `nypr-m-newsletter`

### Examples

To render the legal language, you must include `<newsletter.legal/>` in the passed in block.

<DocsDemo as |demo|>

  <demo.example @name='newsletter-usage.hbs'>

    <NyprMNewsletter
      @endpoint='http://api.demo.nypr.digital/opt-in/v1/subscribe/mailchimp'
      @params={{hash list="058457038f"}}
      as |newsletter|>

      <newsletter.graphic>
        <NyprASvg @icon='confetti'/>
      </newsletter.graphic>

      <newsletter.blurb>
        Sign up for this great newsletter.
      </newsletter.blurb>

      <newsletter.legal/>

    </NyprMNewsletter>

  </demo.example>

  <demo.snippet @name='newsletter-usage.hbs' @label='Usage'/>
  <demo.snippet @name='nypr-m-newsletter.hbs' @label='nypr-m-newsletter.hbs'/>
  <demo.snippet @name='nypr-m-newsletter.js' @label='nypr-m-newsletter.js'/>

</DocsDemo>
