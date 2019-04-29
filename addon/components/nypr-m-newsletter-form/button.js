import Component from '@ember/component';
import layout from '../../templates/components/nypr-m-newsletter-form/button';

export default Component.extend({
  layout,

  classNames: ['o-button', 'c-newsletter-form__button'],
  tagName: 'button',
  attributeBindings: [
    'type',
    'disabled',
    'data-test-newsletter-submit',
  ],
  type: 'submit',
  'data-test-newsletter-submit': true,
});
