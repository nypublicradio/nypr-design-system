import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, waitFor } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | nypr-o-header', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    const LEADERBOARD = 'ad unit';
    const BRANDING = 'some logo';
    const PRIMARY_NAV = [{url: '/one', Title: 'One'}, {url: '/two', Title: 'Two'}];
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

    await render(hbs`
      <NyprOHeader as |header|>
        <header.leaderboard>
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
  });

  test('floating header', async function(assert) {
    const testingContainer = document.querySelector('#ember-testing-container');
    const HEIGHT = 5000;
    const OLD_POSITION = testingContainer.style.position;
    testingContainer.style.height = `${HEIGHT}px`;
    testingContainer.style.position = 'relative';

    await render(hbs`
      <NyprOHeader as |header|>
        <header.menu/>
        <header.left/>
      </NyprOHeader>
    `);

    window.scrollTo(0, HEIGHT)
    await waitFor('.o-progress');

    assert.dom('.o-progress').exists();
    assert.dom('.c-main-header__inner.c-floating-header.is-visible').exists();

    testingContainer.style.height = '';
    testingContainer.style.position = OLD_POSITION;
  })
});
