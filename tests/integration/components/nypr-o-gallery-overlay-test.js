import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, waitUntil } from '@ember/test-helpers';
import { set } from '@ember/object';
import hbs from 'htmlbars-inline-precompile';

import { inViewport } from 'dummy/helpers/in-viewport';

const SLIDES = [{
  caption: 'This is a slide caption',
  credit: 'Getty',
  src: 'https://picsum.photos/600/300?random',
  full: 'https://picsum.photos/600/300?random',
  title: 'This is what a slide title looks like',
}, {
  caption: 'This is a slide only a caption; no title or credit',
  src: 'https://picsum.photos/600/300?random=1',
  full: 'https://picsum.photos/600/300?random=1',
}, {
  title: 'This is a slide with only a title',
  src: 'https://picsum.photos/600/300?random=2',
  full: 'https://picsum.photos/600/300?random=2',
}, {
  caption: 'This is a slide with no title; just caption & credit',
  credit: 'Foo Bar/AP News',
  src: 'https://picsum.photos/600/300?random=3',
  full: 'https://picsum.photos/600/300?random=3',
}];

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
    const galleryHeight = Math.round(gallery.getBoundingClientRect().height);
    assert.equal(galleryHeight, Math.round(parseFloat(gallery.getBoundingClientRect().height)), 'resizes body to match gallery height');
  });

  test('it scrolls to a slide at the specified zero-based index on render', async function(assert) {
    const TITLE = 'Foo Gallery';
    const SLIDE_FOR_INIT = SLIDES.length - 1;

    this.setProperties({
      SLIDES: SLIDES.map((slide, i) => {
        set(slide, 'full', `/test-image${i + 1}.jpeg`);
        return slide;
      }),
      TITLE,
      SLIDE_FOR_INIT,
    });

    await render(hbs`
      <NyprOGalleryOverlay
        @title={{TITLE}}
        @parentRoute={{array 'foo' 'bar'}}
        @slides={{SLIDES}}
        @slideForInit={{SLIDE_FOR_INIT}}
      />
    `);

    const slideForInit = document.querySelector(`[data-test-gallery-slide="${SLIDE_FOR_INIT}"]`);
    // await pauseTest();
    await waitUntil(() => {
      return inViewport(slideForInit);
    }, {timeout: 1000});
    assert.ok(`slide ${SLIDE_FOR_INIT + 1} should be visible`);
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
