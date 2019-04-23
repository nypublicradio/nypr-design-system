import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';

import { cast } from 'dummy/helpers/cast';

module('Integration | Helper | cast', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('it renders', async function(assert) {
    assert.ok(typeof cast([1234, 'String']) === 'string', 'numbers to string');
    assert.ok(typeof cast([1234, 'string']) === 'string', 'numbers to string case insensitive');

    assert.ok(typeof cast(['1234', 'Number']) === 'number', 'string to number');
    assert.ok(typeof cast(['1234', 'number']) === 'number', 'string to number case insensitive');
  });
});
