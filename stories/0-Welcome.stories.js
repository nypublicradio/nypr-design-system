/* eslint-disable import/extensions */
import hbs from 'htmlbars-inline-precompile';
import { linkTo } from '@storybook/addon-links';

export default {
  title: 'Welcome',
};

export const toStorybook = () => ({
  template: hbs`
  <div class="c-welcome-page">
  <div class="c-welcome-page__logo">
    <img src="https://nypr.southleft.com/images/radial-assets/radial-logo.svg" alt="Radial Design System">
    <a href="#start" class="c-welcome-page__start js-smooth-scroll"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><title>Dashed Arrow Icon</title><polygon points="18.74 3.12 29.96 14 18.74 24.88 18.74 16.72 15 16.72 15 11.28 18.74 11.28 18.74 3.12"/><rect x="8.2" y="11.28" width="5.44" height="5.44"/><rect x="4.12" y="11.28" width="2.72" height="5.44"/><rect x="0.04" y="11.28" width="2.72" height="5.44"/></svg>
</a>
  </div>
</div>

<div class="c-style-guide" id="start">
  <div class="l-container l-wrap u-spacing--quad">
    <section class="o-sg-section o-sg-section__colors u-spacing--quad">
  <div class="u-spacing--double">
    <header class="o-sg-section__header l-container--content u-spacing">
      <h2 class="o-sg-section__heading">Theme Colors</h2>
      <p>No bullshit, scrappy, funny. Nothing is too lowbrow or weird, reader supported, Batman justice, for Foodies. Longer/Better description TBD</p>
    </header>
    <div class="o-sg-section__content u-spacing--and-half l-container l-container--14col">
      <div class="l-grid l-grid--3up">
                  <div class="c-swatch">
            <div class="c-swatch__color" style="background-color: #de5e36">
              <div class="c-swatch-a11y">
                <div class="c-swatch-a11y__item">
                  <span class="c-swatch-a11y__letter">A</span>
                  <span class="c-swatch-a11y__check"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><title>Check Icon</title><path d="M26.08,3.56l-2,1.95L10.61,19l-5-4L3.47,13.29,0,17.62l2.17,1.73L9.1,24.9,11,26.44l1.77-1.76L28.05,9.43,30,7.48Z"/></svg>
</span>
                </div>
                <div class="c-swatch-a11y__item">
                  <span class="c-swatch-a11y__letter c-swatch-a11y__letter--bg" style="color: #de5e36">A</span>
                  <span class="c-swatch-a11y__check"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><title>Check Icon</title><path d="M26.08,3.56l-2,1.95L10.61,19l-5-4L3.47,13.29,0,17.62l2.17,1.73L9.1,24.9,11,26.44l1.77-1.76L28.05,9.43,30,7.48Z"/></svg>
</span>
                </div>
              </div>
            </div>
            <div class="c-swatch__details">
              <p>Primary</p>
              <p>reddish-orange</p>
              <p>#de5e36</p>
            </div>
          </div>
                  <div class="c-swatch">
            <div class="c-swatch__color" style="background-color: #9c1e14">
              <div class="c-swatch-a11y">
                <div class="c-swatch-a11y__item">
                  <span class="c-swatch-a11y__letter">A</span>
                  <span class="c-swatch-a11y__check"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><title>Check Icon</title><path d="M26.08,3.56l-2,1.95L10.61,19l-5-4L3.47,13.29,0,17.62l2.17,1.73L9.1,24.9,11,26.44l1.77-1.76L28.05,9.43,30,7.48Z"/></svg>
</span>
                </div>
                <div class="c-swatch-a11y__item">
                  <span class="c-swatch-a11y__letter c-swatch-a11y__letter--bg" style="color: #9c1e14">A</span>
                  <span class="c-swatch-a11y__check"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><title>Check Icon</title><path d="M26.08,3.56l-2,1.95L10.61,19l-5-4L3.47,13.29,0,17.62l2.17,1.73L9.1,24.9,11,26.44l1.77-1.76L28.05,9.43,30,7.48Z"/></svg>
</span>
                </div>
              </div>
            </div>
            <div class="c-swatch__details">
              <p>Secondary</p>
              <p>brick-red</p>
              <p>#9c1e14</p>
            </div>
          </div>
                  <div class="c-swatch">
            <div class="c-swatch__color" style="background-color: #de1e3d">
              <div class="c-swatch-a11y">
                <div class="c-swatch-a11y__item">
                  <span class="c-swatch-a11y__letter">A</span>
                  <span class="c-swatch-a11y__check"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><title>Check Icon</title><path d="M26.08,3.56l-2,1.95L10.61,19l-5-4L3.47,13.29,0,17.62l2.17,1.73L9.1,24.9,11,26.44l1.77-1.76L28.05,9.43,30,7.48Z"/></svg>
</span>
                </div>
                <div class="c-swatch-a11y__item">
                  <span class="c-swatch-a11y__letter c-swatch-a11y__letter--bg" style="color: #de1e3d">A</span>
                  <span class="c-swatch-a11y__check"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><title>Check Icon</title><path d="M26.08,3.56l-2,1.95L10.61,19l-5-4L3.47,13.29,0,17.62l2.17,1.73L9.1,24.9,11,26.44l1.77-1.76L28.05,9.43,30,7.48Z"/></svg>
</span>
                </div>
              </div>
            </div>
            <div class="c-swatch__details">
              <p>Tertiary</p>
              <p>fireengine-red / WNYC Red</p>
              <p>#de1e3d</p>
            </div>
          </div>
              </div>
      <div class="l-grid l-grid--4up">
                  <div class="c-swatch">
            <div class="c-swatch__color" style="background-color: #ffc400"></div>
            <div class="c-swatch__details">
              <p>Quaternary</p>
              <p>banana-yellow</p>
              <p>#ffc400</p>
            </div>
          </div>
                  <div class="c-swatch">
            <div class="c-swatch__color" style="background-color: #e3d54a"></div>
            <div class="c-swatch__details">
              <p>Quinary</p>
              <p>taxi-cab-yellow</p>
              <p>#e3d54a</p>
            </div>
          </div>
                  <div class="c-swatch">
            <div class="c-swatch__color" style="background-color: #244c84"></div>
            <div class="c-swatch__details">
              <p>Senary</p>
              <p>denim-blue</p>
              <p>#244c84</p>
            </div>
          </div>
                  <div class="c-swatch">
            <div class="c-swatch__color" style="background-color: #924db1"></div>
            <div class="c-swatch__details">
              <p>sponsored</p>
              <p></p>
              <p>#924db1</p>
            </div>
          </div>
                  <div class="c-swatch">
            <div class="c-swatch__color" style="background-color: #939393"></div>
            <div class="c-swatch__details">
              <p>Septenary</p>
              <p>brown-grey</p>
              <p>#939393</p>
            </div>
          </div>
                  <div class="c-swatch">
            <div class="c-swatch__color" style="background-color: #f0eeea"></div>
            <div class="c-swatch__details">
              <p>Octonary</p>
              <p>dirty-salmon</p>
              <p>#f0eeea</p>
            </div>
          </div>
              </div>
    </div>
  </div>
  <div class="o-sg-section__content u-spacing--and-half l-container--content">
    <h3 class="o-sg-section__heading"><strong>Neutral Colors</strong></h3>
    <div class="c-color-bars">
              <div class="c-color-bar" style="background-color: #ffffff">
          <p >white</p>
          <p >#ffffff</p>
        </div>
              <div class="c-color-bar" style="background-color: #f3f3f3">
          <p >grey-light</p>
          <p >#f3f3f3</p>
        </div>
              <div class="c-color-bar" style="background-color: #afafaf">
          <p style="color: white;">grey</p>
          <p style="color: white;">#afafaf</p>
        </div>
              <div class="c-color-bar" style="background-color: #333333">
          <p style="color: white;">grey-dark</p>
          <p style="color: white;">#333333</p>
        </div>
              <div class="c-color-bar" style="background-color: #000000">
          <p style="color: white;">black</p>
          <p style="color: white;">#000000</p>
        </div>
          </div>
  </div>
  <div class="o-sg-section__content u-spacing--and-half l-container--content">
    <h3 class="o-sg-section__heading"><strong>Default Colors</strong></h3>
    <div class="c-color-bars">
              <div class="c-color-bar" style="background-color: #9c1e14">
          <p style="color: white;">error / brick-red</p>
          <p style="color: white;">#9c1e14</p>
        </div>
              <div class="c-color-bar" style="background-color: #089e00">
          <p style="color: white;">valid</p>
          <p style="color: white;">#089e00</p>
        </div>
              <div class="c-color-bar" style="background-color: #fff664">
          <p >warning</p>
          <p >#fff664</p>
        </div>
              <div class="c-color-bar" style="background-color: #000db5">
          <p style="color: white;">information</p>
          <p style="color: white;">#000db5</p>
        </div>
              <div class="c-color-bar" style="background-color: rgba(0, 0, 0, 0.8)">
          <p style="color: white;">overlay</p>
          <p style="color: white;">rgba(0, 0, 0, 0.8)</p>
        </div>
          </div>
  </div>
</section>
    <hr>
    <section class="o-sg-section o-sg-section__colors u-spacing--quad">
  <div class="u-spacing--double">
    <header class="o-sg-section__header l-container--content u-spacing">
      <h2 class="o-sg-section__heading">Typography</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </header>
    <div class="o-sg-section__content u-spacing--and-half l-container l-container--14col">
      <div class="l-grid l-grid--3up">
                  <div class="c-font-block o-3d-heading">
            <div class="c-font-block__inner">
              <div class="c-font-block__content">
                <div class="c-font-block__content--top u-spacing">
                  <span class="u-font--secondary-style u-font--xxs">Primary Font</span>
                  <div class="c-font-block__free-type u-font--primary">Pragati Narrow</div>
                </div>
                <div class="c-font-block__content--bottom">
                  <span class="u-font--xs">Regular, Bold <br> Sentence Case</span>
                </div>
              </div>
              <div class="c-font-block__letter u-font--primary">P</div>
            </div>
          </div>
                  <div class="c-font-block o-3d-heading">
            <div class="c-font-block__inner">
              <div class="c-font-block__content">
                <div class="c-font-block__content--top u-spacing">
                  <span class="u-font--secondary-style u-font--xxs">Secondary Font</span>
                  <div class="c-font-block__free-type u-font--tertiary">Barlow</div>
                </div>
                <div class="c-font-block__content--bottom">
                  <span class="u-font--xs">Regular, Bold, Italics <br> Sentence Case</span>
                </div>
              </div>
              <div class="c-font-block__letter u-font--tertiary">B</div>
            </div>
          </div>
                  <div class="c-font-block o-3d-heading">
            <div class="c-font-block__inner">
              <div class="c-font-block__content">
                <div class="c-font-block__content--top u-spacing">
                  <span class="u-font--secondary-style u-font--xxs">Tertiary Font</span>
                  <div class="c-font-block__free-type u-font--secondary">B612 <br> MONO</div>
                </div>
                <div class="c-font-block__content--bottom">
                  <span class="u-font--xs">Regular, Bold <br> Upper Case</span>
                </div>
              </div>
              <div class="c-font-block__letter u-font--secondary">B</div>
            </div>
          </div>
              </div>
    </div>
  </div>
</section>
  </div>
</div>
  `,
  context: {
    onClick: linkTo('Button'),
  },
});

toStorybook.story = {
  name: 'to Radial',
};
