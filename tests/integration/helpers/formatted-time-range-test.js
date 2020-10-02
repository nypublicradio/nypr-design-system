import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | formatted-time-range', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('startTime', 'Tue Sep 29 2020 21:00:00 GMT-0400 (Eastern Daylight Time)');
    this.set('endTime', 'Tue Sep 29 2020 22:00:00 GMT-0400 (Eastern Daylight Time)');

    await render(hbs`{{formatted-time-range startTime endTime}}`);

    assert.equal(this.element.textContent.trim(), '9:00 PM - 10:00 PM');
  });

  test('it returns empty string when parameters are undefined', async function(assert) {
    this.set('startTime', 'Tue Sep 29 2020 21:00:00 GMT-0400 (Eastern Daylight Time)');
    this.set('endTime', undefined);

    await render(hbs`{{formatted-time-range startTime endTime}}`);

    assert.equal(this.element.textContent.trim(), '');

    this.set('startTime', undefined);
    this.set('endTime', 'Tue Sep 29 2020 21:00:00 GMT-0400 (Eastern Daylight Time)');

    await render(hbs`{{formatted-time-range startTime endTime}}`);

    assert.equal(this.element.textContent.trim(), '');
  });

  test('it returns an empty string when the number of parameters is wrong', async function(assert) {
    this.set('startTime', 'Tue Sep 29 2020 21:00:00 GMT-0400 (Eastern Daylight Time)');
    this.set('endTime', 'Tue Sep 29 2020 21:00:00 GMT-0400 (Eastern Daylight Time)');
    this.set('time', 'Tue Sep 29 2020 21:00:00 GMT-0400 (Eastern Daylight Time)');

    await render(hbs`{{formatted-time-range startTime endTime time}}`);

    assert.equal(this.element.textContent.trim(), '');

    await render(hbs`{{formatted-time-range startTime}}`);

    assert.equal(this.element.textContent.trim(), '');

    await render(hbs`{{formatted-time-range}}`);

    assert.equal(this.element.textContent.trim(), '');
  });
});
