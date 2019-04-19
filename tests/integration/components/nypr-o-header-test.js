import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, waitUntil } from '@ember/test-helpers';
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
    assert.dom('body.side-menu-is-active', document).exists();
  });

  test('floating header', async function(assert) {
    await render(hbs`
      <NyprOHeader as |header|>
        <header.menu/>
        <header.left/>
      </NyprOHeader>
    `);

    let reset = await scrollPastHeader(this);

    const HEADER_CONTENTS = this.element.querySelector('.c-main-header__inner');

    assert.dom('.o-progress').exists();
    assert.dom('.c-main-header__inner.c-floating-header.is-visible').exists();
    assert.dom('.c-main-header__spacer').hasStyle({
      height: `${HEADER_CONTENTS.getBoundingClientRect().height}px`,
    });

    reset();
  });

  test('makes room for an ad', async function(assert) {
    await render(hbs`
      <NyprOHeader as |header|>
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
});

async function scrollPastHeader(owner) {
  const testingContainer = document.querySelector('#ember-testing-container');

  // CSS can play factor. without styles, this element is taller than the window
  // with styles, it's rather short, so use the larger of the two.
  // double them so there's enough space to scroll past the element and trigger the progress bar
  const HEADER_HEIGHT = owner.element.querySelector('.c-main-header').scrollHeight * 2;
  const WINDOW_HEIGHT = window.innerHeight * 2;
  const HEIGHT = HEADER_HEIGHT > WINDOW_HEIGHT ? HEADER_HEIGHT : WINDOW_HEIGHT;

  const OLD_POSITION = testingContainer.style.position;

  function reset() {
    testingContainer.style.height = '';
    testingContainer.style.position = OLD_POSITION;
  }

  testingContainer.style.height = `${HEIGHT}px`;
  testingContainer.style.position = 'relative';

  window.scrollTo(0, HEIGHT);

  await waitUntil(() => {
    let progress = owner.element.querySelector('.o-progress');
    return progress && progress.value > 0;
  }, {timeout: 2000})

  return reset;
}
