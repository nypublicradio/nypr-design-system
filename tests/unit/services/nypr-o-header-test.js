import { module } from 'qunit';
import { setupTest } from 'ember-qunit';
import test from 'ember-sinon-qunit/test-support/test';

module('Unit | Service | nypr-o-header', function(hooks) {
  setupTest(hooks);

  test('it sets arbitrary instance variables based on UI state', function(assert) {
    let header = this.owner.lookup('component:nypr-o-header');
    let service = this.owner.lookup('service:nypr-o-header');

    // no routing in unit tests
    service.addRule(null, {
      resting: {
        bar: true,
      },
      floating: {
        bar: false,
      },
      all: {
        baz: true,
      }
    });

    assert.ok(header.rules.bar, 'bar should be true under rules namespace');
    assert.ok(header.rules.baz, '`all` rules should be true in both states');

    header.set('outOfViewport', true);

    assert.equal(header.rules.bar, false, 'bar should be false when outOfViewport flips');
    assert.ok(header.rules.baz, '`all` rules should be true in both states');
  });

  test('it does inverted clears', function(assert) {
    let header = this.owner.lookup('component:nypr-o-header');
    let service = this.owner.lookup('service:nypr-o-header');

    service.addRule(null, {
      resting: {
        bar: true,
      },
      floating: {
        baz: true,
      },
      all: {
        foo: true,
      },
    });

    assert.ok(header.rules.bar, 'bar should be true');
    assert.ok(header.rules.foo, 'foo should be true');

    header.set('outOfViewport', true);

    assert.notOk(header.rules.bar, 'should clear keys not included in the current set');
    assert.ok(header.rules.baz);
    assert.ok(header.rules.foo, 'foo should be true');

    header.set('outOfViewport', false);

    assert.ok(header.rules.bar);
    assert.notOk(header.rules.baz);
    assert.ok(header.rules.foo, 'foo should be true');
  });

  test('all key is not required', async function(assert) {
    let header = this.owner.lookup('component:nypr-o-header');
    let service = this.owner.lookup('service:nypr-o-header');

    service.addRule(null, {
      resting: {
        bar: true,
      },
      floating: {
        baz: true,
      },
    });

    assert.ok(header.rules.bar, 'bar should be true');
    header.set('outOfViewport', true);
    assert.ok(header.rules.baz, 'bar should be true');
    header.set('outOfViewport', false);
    assert.ok('can change states without exception');
  });
});
