import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | organism/whats-on/episode-content', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders with segment or episode title(s)', async function(assert) {
    // todo: add segment tests when segments become available
    await render(hbs`<Organism::WhatsOn::EpisodeContent @description='<p>Your morning companion from NPR and the WNYC Newsroom, with world news, local features, and weather updates.'/>`);
    assert.dom('.whats-on-episode-description-text').hasText('Your morning companion from NPR and the WNYC Newsroom, with world news, local features, and weather updates.');
  });
});
