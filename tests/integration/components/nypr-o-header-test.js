import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

import { scrollPastHeader } from 'nypr-design-system/test-support';

module('Integration | Component | nypr-o-header', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    const LEADERBOARD = 'ad unit';
    const BRANDING = 'some logo';
    const PRIMARY_NAV = [{route: ['foo'], text: 'One'}, {route: ['bar'], text: 'Two'}];
    const SECONDARY_NAV = [{url: '/three', Title: 'Three'}, {url: '/four', Title: 'Four'}];
    const HEADLINE = "headline";
    const RIGHT_SIDE = 'foo';

    this.setProperties({
      LEADERBOARD,
      BRANDING,
      PRIMARY_NAV,
      SECONDARY_NAV,
      HEADLINE,
      RIGHT_SIDE,
    });

    // test injection for leaderboard
    await render(hbs`
      <NyprOHeader @rules={{hash leaderboard=true}} as |header|>
        <header.leaderboard @hideLabel={{true}}>
          {{LEADERBOARD}}
        </header.leaderboard>

        <header.menu as |menu|>
          <menu.branding>
            {{BRANDING}}
          </menu.branding>

          <menu.primaryNav @navItems={{PRIMARY_NAV}} />
          <menu.secondaryNav @navItems={{SECONDARY_NAV}} />
        </header.menu>

        <header.left as |left|>
          <left.branding>
            {{BRANDING}}
          </left.branding>

          <left.headline>
            {{HEADLINE}}
          </left.headline>
        </header.left>

        <header.nav @navItems={{PRIMARY_NAV}}/>

        <header.right as |right|>
          <span class="arbitrary-content">
            {{RIGHT_SIDE}}
          </span>

          <right.search as |search|>
            <search.open/>
            <search.form/>
          </right.search>
        </header.right>

      </NyprOHeader>
    `);

    // leaderboard ad
    assert.dom('.o-ad--leaderboard').hasText(LEADERBOARD);

    // side menu
    assert.dom('.c-side-menu__branding').hasText(BRANDING);
    assert.dom('.c-primary-nav--side li').exists({count: 2});
    assert.dom('.c-side-menu__secondary-nav li').exists({count: 2});

    // full width strip
    assert.dom('.c-main-header__branding').hasText(BRANDING);
    assert.dom('.c-main-header__title').hasText(HEADLINE);
    assert.dom('.c-primary-nav--top li').exists({count: 2});
    assert.dom('.c-main-header__right .arbitrary-content').hasText(RIGHT_SIDE);

    // search
    assert.dom('.c-search-toggle').exists();
    assert.dom('form.c-search').exists();
  });

  test('interactivity', async function(assert) {
    await render(hbs`
      <NyprOHeader as |header|>
        <header.menu/>
        <header.left/>
      </NyprOHeader>
    `);

    await click('.o-menu-toggle');

    assert.dom('.c-main-header.side-menu-is-active').exists();
    assert.dom('body.side-menu-is-active', document).exists();
  });

  test('floating header', async function(assert) {
    // header test injection
    await render(hbs`
      <NyprOHeader @rules={{hash progressTarget=true}} as |header|>
        <header.menu/>
        <header.left/>
      </NyprOHeader>
    `);

    let reset = await scrollPastHeader(this);

    const { height:HEADER_HEIGHT } = this.element.querySelector('.c-main-header__inner').getBoundingClientRect();

    assert.dom('.o-progress').exists();
    assert.dom('.c-main-header__inner.c-floating-header.is-visible').exists();
    assert.dom('.c-main-header').hasStyle({
      height: `${HEADER_HEIGHT}px`,
    });

    reset();
  });

  test('makes room for an ad', async function(assert) {
    // leaderboard test injection
    await render(hbs`
      <NyprOHeader @rules={{hash leaderboard=true}} as |header|>
        <header.leaderboard>
          <div style="height: 500px;"/>
        </header.leaderboard>
        <header.menu/>
        <header.left/>
      </NyprOHeader>
    `);

    await click('.o-menu-toggle');

    const ad = this.element.querySelector('.c-main-header__ad-unit');
    assert.equal(this.element.querySelector('.c-side-menu').style.height, `calc(100vh - ${ad.offsetHeight}px)`);
  });

  test('yields active rules', async function(assert) {
    let service = this.owner.lookup('service:nypr-o-header');

    service.addRule(null, {
      resting: {
        foo: true,
      },
      floating: {
        bar: true,
      }
    });

    await render(hbs`
      <NyprOHeader as |header|>
        <header.left>
          <div id="example">
            {{#if header.rules.foo}}
              foo
            {{/if}}
            {{#if header.rules.bar}}
              bar
            {{/if}}
          </div>
        </header.left>
      </NyprOHeader>
    `);

    assert.dom('#example').hasText('foo', 'resting state should turn on `foo` rule');

    function headerIsFloating(owner) {
      return owner.element.querySelector('.c-floating-header');
    }
    let reset = await scrollPastHeader(this, headerIsFloating);

    assert.dom('#example').hasText('bar', 'floating state should turn on `bar` rule');

    reset();
  });
});
