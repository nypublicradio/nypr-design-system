import { module } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import test from 'ember-sinon-qunit/test-support/test';

const GALLERY = [{
  caption: 'This is a slide caption',
  credit: 'Getty',
  thumb: 'https://picsum.photos/100/100?random',
  srcS: 'https://picsum.photos/600/300?random',
  title: 'This is what a slide title looks like',
}, {
  caption: 'This is a slide only a caption; no title or credit',
  thumb: 'https://picsum.photos/100/100?random=1',
  srcS: 'https://picsum.photos/600/300?random=1',
}, {
  title: 'This is a slide with only a title',
  thumb: 'https://picsum.photos/100/100?random=2',
  srcS: 'https://picsum.photos/600/300?random=2',
}, {
  caption: 'This is a slide with no title; just caption & credit',
  credit: 'Foo Bar/AP News',
  thumb: 'https://picsum.photos/100/100?random=3',
  srcS: 'https://picsum.photos/600/300?random=3',
}];

module('Integration | Component | nypr-m-gallery-lead', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('gallery', GALLERY);
    this.set('goToSlide', this.mock('goToSlide is called with the current index when clicking the current slide').once().withArgs(1));
    await render(hbs`<NyprMGalleryLead @slides={{gallery}} @goToSlide={{goToSlide}} />`);

    assert.dom('.c-lead-gallery').exists();
    assert.dom('.c-lead-gallery__thumbs-thumb').exists({count: GALLERY.length + 1}, 'one thumbnail for each image plus the "view all" button');
    assert.dom('figure.o-figure img').hasAttribute('src', GALLERY[0].srcS);
    assert.dom('.c-lead-gallery__thumbs-thumb-text').hasText(`View all ${GALLERY.length}`);

    await click('[data-test-gallery-thumb="1"]');
    assert.dom('figure.o-figure img').hasAttribute('src', GALLERY[1].srcS, 'it changes the active slide when clicking a thumbnail');

    await click('[data-test-gallery-current]');
  });
});
