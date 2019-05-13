import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, waitUntil } from '@ember/test-helpers';
import { set } from '@ember/object';
import hbs from 'htmlbars-inline-precompile';

import { GALLERY as SLIDES } from 'dummy/controllers/docs/molecules/nypr-m-gallery-lead';
import { inViewport } from 'dummy/helpers/in-viewport';

module('Integration | Component | nypr-o-gallery-overlay', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    const TITLE = 'Foo Gallery';
    const AD_TEXT = 'Bar Ad';

    this.setProperties({
      SLIDES,
      TITLE,
      AD_TEXT,
    });

    await render(hbs`
      <NyprOGalleryOverlay
        @title={{TITLE}}
        @parentRoute={{array 'foo' 'bar'}}
        @slides={{SLIDES}}
        as |index gallery|>

        {{#if (eq index 1)}}
          <gallery.billboard>
            {{AD_TEXT}}
          </gallery.billboard>
        {{/if}}

      </NyprOGalleryOverlay>
    `);

    assert.dom('[data-test-gallery-title]').hasText(TITLE);
    assert.dom('[data-test-gallery-slide]').exists({count: SLIDES.length});
    assert.dom('[data-test-gallery-billboard]').includesText(AD_TEXT);

    const gallery = document.querySelector('[data-test-gallery-overlay]');
    assert.equal(document.body.style.height, `${gallery.getBoundingClientRect().height}px`, 'resizes body to match gallery height');
  });

  test('it scrolls to a slide at the specified zero-based index on render', async function(assert) {
    const TITLE = 'Foo Gallery';
    const ACTIVE_SLIDE = SLIDES.length - 1;

    this.setProperties({
      SLIDES: SLIDES.map((slide, i) => {
        set(slide, 'full', `/test-image${i + 1}.jpeg`);
        return slide;
      }),
      TITLE,
      ACTIVE_SLIDE,
    });

    await render(hbs`
      <NyprOGalleryOverlay
        @title={{TITLE}}
        @parentRoute={{array 'foo' 'bar'}}
        @slides={{SLIDES}}
        @activeSlide={{ACTIVE_SLIDE}}
      />
    `);

    const activeSlide = document.querySelector(`[data-test-gallery-slide="${ACTIVE_SLIDE}"]`);
    // await pauseTest();
    await waitUntil(() => {
      return inViewport(activeSlide);
    }, {timeout: 1000});
    assert.ok(`slide ${ACTIVE_SLIDE + 1} should be visible`);
  });

  test('slides call the gallery `registerSlide` method on insert', async function(assert) {
    this.setProperties({
      registerSlide: slide => assert.ok(slide instanceof HTMLElement),
      SLIDES,
    });
    assert.expect(SLIDES.length);

    await render(hbs`
      <NyprOGalleryOverlay
        @registerSlide={{registerSlide}}
        @slides={{SLIDES}}
      />
    `);
  })
});
