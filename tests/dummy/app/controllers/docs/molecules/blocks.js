import Controller from '@ember/controller';

const BLOCKS = [{
  title: 'Mayor Gives Press Conference',
  thumbnail: '/test-image1.jpeg',
  section: 'News',
  summary: 'The mayor answered questions for 37 seconds before leaving the podium.',
  author: 'Jen Chung',
  commentCount: 100,
}, {
  title: 'New Subway Station opens in Times Square',
  thumbnail: '/test-image2.jpeg',
  section: 'News',
  summary: 'Nobody asked for it but they built it anyway.',
  author: 'Beth Fertig',
  commentCount: 2,
}, {
  title: 'Statue in Central Park Begs New Yorkers to Look Away',
  thumbnail: '/test-image3.jpeg',
  section: 'Arts & Entertainment',
  summary: "It's not grotesque, but it's also definitely not beautiful",
  author: "Jim O'Grady",
  commentCount: 0,
}];

export default Controller.extend({
  BLOCKS,
});
