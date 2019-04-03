import moment from 'moment';

import { set } from '@ember/object';
import Controller from '@ember/controller';

import { ITEMS } from './nypr-o-related-content';

const GALLERY = [{
  caption: 'This is a slide caption',
  credit: 'Getty',
  src: 'https://picsum.photos/600?random',
  title: 'This is what a slide title looks like',
}, {
  caption: 'This is another slide caption without a credit',
  src: 'https://picsum.photos/600?random=1'
}];

const STORY = {
  breadcrumbs: [{
    label: 'News'
  }],
  title: 'Very Long Title',
  authors: [{
    name: 'Jen Chung',
    url: '/authors/jen-chung'
  }, {
    name: 'Brian Lehrer',
    url: '/authors/brian-lehrer'
  }],
  publishDate: moment().format(),
  leadImage: {
    src: 'https://picsum.photos/600',
    caption: 'An essential part of the story.',
    credit: 'Getty Images'
  },
  relatedItems: ITEMS,
  gallery: GALLERY,
};

export default Controller.extend({
  STORY,

  actions: {
    toggleLede() {
      if (STORY.gallery) {
        set(STORY, 'gallery', null);
      } else {
        set(STORY, 'gallery', GALLERY);
      }
    }
  }
});
