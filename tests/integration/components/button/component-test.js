import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import a11yAudit from 'ember-a11y-testing/test-support/audit';

module('Integration | Component | button', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders a button with a label and an icon', async function(assert) {
    const BUTTON_LABEL = 'Button';
    const BUTTON_ICON = 'audio';
    this.set('label', BUTTON_LABEL);
    this.set('icon', BUTTON_ICON);

    await render(hbs`<Button @label={{label}} @icon={{icon}} />`);

    assert.dom('.button-label').exists();
    assert.dom('.button-label').hasText(BUTTON_LABEL);
    assert.dom('svg.button-icon').exists();

    a11yAudit(this.element).then(() => {
      assert.ok(true, 'no a11y errors found!');
    });
  });

  test('it renders a button with a label only', async function(assert) {
    const BUTTON_LABEL = 'Button';
    this.set('label', BUTTON_LABEL);

    await render(hbs`<Button @label={{label}} />`);

    assert.dom('.button-label').exists();
    assert.dom('.button-label').hasText(BUTTON_LABEL);
    assert.dom('svg.button-icon').doesNotExist();
    a11yAudit(this.element).then(() => {
      assert.ok(true, 'no a11y errors found!');
    });
  });

  test('it renders a button with an icon only', async function(assert) {
    const BUTTON_ICON = 'audio';
    const ALT_TEXT = 'Play'
    this.set('icon', BUTTON_ICON);
    this.set('alt', ALT_TEXT);

    await render(hbs`<Button @icon={{icon}} @alt={{alt}} />`);

    assert.dom('.button-label').doesNotExist();
    assert.dom('svg.button-icon').exists();
    assert.dom('.button').hasClass('is-icon-only');
    assert.dom('.button-alt').exists();
    assert.dom('.button-alt').hasClass('is-vishidden');
    assert.dom('.button-alt').hasText(ALT_TEXT);
    a11yAudit(this.element).then(() => {
      assert.ok(true, 'no a11y errors found!');
    });
  });

  test('the onClick event works', async function(assert) {
    assert.expect(1);

    let clickHandler = function() {
      assert.ok('click handler was triggered')
    };

    this.set('clickHandler', clickHandler);

    await render(hbs`<Button onClick={{clickHandler}} />`);

    await click('.button');
  });
});


