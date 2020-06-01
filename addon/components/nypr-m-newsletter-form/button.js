import Component from '@ember/component';
import layout from '../../templates/components/nypr-m-newsletter-form/button';

export default Component.extend({
  layout,

  classNames: ['o-button', 'c-newsletter-form__button', 'gtm__click-tracking'],
  tagName: 'button',
  attributeBindings: [
    'type',
    'disabled',
    'data-test-newsletter-submit',
    'data-category',
    'data-action'
  ],
  type: 'submit',
  'data-test-newsletter-submit': true,
  'data-category': 'Click Tracking',
  'data-action': 'Newsletter Signup'
});
