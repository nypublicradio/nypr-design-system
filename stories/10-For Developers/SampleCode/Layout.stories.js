import {compile} from 'ember-source/dist/ember-template-compiler';

export default {title: 'For Developers/Sample Code/Layouts'};

export const GridSystem = () => compile(`
<div class="u-padding">
  <h1 class="u-space--bottom">Grid System</h1>
  <div class="l-grid l-grid--2up u-space--bottom">
    <div class="u-background-color--gray--light">Two Column</div>
    <div class="u-background-color--gray--light">Two Column</div>
  </div>
  <div class="l-grid l-grid--3up u-space--bottom">
    <div class="u-background-color--gray--light">Three Column</div>
    <div class="u-background-color--gray--light">Three Column</div>
    <div class="u-background-color--gray--light">Three Column</div>
  </div>
  <div class="l-grid l-grid--4up u-space--bottom">
    <div class="u-background-color--gray--light">Four Column</div>
    <div class="u-background-color--gray--light">Four Column</div>
    <div class="u-background-color--gray--light">Four Column</div>
    <div class="u-background-color--gray--light">Four Column</div>
  </div>
  <div class="l-grid l-grid--5up u-space--bottom">
    <div class="u-background-color--gray--light">Five Column</div>
    <div class="u-background-color--gray--light">Five Column</div>
    <div class="u-background-color--gray--light">Five Column</div>
    <div class="u-background-color--gray--light">Five Column</div>
    <div class="u-background-color--gray--light">Five Column</div>
  </div>
  <div class="l-grid l-grid--2x3 u-space--bottom">
    <div class="u-background-color--gray--light">1/3 Column</div>
    <div class="u-background-color--gray--light">2/3 Column</div>
  </div>
  <div class="l-grid l-grid--3x2 u-space--bottom">
    <div class="u-background-color--gray--light">2/3 Column</div>
    <div class="u-background-color--gray--light">1/3 Column</div>
  </div>
  <div class="l-grid l-grid--1x4 u-space--bottom">
    <div class="u-background-color--gray--light">1/4 Column</div>
    <div class="u-background-color--gray--light">3/4 Column</div>
  </div>
  <div class="l-grid l-grid--4x1 l-grid--full-width-small u-space--bottom">
    <div class="u-background-color--gray--light">4/4 Column</div>
    <div class="u-background-color--gray--light">1/4 Column</div>
  </div>
  <h2 class="u-space--bottom">With large gutters:</h2>
  <div class="l-grid l-grid--2up l-grid--large-gutters u-space--bottom">
    <div class="u-background-color--gray--light">Two Column</div>
    <div class="u-background-color--gray--light">Two Column</div>
  </div>
  <h2 class="u-space--bottom">With no gutters:</h2>
  <div class="l-grid l-grid--no-gutters l-grid--2up u-space--bottom">
    <div class="u-background-color--gray--light">Two Column</div>
    <div class="u-background-color--gray--light">Two Column</div>
  </div>
  <h2 class="u-space--bottom">Reordering:</h2>
  <div class="l-grid l-grid--2up u-space--bottom">
    <div class="u-background-color--gray--light l-grid--order-1-large">Second on small breakpoint, first elsewhere</div>
    <div class="u-background-color--gray--light l-grid--order-2-large">First on small breakpoint, second elsewhere</div>
  </div>
  <h2 class="u-space--bottom">Vertical Alignment:</h2>
  <div class="l-grid l-grid--2up l-grid--top u-space--bottom">
    <div class="u-background-color--gray--light"><img src="https://via.placeholder.com/150x150" alt="placeholder image"/></div>
    <div class="u-background-color--gray--light"><p>top</p></div>
  </div>
  <div class="l-grid l-grid--2up l-grid--middle u-space--bottom">
    <div class="u-background-color--gray--light"><img src="https://via.placeholder.com/150x150" alt="placeholder image"/></div>
    <div class="u-background-color--gray--light"><p>middle</p></div>
  </div>
  <div class="l-grid l-grid--2up l-grid--bottom u-space--bottom">
    <div class="u-background-color--gray--light"><img src="https://via.placeholder.com/150x150" alt="placeholder image"/></div>
    <div class="u-background-color--gray--light"><p>bottom</p></div>
  </div>
</div>
`);

export const RightRail = () => compile(`
<div class="u-padding">
  <h1 class="u-space--bottom">Right Rail</h1>
  <div class="l-grid l-grid--right-rail u-space--bottom">
    <div class="l-grid--order-1-large u-background-color--gray--light">
      <p>Not a typical layout, this is used whenever a traditional right-rail is needed to only show ADs.</p>
    </div>
    <div class="l-grid--order-2-large">
      <img src="https://via.placeholder.com/300x300?text=300x300" alt="placeholder image"/>
    </div>
  </div>
</div>
`);

export const FourBySix = () => compile(`
<div class="u-padding">
  <h1 class="u-space--bottom">4x6 Two Column
</h1>
  <div class="l-grid l-grid--2x3 l-grid--middle u-space--bottom">
    <div><img src="https://via.placeholder.com/768x568?text=image" alt="placeholder image"/></div>
    <div><p>Similar to a card, this layout is used to show a group or piece of content where one element has prominence. This can be used as a promotional unit showcasing an image, button/forms, and text, or can be used to support a more complex card grid. On mobile, 4x6 layouts will stack left over right.</p></div>
  </div>
</div>
`);

export const SixBySix = () => compile(`
<div class="u-padding">
  <h1 class="u-space--bottom">6x6 Two Column
</h1>
  <div class="l-grid l-grid--2up l-grid--middle u-space--bottom">
    <div class="u-space--bottom">
      <img class="u-space--bottom" src="https://via.placeholder.com/768x400?text=image" alt="placeholder image"/>
      <p>This layout is used when two items or groups of items are given equal horizonal weight. On mobile, 6x6 layouts will stack left over right.</p>
    </div>
    <div class="u-space--bottom">
      <img class="u-space--bottom" src="https://via.placeholder.com/768x400?text=image" alt="placeholder image"/>
      <p>This layout is used when two items or groups of items are given equal horizonal weight. On mobile, 6x6 layouts will stack left over right.</p>
    </div>
  </div>
</div>
`);

export const HorizontalCard = () => compile(`
<div class="u-padding">
  <h1 class="u-space--bottom">Horizontal Card</h1>
  <div class="l-grid l-grid--1x4 l-grid--middle u-space--bottom">
    <div><img src="https://via.placeholder.com/350x250" alt="placeholder image"/></div>
    <div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequatur ipsa quam velit. A adipisci architecto consequatur dolores eligendi exercitationem minima natus non quae quaerat, quas quia reprehenderit sapiente voluptatum.</p>
    </div>
  </div>
</div>
`);
