import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | nypr-m-social-follow', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{nypr-m-social-follow}}`);

    assert.equal(this.element.textContent.trim(), 'Follow Us');

    // Template block usage:
    await render(hbs`
      {{#nypr-m-social-follow}}
        template block text
      {{/nypr-m-social-follow}}
    `);

    assert.ok(this.element.textContent.trim().includes('template block text'));
    assert.ok(this.element.textContent.trim().includes('Follow Us'));
  });
});
