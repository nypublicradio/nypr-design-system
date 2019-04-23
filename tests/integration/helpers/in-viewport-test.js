import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

import { inViewport }  from 'nypr-design-system/helpers/in-viewport';

module('Integration | Helper | in-viewport', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('it renders', async function(assert) {
    const HEIGHT = window.innerHeight * 2;

    const testingContainer = document.querySelector('#ember-testing-container');
    const OLD_POSITION = testingContainer.style.position;
    testingContainer.style.height = `${HEIGHT}px`;
    testingContainer.style.position = 'relative';

    this.set('spacerHeight', HEIGHT);

    await render(hbs`
      <div id="spacer" style="height: {{spacerHeight}}px; margin-bottom: 25px;"/>
      <div id="target" style="height: 25px;"/>
    `);

    const target = document.querySelector('#target');

    assert.notOk(inViewport(target), 'target should not be in viewport');

    window.scrollTo(0, HEIGHT);

    assert.ok(inViewport(target), 'target should be in viewport');

    testingContainer.style.height = '';
    testingContainer.style.position = OLD_POSITION;
    testingContainer.scrollTo(0, 0);
  });
});
