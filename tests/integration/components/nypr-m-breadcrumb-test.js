import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | nypr-m-breadcrumb', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<NyprMBreadcrumb/>`);

    assert.dom('.o-breadcrumbs').exists();

    this.set('breadcrumbs', [{label: 'News', url: '/tags/news'}, {label: 'Politics'}]);

    await render(hbs`<NyprMBreadcrumb @breadcrumbs={{breadcrumbs}}/>`);

    assert.dom('.o-breadcrumb').exists({count: 2});
    assert.dom('a.o-breadcrumb').hasAttribute('href', '/tags/news');
    assert.dom('span.o-breadcrumb').exists({count: 1});
  });
});
