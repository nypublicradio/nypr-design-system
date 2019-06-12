import Component from '@ember/component';
import { computed } from '@ember/object';
import { collect } from '@ember/object/computed';
import layout from '../../templates/components/nypr-m-block/title';

/**
  Block title markup

  @class nypr-m-block/title
  @yield {Block} block
*/
export default Component.extend({
  layout,
  tagName: '',

  /**
    Specify an `<h2/>` tag. Can be passed without a value:
    ```hbs
    <NyprMBlock as |block|>
      <block.title @h2>
        Foo Title
      </block.tltle>
    </NyprMBlock>
    ```

    @argument h2
    @type {Boolean}
  */

  /**
    Specify an `<h3/>` tag. Can be passed without a value:
    ```hbs
    <NyprMBlock as |block|>
      <block.title @h3>
        Foo Title
      </block.tltle>
    </NyprMBlock>
    ```

    @argument h3
    @type {Boolean}
  */

  /**
    Parameters passed to a `link-to` component.
    [`<route name>`,`<model or identifier>`]

    @argument route
    @type {Array[String]}
  */

  /**
    External url. If specified, will render a conventional `<a/>` tag with `target="_blank" rel="noopener"`.

    @argument url
    @type {String}
  */

  /**
    Specify if a gallery icon should be rendered

    @argument hasGallery
    @type {Boolean}
  */

  /**
    Specify if a video icon should be rendered

    @argument hasVideo
    @type {Boolean}
  */

  /**
    Specify if an audio icon should be rendered

    @argument hasAudio
    @type {Boolean}
  */

  galleryIconClass: computed('hasGallery', function() {
    if (this.hasGallery) {
      return 'c-block__title--has-icon c-block__title--is-gallery';
    }
  }),

  videoIconClass: computed('hasVideo', function() {
    if (this.hasVideo && !this.hasGallery) {
      return 'c-block__title--has-icon c-block__title--is-video';
    }
  }),

  audioIconClass: computed('hasAudio', function() {
    if (this.hasAudio) {
      return 'c-block__title--has-icon c-block__title--is-audio';
    }
  }),

  externalIconClass: computed('url', function() {
    if (this.url) {
      return 'c-block__title--has-icon c-block__title--is-outbound-link';
    }
  }),

  iconClasses: collect('galleryIconClass', 'videoIconClass', 'audioIconClass', 'externalIconClass'),
  iconClassNames: computed('iconClasses', function() {
    return this.iconClasses.join(' ');
  }),
});
