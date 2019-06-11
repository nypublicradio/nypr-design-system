import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | nypr-m-block', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<NyprMBlock/>`);
    assert.dom('.c-block').exists();

    await render(hbs`<NyprMBlock @orientation='h'/>`);
    assert.dom('.c-block--horizontal').exists('`orientation` controls a class');

    await render(hbs`<NyprMBlock @orientation='h' @size='l'/>`);
    assert.dom('.c-block--horizontal.c-block--horizontal--large').exists('`size` controls a class');

    await render(hbs`<NyprMBlock @orientation='h' @size='l'/>`);
  });

  test('icons', async function(assert) {
    await render(hbs`
      <NyprMBlock as |block|>
        <block.object as |o|>
          <o.title @h2 @hasGallery={{true}}>
            Foo
          </o.title>
        </block.object>
      </NyprMBlock>
    `);

    assert.dom('.c-block__title--is-gallery').exists();

    await render(hbs`
      <NyprMBlock as |block|>
        <block.object as |o|>
          <o.title @h2 @hasVideo={{true}}>
            Foo
          </o.title>
        </block.object>
      </NyprMBlock>
    `);

    assert.dom('.c-block__title--is-video').exists();

    await render(hbs`
      <NyprMBlock as |block|>
        <block.object as |o|>
          <o.title @h2 @hasAudio={{true}}>
            Foo
          </o.title>
        </block.object>
      </NyprMBlock>
    `);

    assert.dom('.c-block__title--is-audio').exists();
  })
});
