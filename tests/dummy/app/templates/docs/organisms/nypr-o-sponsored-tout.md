## `nypr-o-sponsored-tout`

### Examples

<DocsDemo as |demo|>
  <demo.example @name="sponsored-tout-usage.hbs">
    <NyprOSponsoredTout @heading="Sponsored">
      <NyprMBlock @orientation='h' as |block|>
        <block.media
          @srcS='/test-image2.jpeg'
        />

        <block.object as |o|>
          <o.eyebrow @text='Arts & Entertainment'/>

          <o.title @h3>
            Sponsored Content
          </o.title>

          <o.body as |body|>
            <body.text>
              Buy this thing because it pays the bills.
            </body.text>

            <body.meta
              @timestamp='30 minutes ago'
              @commentCount=0
            />
          </o.body>
        </block.object>
      </NyprMBlock>
    </NyprOSponsoredTout>
  </demo.example>

  <demo.snippet @name="sponsored-tout-usage.hbs" @label="Usage"/>
  <demo.snippet @name="nypr-o-sponsored-tout.hbs" @label="nypr-o-sponsored-tout.hbs"/>
  <demo.snippet @name="nypr-o-sponsored-tout.js" @label="nypr-o-sponsored-tout.js"/>

</DocsDemo>
