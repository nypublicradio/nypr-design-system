import Controller from '@ember/controller';

const DONATE_URL= "https://pledge3.wnyc.org/donate/gothamist/onestep/?utm_medium=partnersite&utm_source=gothamist&utm_campaign=brandheader";

const PRIMARY_NAV_ITEMS = [{
  text: 'News',
  url: '/news',
}, {
  text: 'Arts & Entertainment',
  url: '/arts-entertainment',
}, {
  text: 'Food',
  url: '/food',
}, {
  text: 'Popular',
  url: '/popular',
}];

const SECONDARY_NAV_ITEMS = [{
  text: 'Advertising',
  url: '/advertising'
}, {
  text: 'Contact Us',
  url: '/contact',
}, {
  text: 'Newsetter',
  url: '/newseltter',
}, {
  text: 'RSS Feed',
  url: '/feed.xml',
}, {
  text: 'Staff',
  url: '/staff',
}];

const STORY = {
  title: 'Mega-Guide: All The Food And Drink At The Huge Hudson Yards Mall',
};

const GALLERY = {

};

export default Controller.extend({
  DONATE_URL,
  PRIMARY_NAV_ITEMS,
  SECONDARY_NAV_ITEMS,

  actions: {
    setHeader(val) {
      switch(val) {
        case 'A':
          this.setProperties({STORY, GALLERY: null});
          break;
        case 'G':
          this.setProperties({STORY: null, GALLERY});
          break;
        default:
          this.setProperties({STORY: null, GALLERY: null});
      }
    }
  }
});
