import Controller from '@ember/controller';

// BEGIN-SNIPPET byline-choices.js
const IN_HOUSE = [{
  name: 'Jen Chung',
  url: '/authors/jen-chung'
}, {
  name: 'Brian Lehrer',
  url: '/authors/brian-lehrer'
}, {
  name: 'Beth Fertig',
  url: '/authors/beth-fertig',
}, {
  name: 'Nancy Solomon',
  url: '/authors/nancy-solomon',
}];

const CONTRIBUTORS = [{
  name: 'Andrea Bernstein',
  url: '/authors/andrea-bernstein',
  org: {
    name: 'WNYC',
    url: 'wnyc.org',
  }
}, {
  name: 'Ariana Tobin',
  url: '/authors/ariana-tobin',
  org: {
    name: 'ProPublica',
    url: 'propublica.org',
  }
}, {
  name: 'Ilya Marritz',
  url: '/authors/ilya-marritz',
  org: {
    name: 'BBC',
    url: 'bbc.co.uk'
  }
}, {
  name: 'Jen Carlson',
  url: '/authors/jen-carlson',
  org: {
    name: 'Gothamist',
    url: 'gothamist.com'
  }
}];

const SPONSOR = {
  name: 'BMW',
  url: 'https://example.com/bmw',
};
// END-SNIPPET

export default Controller.extend({
  IN_HOUSE,
  CONTRIBUTORS,
  SPONSOR,

  authors: IN_HOUSE,

  actions: {
    setAuthors({target: { value }}) {
      let authors;
      let [, type, amt] = value.match(/([^-]+)-(\d)/);
      amt = Number(amt);

      switch(type) {
        case 'inhouse':
          authors = IN_HOUSE.slice(0, amt);
          break;
        case 'contrib':
          authors = CONTRIBUTORS.slice(0, amt);
          break;
      }

      this.setProperties({
        authors,
        sponsor: null,
      });
    },
    chooseSponsor() {
      this.setProperties({
        sponsor: SPONSOR,
        authors: null,
      });

    }
  }
});
