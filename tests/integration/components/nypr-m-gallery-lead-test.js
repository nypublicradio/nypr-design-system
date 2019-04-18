import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

const GALLERY = [{
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

module('Integration | Component | nypr-m-gallery-lead', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('gallery', GALLERY);
    await render(hbs`<NyprMGalleryLead @slides={{gallery}}/>`);

    assert.dom('.c-lead-gallery').exists();
    assert.dom('.c-lead-gallery__thumbs-thumb').exists({count: GALLERY.length + 1}, 'one thumbnail for each image plus the "view all" button');
    assert.dom('figure.o-figure img').hasAttribute('src', GALLERY[0].src);
    assert.dom('.c-lead-gallery__thumbs-thumb-text').hasText(`View all ${GALLERY.length}`);

    await click('[data-test-gallery-thumb="1"]');
    assert.dom('figure.o-figure img').hasAttribute('src', GALLERY[1].src);
  });
});
