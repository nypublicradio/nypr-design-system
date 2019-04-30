import Controller from '@ember/controller';

const BLOCKS = [{
  title: 'Mayor Gives Press Conference',
  thumbnail: 'https://picsum.photos/id/237/600/400',
  section: 'News',
  summary: 'The mayor answered questions for 37 seconds before leaving the podium.',
  author: 'Jen Chung',
  commentCount: 100,
}, {
  title: 'New Subway Station opens in Times Square',
  thumbnail: 'https://picsum.photos/id/238/600/400',
  section: 'News',
  summary: 'Nobody asked for it but they built it anyway.',
  author: 'Beth Fertig',
  commentCount: 2,
}, {
  title: 'Statue in Central Park Begs New Yorkers to Look Away',
  thumbnail: 'https://picsum.photos/id/239/600/400',
  section: 'Arts & Entertainment',
  summary: "It's not grotesque, but it's also definitely not beautiful",
  author: "Jim O'Grady",
  commentCount: 0,
}];

export default Controller.extend({
  BLOCKS,
});
