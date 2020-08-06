import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | footer', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`
    <Footer as |footer|>
      <footer.logo>
        <Icon @icon='wnyc/logo' @title='logo' />
      </footer.logo>

      <footer.slogan>
        <p>
          Listener-supported WNYC is the home for independent journalism and courageous conversation on air and online. Broadcasting live from New York City on 93.9 FM and AM 820 and available online and on the go.
        </p>
      </footer.slogan>

      <footer.social>
        <NyprMShareTools @label='Social text here!' as |share|>
          <share.link @service='facebook' @username='WNYC'/>
          <share.link @service='twitter' @username='WNYC' />
          <share.link @service='instagram' @username='WNYC' />
        </NyprMShareTools>
      </footer.social>

      <footer.primaryNav @navItems={{model.primaryNav}}/>
      <footer.secondaryNav @subheader="Subheader 1" @navItems={{model.secondaryNav}}/>
      <footer.tertiaryNav @subheader="Subheader 2" @navItems={{model.secondaryNav}}/>
    </Footer>
    `);

    assert.dom('.c-main-footer').exists({count: 1});
  });
});
