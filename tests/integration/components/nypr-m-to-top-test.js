import { module } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import test from 'ember-sinon-qunit/test-support/test';

module('Integration | Component | nypr-m-to-top', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<NyprMToTop/>`);

    assert.dom('[data-test-to-top]').exists();
  });

  test('it scrolls to the top of the window', async function() {
    this.mock(window)
      .expects('scrollTo')
      .withArgs({top: 0, behavior: 'smooth'});

    await render(hbs`<NyprMToTop/>`);
    await click('[data-test-to-top]');
  });

  test('it scrolls to a given target', async function() {
    await render(hbs`
      <div id="target"/>
      <NyprMToTop @selector='#target'/>
    `);
    let target = document.querySelector('#target');
    let y = target.offsetTop - target.offsetHeight;

    this.mock(window)
      .expects('scrollTo')
      .withArgs({top: y, behavior: 'smooth'});

    await click('[data-test-to-top]');
  });

  test('it scrolls to a given offset', async function() {
    const OFFSET = 500;
    this.set('offset', OFFSET);
    await render(hbs`
      <div id="target"/>
      <NyprMToTop @offset={{offset}} @selector='#target'/>
    `);
    let target = document.querySelector('#target');
    let y = target.offsetTop - (target.offsetHeight + OFFSET);

    this.mock(window)
      .expects('scrollTo')
      .withArgs({top: y, behavior: 'smooth'});

    await click('[data-test-to-top]');
  });
});
