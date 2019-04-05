## `nypr-o-header`

### Example Usage

<DocsDemo as |demo|>
  <demo.example>
    <fieldset>
      <legend>Demo Controls. Viewing: {{if (eq type 'A') 'Article' (if (eq type 'G') 'Gallery' 'Default')}}</legend>
      <p>
        <label>View as Default
          <input type='radio' name='header' value='D' onChange={{action (mut type) value='target.value'}} checked=true/>
        </label>
      </p>
      <p>
        <label>View as Article
          <input type='radio' name='header' value='A' onChange={{action (mut type) value='target.value'}}/>
        </label>
      </p>
      <p>
        <label>View as Gallery
          <input type='radio' name='header' value='G' onChange={{action (mut type) value='target.value'}}/>
        </label>
      </p>
    </fieldset>

    <!-- BEGIN-SNIPPET footer-example.hbs -->
    <NyprOHeader
      @donateURL='https://pledge3.wnyc.org/donate/gothamist/onestep/?utm_medium=partnersite&utm_source=gothamist&utm_campaign=brandheader'
      class={{if (eq type 'A') 'c-main-header--article' (if (eq type 'G') 'c-main-header--gallery' '')}}
      as |header|>
      {{#unless (xor (eq type 'A') (eq type 'G'))}}
        <header.leaderboard>
          <picture>
            <source media="(min-width: 750px)" srcset="https://tpc.googlesyndication.com/simgad/3866766746825522936">
            <img src="https://s0.2mdn.net/5188901/TINCUP_OUTSIDEONLINE_300x50.jpg" alt="">
          </picture>
        </header.leaderboard>
      {{/unless}}

      <header.menu as |menu|>
        <menu.branding>
          <NyprASvg @icon='gothamist-logo'/>
        </menu.branding>

        <menu.primaryNav @navItems={{PRIMARY_NAV_ITEMS}} />

        <menu.secondaryNav @navItems={{SECONDARY_NAV_ITEMS}} />
      </header.menu>

      <header.left as |left|>
        <left.branding>
          <a href="http://gothamist.com" target="\_blank">
            <NyprASvg @icon='gothamist-logo'/>
          </a>
        </left.branding>

        {{#if (eq type 'A')}}
          <left.headline>
          sup
          </left.headline>
        {{/if}}

      </header.left>

      {{#unless (or (eq type 'A') (eq type 'G'))}}
        <header.nav @navItems={{PRIMARY_NAV_ITEMS}}/>
      {{/unless}}

      <header.right as |right|>
        {{#if (eq type 'A')}}
          <right.share>
            <NyprMShareTools @label='Share' as |tools|>
              <tools.share @service='facebook' />
              <tools.share @service='twitter' @params={{hash text='Read this great article' via='WNYC'}}/>
            </NyprMShareTools>
          </right.share>

          <NyprAButton
            class='c-main-header__donate o-button--sm'
            @url='https://pledge3.wnyc.org/donate/gothamist/onestep/?utm_medium=partnersite&utm_source=gothamist&utm_campaign=brandheader'>
            Donate
          </NyprAButton>

          <right.search as |search|>
            <search.open/>
            <search.form/>
          </right.search>

        {{else if (eq type 'G')}}
          <right.share>
            <NyprMShareTools @label='Share' as |tools|>
              <tools.share @service='facebook' />
              <tools.share @service='twitter' @params={{hash text='Read this great article' via='WNYC'}}/>
            </NyprMShareTools>
          </right.share>

          <NyprAButton @blank={{true}} class="u-padding--half">
            <NyprASvg @icon='close' class="c-main-header__close"/>
          </NyprAButton>
        {{else}}

          <NyprAButton
            class='c-main-header__donate o-button--sm'
            @url='https://pledge3.wnyc.org/donate/gothamist/onestep/?utm_medium=partnersite&utm_source=gothamist&utm_campaign=brandheader'>
            Donate
          </NyprAButton>

          <right.search as |search|>
            <search.open/>
            <search.form/>
          </right.search>

        {{/if}}

      </header.right>
    </NyprOHeader>
    <!-- END-SNIPPET -->
  </demo.example>

  <demo.snippet @name='footer-example.hbs' @label='Usage'/>
  <demo.snippet @name='nypr-o-footer.hbs' @label='nypr-o-footer.hbs'/>
  <demo.snippet @name='nypr-o-footer.js' @label='nypr-o-footer.js'/>
</DocsDemo>
