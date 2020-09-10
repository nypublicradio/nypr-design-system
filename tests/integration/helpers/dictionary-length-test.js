import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';

import { dictionaryLength } from 'dummy/helpers/dictionary-length';

module('Integration | Helper | dictionary-length', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('dictionary', { 'wnyc-fm939': {}, 'wnyc-am820': {} });
    assert.equal(dictionaryLength([ this.get('dictionary') ] ), 2);

    assert.equal(dictionaryLength( null ), 0);
    assert.equal(dictionaryLength([ undefined ] ), 0);
  });
});
