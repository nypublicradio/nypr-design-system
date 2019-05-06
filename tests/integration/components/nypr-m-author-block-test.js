import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | nypr-m-author-block', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    const AUTHOR = {
      name: 'Jen Chung',
      title: 'Executive editor and co-founder',
      image: '/images/staff/jen-chung.jpg',
      bio: "Jen, a New Jersey-born New Yorker, edits Gothamist. She attended Columbia University, likes learning about NYC infrastructure (the subway system's intricacies, how engineers design skyscrapers), and hopes that one day a NYC zoo will have pandas. Her favorite TV shows are usually crime procedurals set in New York City, preferably with a chung-chung sound effect. She also yells at cars for not obeying stop signs.",
      contact: {
        twitter: 'jenchung',
        email: 'jen@gothamist.com',
      },
    };
    this.set('author', AUTHOR);

    await render(hbs`<NyprMAuthorBlock @author={{author}}/>`);

    assert.dom('[data-test-author-name]').hasText(AUTHOR.name);
    assert.dom('[data-test-author-title]').hasText(AUTHOR.title);
    assert.dom('[data-test-author-media]').hasAttribute('src', AUTHOR.image);
    assert.dom('[data-test-author-bio]').hasText(AUTHOR.bio);
  });
});
