import hbs from 'htmlbars-inline-precompile';

export default {
  title: 'Components/<%= type %>/<%= title %>',
  component: '<%= dasherizedModuleName %>',
};

export const all = () => ({
  template: hbs`
    <<%= classifiedModuleName %> />
    <<%= classifiedModuleName %> />
  `
});

export const variant1 = () => ({
  template: hbs`
    <<%= classifiedModuleName %> />
  `
});

export const variant2 = () => ({
  template: hbs`
    <<%= classifiedModuleName %> />
  `
});