import moment from 'moment';

import Controller from '@ember/controller';

const STORY = {
  breadcrumbs: [{
    label: 'News'
  }],
  gallery: [{
    caption: 'foo',
    url: '/images/1'
  }, {
    caption: 'bar',
    url: '/images/2'
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
}

export default Controller.extend({
  STORY,
});
