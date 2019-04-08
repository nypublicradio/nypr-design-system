import Controller from '@ember/controller';

const DONATE_URL= "https://pledge3.wnyc.org/donate/gothamist/onestep/?utm_medium=partnersite&utm_source=gothamist&utm_campaign=brandheader";

const PRIMARY_NAV_ITEMS = [{
  title: 'News',
  url: '/news',
}, {
  title: 'Arts & Entertainment',
  url: '/arts-entertainment',
}, {
  title: 'Food',
  url: '/food',
}, {
  title: 'Popular',
  url: '/popular',
}];

const SECONDARY_NAV_ITEMS = [{
  title: 'Advertising',
  url: '/advertising'
}, {
  title: 'Contact Us',
  url: '/contact',
}, {
  title: 'Newsetter',
  url: '/newseltter',
}, {
  title: 'RSS Feed',
  url: '/feed.xml',
}, {
  title: 'Staff',
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
