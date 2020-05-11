import { compile } from 'ember-source/dist/ember-template-compiler';

export default { title: 'For Developers/Sample Code/Typography' };

export const AllFontStyles = () => compile(`
  <div>
  <h1>Headline One &lt;h1&gt;</h1>
  <h2>Headline Two &lt;h2&gt;</h2>
  <h3>Headline Three &lt;h3&gt;</h3>
  <h4>Headline Four &lt;h4&gt;</h4>
  <h5>Headline Five &lt;h5&gt;</h5>
  <h6>Headline Six &lt;h6&gt;</h6>
  <p>Paragraph &lt;p&gt;</p>
  </div>
`);
