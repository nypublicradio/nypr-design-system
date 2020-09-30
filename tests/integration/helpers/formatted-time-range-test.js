import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | formatted-time-range', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('it renders', async function(assert) {
    this.set('startTime', 'Tue Sep 29 2020 21:00:00 GMT-0400 (Eastern Daylight Time)');
    this.set('endTime', 'Tue Sep 29 2020 22:00:00 GMT-0400 (Eastern Daylight Time)');

    await render(hbs`{{formatted-time-range startTime endTime}}`);

    assert.equal(this.element.textContent.trim(), '9:00 PM to 10:00 PM');
  });
});
