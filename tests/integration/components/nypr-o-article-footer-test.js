import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | nypr-o-article-footer', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    const TAGS = ['foo', 'bar'];
    const CONTACT = 'contact us';
    const DONATE_MESSAGE = 'Donate already';
    const DONATE_CTA = 'donate';

    this.setProperties({
      tags: TAGS,
      contact: CONTACT,
      donateMessage: DONATE_MESSAGE,
      donateCta: DONATE_CTA,
    });

    await render(hbs`<NyprOArticleFooter/>`);

    assert.dom('.c-article__footer').exists();

    await render(hbs`
      <NyprOArticleFooter as |footer|>
        <footer.tags @tags={{tags}} as |Tag tag|>
          <Tag @url='http://example.com/tags/{{tag}}'/>
        </footer.tags>
        <footer.contact>
          {{contact}}
        </footer.contact>
        <footer.donate
           @message={{donateMessage}}
           @linkText={{donateCta}}
           @linkUrl='https://example.com/pledge'
        />

        <!-- <footer.comments /> -->
      </NyprOArticleFooter>
    `);

    assert.dom('.o-tag').exists({count: 2});
    assert.dom('.c-article__contact').hasText(CONTACT);
    assert.dom('[data-test-donate-message]').hasText(DONATE_MESSAGE);
    assert.dom('[data-test-article-footer]');
  });
});
