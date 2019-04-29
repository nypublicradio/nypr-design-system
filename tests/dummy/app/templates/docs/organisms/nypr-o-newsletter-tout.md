## `nypr-o-newsletter-tout`

### Examples

<DocsDemo as |demo|>
  <demo.example @name="newsletter-tout-usage.hbs">
    <NyprONewsletterTout
      @img={{hash
        src='https://picsum.photos/500/500?image=66'
        alt='newsletter image'
      }}
      as |tout|>
      <tout.heading>
        Sign Up for We The Commuters
      </tout.heading>

      <tout.blurb>
        You already read our words, now you can read them in email form too! Read a quick bite-sized list of content!
      </tout.blurb>

      <tout.legal/>
    </NyprONewsletterTout>

  </demo.example>

  <demo.snippet @name="newsletter-tout-usage.hbs" @label="Usage"/>
  <demo.snippet @name="nypr-o-newsletter-tout.hbs" @label="nypr-o-newsletter-tout.hbs"/>
  <demo.snippet @name="nypr-o-newsletter-tout.js" @label="nypr-o-newsletter-tout.js"/>

</DocsDemo>
