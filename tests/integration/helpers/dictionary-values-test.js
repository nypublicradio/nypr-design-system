import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';

import { dictionaryValues } from 'dummy/helpers/dictionary-values';

module('Integration | Helper | dictionary-values', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    this.set('dictionary', { 'wnyc-fm939': {}, 'wnyc-am820': {} });
    assert.equal(dictionaryValues([ this.dictionary ] ).length, 2);

    assert.equal(dictionaryValues( null ).length, 0);
    assert.equal(dictionaryValues([ undefined ] ).length, 0);
  });
});
