## Blocks

Blocks are used to display individual pieces of content, similar to the concept of a "card". When a list of content needs to be rendered out, the `<NyprMBlock/>` component should be used.

The other components on this page provide various layout configurations in the form of empty DOM elements; it is up to the user to fill those elements with their own `<NyprMBlock/>` component to ensure proper layouts.


### `nypr-m-block`
The `<NyprMBlock/>` component provides layout options that are similar to the famous [media object](http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/).

<DocsDemo as |demo|>
  <demo.example>
    <p>
      Toggle block orientation:
      <button class="btn" {{action (mut this.orientation) (if (eq this.orientation 'h') 'v' 'h')}}>
        Toggle
      </button>
    </p>
    <p>Orientation: <strong>{{or this.orientation 'v'}}</strong></p>
    <p>
      Toggle block size (horizontal only):
      <button class="btn" {{action (mut this.size) (if (eq this.size 'l') 's' 'l')}}>
        Toggle
      </button>
    </p>
    <p>Size: <strong>{{or this.size 's'}}</strong></p>

    <!-- BEGIN-SNIPPET block-example.hbs -->
    <NyprMBlock @orientation={{this.orientation}} @size={{this.size}} as |block|>
      <block.media
        @url='https://example.com/story'
        @srcS='/test-image1.jpeg'
        @alt='alt text'
        @tag={{hash label='Foo' route=(array null 'bar')}}
      />

      <block.object as |o|>
        <o.eyebrow @text='News'/>

        <o.title @h2>
          Story Title
        </o.title>

        <o.body as |body|>
          <body.text>
            Short summary of the story
          </body.text>

          <body.meta
            @author='Jen Chung'
            @commentCount=46
          />
        </o.body>
      </block.object>

    </NyprMBlock>
    <!-- END-SNIPPET -->
  </demo.example>

  <demo.snippet @name='block-example.hbs' @label='Usage'/>
  <demo.snippet @name='nypr-m-block.js' @label='nypr-m-block.js'/>
  <demo.snippet @name='nypr-m-block.hbs' @label='nypr-m-block.hbs'/>
</DocsDemo>

### `nypr-m-block-list`

Provides a simple list context for rendering multiple blocks.

<aside>
This component provides a `ul` tag with an `li` for each item in the given `@items` argument. Users should take the yielded `item` context variable and render an `nypr-m-block` component.
</aside>

<DocsDemo as |demo|>
  <demo.example @name="block-list-usage.hbs">
    <NyprMBlockList @items={{BLOCKS}} as |item|>

      <NyprMBlock as |block|>
        <block.media @srcS={{item.thumbnail}}/>

        <block.object as |o|>
          <o.eyebrow @text={{item.section}}/>

          <o.title @h3>{{item.title}}</o.title>

          <o.body as |body|>
            <body.text>{{item.summary}}</body.text>
            <body.meta @author={{item.author}} @commentCount={{item.commentCount}}/>
          </o.body>
        </block.object>
      </NyprMBlock>

    </NyprMBlockList>
  </demo.example>

  <demo.snippet @name="block-list-usage.hbs" @label='Usage'/>
</DocsDemo>

### `nypr-o-block-list-group`

Provides a two column layout for blocks.

<aside>
  This component only provides empty HTML elements configured to space out `nypr-m-block`s anad `nypr-m-block-list`s evenly. It is up to the developer to actually render the proper components.
</aside>

<DocsDemo as |demo|>
  <demo.example @name="block-list-group-usage.hbs">
    <NyprOBlockListGroup as |blg|>
      <blg.col1>
        <NyprMBlockList @items={{BLOCKS}} as |item|>

          <NyprMBlock @orientation='h' @size='s' as |block|>
            <block.media @srcS={{item.thumbnail}}/>
            <block.object as |o|>
              <o.eyebrow @text={{item.section}}/>
              <o.title @h3>{{item.title}}</o.title>
              <o.body as |body|>
                <body.text>{{item.summary}}</body.text>
                <body.meta @author={{item.author}} @commentCount={{item.commentCount}}/>
              </o.body>
            </block.object>
          </NyprMBlock>

        </NyprMBlockList>
      </blg.col1>

      <blg.col2 as |col|>
        <col.ad @size='short'>
          Ad here
        </col.ad>
      </blg.col2>
    </NyprOBlockListGroup>
  </demo.example>

  <demo.snippet @name="block-list-group-usage.hbs" @label="Usage"/>
</DocsDemo>
