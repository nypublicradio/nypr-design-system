import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | nypr-m-brands-linkroll', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{nypr-m-brands-linkroll}}`);

    assert.dom('.c-toggle-box--linkroll').exists();
  });

  test('can choose a site to exclude', async function(assert) {
    await render(hbs`<NyprMBrandsLinkroll @exclude='gothamist'/>`);

    await click('.c-toggle-box--linkroll > button'); // open the linkroll
    assert.dom('.c-nypr-nav__list').doesNotIncludeText('Gothamist');
  });

  test('can exclude multiple sites', async function(assert) {
    await render(hbs`<NyprMBrandsLinkroll @exclude={{array 'gothamist' 'wqxr'}}/>`);

    await click('.c-toggle-box--linkroll > button'); // open the linkroll
    assert.dom('.c-nypr-nav__list').doesNotIncludeText('Gothamist');
    assert.dom('.c-nypr-nav__list').doesNotIncludeText('WQXR');
  })
});
