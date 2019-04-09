## `nypr-o-header`

### Example Usage

<DocsDemo as |demo|>
  <demo.example>
    <fieldset>
      <legend>Demo Controls. Viewing: {{if STORY 'Article' (if GALLERY 'Gallery' 'Default')}}</legend>
      <p>
        <label>View as Default
          <input type='radio' name='header' value='D' onChange={{action 'setHeader' value='target.value'}} checked=true/>
        </label>
      </p>
      <p>
        <label>View as Article
          <input type='radio' name='header' value='A' onChange={{action 'setHeader' value='target.value'}}/>
        </label>
      </p>
      <p>
        <label>View as Gallery
          <input type='radio' name='header' value='G' onChange={{action 'setHeader' value='target.value'}}/>
        </label>
      </p>
    </fieldset>

    <div class="theme-typography" style="margin: 0 -200px;">
    <!-- BEGIN-SNIPPET header-example.hbs -->
      <NyprOHeader
        @donateURL={{DONATE_URL}}
        as |header|>
        {{#unless (or STORY GALLERY)}}
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
            <a href="http://gothamist.com">
              <NyprASvg @icon='gothamist-logo'/>
            </a>
          </left.branding>

          {{#if STORY}}
            <left.headline>
              {{STORY.title}}
            </left.headline>
          {{/if}}

        </header.left>

        {{#unless (or STORY GALLERY)}}
          <header.nav @navItems={{PRIMARY_NAV_ITEMS}}/>
        {{/unless}}

        <header.right as |right|>
          {{#if STORY}}
            <NyprMShareTools @label='Share' as |tools|>
              <tools.share @service='facebook' />
              <tools.share @service='twitter' @params={{hash text='Read this great article' via='WNYC'}}/>
            </NyprMShareTools>

            <NyprAButton
              class='c-main-header__donate o-button--sm'
              @url={{DONATE_URL}}>
              Donate
            </NyprAButton>

            <right.search as |search|>
              <search.open/>
              <search.form/>
            </right.search>

          {{else if GALLERY}}
            <NyprMShareTools @label='Share' as |tools|>
              <tools.share @service='facebook' />
              <tools.share @service='twitter' @params={{hash text='Read this great article' via='WNYC'}}/>
            </NyprMShareTools>

            <NyprAButton @blank={{true}} class="u-padding--half">
              <NyprASvg @icon='close' class="c-main-header__close"/>
            </NyprAButton>
          {{else}}

            <NyprAButton
              class='c-main-header__donate o-button--sm'
              @url={{DONATE_URL}}>
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
    </div>
  </demo.example>

  <demo.snippet @name='header-example.hbs' @label='Usage'/>
  <demo.snippet @name='nypr-o-header.hbs' @label='nypr-o-header.hbs'/>
  <demo.snippet @name='nypr-o-header.js' @label='nypr-o-header.js'/>
</DocsDemo>

### Nested Components

{{#docs-demo as |demo|}}

  {{demo.snippet name='nypr-o-header-leaderboard.hbs' label='nypr-o-header/leaderboard.hbs'}}
  {{demo.snippet name='nypr-o-header-leaderboard.js' label='nypr-o-header/leaderboard.js'}}
  {{demo.snippet name='nypr-o-header-menu.hbs' label='nypr-o-header/menu.hbs'}}
  {{demo.snippet name='nypr-o-header-menu.js' label='nypr-o-header/menu.js'}}
  {{demo.snippet name='nypr-o-header-nav.hbs' label='nypr-o-header/nav.hbs'}}
  {{demo.snippet name='nypr-o-header-nav.js' label='nypr-o-header/nav.js'}}
  {{demo.snippet name='nypr-o-header-left.hbs' label='nypr-o-header/left.hbs'}}
  {{demo.snippet name='nypr-o-header-left.js' label='nypr-o-header/left.js'}}
  {{demo.snippet name='nypr-o-header-headline.hbs' label='nypr-o-header/headline.hbs'}}
  {{demo.snippet name='nypr-o-header-headline.js' label='nypr-o-header/headline.js'}}
  {{demo.snippet name='nypr-o-header-right.hbs' label='nypr-o-header/right.hbs'}}
  {{demo.snippet name='nypr-o-header-right.js' label='nypr-o-header/right.js'}}

{{/docs-demo}}
