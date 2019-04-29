## `nypr-o-footer`

### Example Usage

<DocsDemo as |demo|>
  <demo.example>
    <div style="margin: 0 -200px;">
    <!-- BEGIN-SNIPPET footer-example.hbs -->
      <NyprOFooter as |footer|>
        <footer.slogan>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
          </p>
        </footer.slogan>

        <footer.nav
          @navItems={{array
            (hash url='/advertising' title='Advertising')
            (hash url='/contact' title='Contact Us')
            (hash url='/newsletter' title='Newsletter')
          }}
        />

        <footer.signup>
          <NyprMNewsletter as |newsletter|>
            <newsletter.graphic>
              <NyprASvg @icon='party-confetti'/>
            </newsletter.graphic>
            <newsletter.blurb>Sign up today</newsletter.blurb>

            <newsletter.legal/>
          </NyprMNewsletter>
        </footer.signup>

      </NyprOFooter>
    <!-- END-SNIPPET -->
    </div>
  </demo.example>

  <demo.snippet @name='footer-example.hbs' @label='Usage'/>
  <demo.snippet @name='nypr-o-footer.hbs' @label='nypr-o-footer.hbs'/>
  <demo.snippet @name='nypr-o-footer.js' @label='nypr-o-footer.js'/>
</DocsDemo>
