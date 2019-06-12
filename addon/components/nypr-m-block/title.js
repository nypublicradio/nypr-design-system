import Component from '@ember/component';
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
});
