import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, findAll } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | nypr-m-byline', function(hooks) {
  const IN_HOUSE = [{
    name: 'Foo Bar',
    url: 'https://example.com/foo-bar'
  }, {
    name: 'Biz Baz',
    url: 'https://example.com/biz-baz'
  }];

  const CONTRIBUTORS = [{
    name: 'Qux Wux',
    url: 'https://example.com/qux-wux',
    org: {
      name: 'WNYC',
      url: 'https://example.org/wnyc',
    }
  }, {
    name: 'Zooey Yooey',
    url: 'https://example.com/zooey-yooey',
    org: {
      name: 'NPR',
      url: 'https://example.org/npr',
    }
  }];

  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<NyprMByline/>`);
    assert.dom('.o-byline').exists();
  });

  test('1 to n in house authors', async function(assert) {
    this.setProperties({
      IN_HOUSE,
      JUST_ONE: IN_HOUSE.slice(-1)
    });

    // N many
    await render(hbs`<NyprMByline @authors={{IN_HOUSE}} />`);

    assert.dom('[data-test-author-name]').exists({count: 2});
    findAll('[data-test-author-name]').forEach((el, i) => {
      assert.dom(el).hasText(IN_HOUSE[i].name);
      assert.dom(el).hasAttribute('href', IN_HOUSE[i].url);
    });

    // JUST ONE
    await render(hbs`<NyprMByline @authors={{JUST_ONE}} />`);

    assert.dom('[data-test-author-name]').exists({count: 1});
    assert.dom('.o-byline').doesNotIncludeText(',', 'single names should not be a serialized list')
  });

  test('1 to n authors from contributing orgs, no in house authors', async function(assert) {
    this.setProperties({
      CONTRIBUTORS,
      JUST_ONE: CONTRIBUTORS.slice(-1),
    });

    // N many
    await render(hbs`<NyprMByline @authors={{CONTRIBUTORS}} />`);

    assert.dom('[data-test-author-name]').exists({count: 2});
    assert.dom('[data-test-author-org]').exists({count: 2});

    findAll('[data-test-author-name]').forEach((el, i) => {
      assert.dom(el).hasText(CONTRIBUTORS[i].name);
      assert.dom(el).hasAttribute('href', CONTRIBUTORS[i].url);
    });

    findAll('[data-test-author-org-link]').forEach((el, i) => {
      assert.dom(el).hasText(CONTRIBUTORS[i].org.name);
      assert.dom(el).hasAttribute('href', CONTRIBUTORS[i].org.url);
    });

    // JUST ONE
    await render(hbs`<NyprMByline @authors={{JUST_ONE}} />`);

    assert.dom('[data-test-author-name]').exists({count: 1});
    assert.dom('[data-test-author-org]').exists({count: 1});
  });

  test('1 to n in-house authors with 1 to n authors from contributing orgs', async function(assert) {
    const ALL = IN_HOUSE.concat(CONTRIBUTORS);
    const JUST_TWO = IN_HOUSE.slice(-1).concat(CONTRIBUTORS.slice(-1));

    this.setProperties({
      ALL,
      JUST_TWO,
    });

    // N many
    await render(hbs`<NyprMByline @authors={{ALL}}/>`);

    assert.dom('[data-test-author-name]').exists({count: 4});
    assert.dom('[data-test-author-org]').exists({count: 2});

    findAll('[data-test-author-name]').forEach((el, i) => {
      assert.dom(el).hasText(ALL[i].name);
      assert.dom(el).hasAttribute('href', ALL[i].url);
    });

    // JUST ONE OF EACH
    await render(hbs`<NyprMByline @authors={{JUST_TWO}}/>`);

    assert.dom('[data-test-author-name]').exists({count: 2});
    assert.dom('[data-test-author-org]').exists({count: 1});

    findAll('[data-test-author-name]').forEach((el, i) => {
      assert.dom(el).hasText(JUST_TWO[i].name);
      assert.dom(el).hasAttribute('href', JUST_TWO[i].url);
    });
  });

  test('sponsored', async function(assert) {
    const SPONSOR = {
      name: 'BMW',
      url: 'https://example.com/bmw',
    };
    this.setProperties({SPONSOR});

    await render(hbs`<NyprMByline @sponsor={{SPONSOR}}/>`);
    assert.dom('[data-test-sponsor-name]').hasText(`Sponsored by ${SPONSOR.name}`);
    assert.dom('[data-test-sponsor-name]').hasAttribute('href', SPONSOR.url)
  });
});
