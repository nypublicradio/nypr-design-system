import Controller from '@ember/controller';

// BEGIN-SNIPPET nypr-card-story.js
const story = {
  title: "Greatest Story Ever",
  body: "Once upon a time...",
  thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpacoLZV4jQX5AB6eXpWt5wjmgXcj6nHmPlDZfmf4qGl4Y5-TO",
};
// END-SNIPPET

export default Controller.extend({
  story,
});
