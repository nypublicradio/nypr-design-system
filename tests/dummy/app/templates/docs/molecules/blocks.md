## Blocks

Blocks are used to display individual pieces of content, similar to the concept of a "card". When a list of content needs to be rendered out, the `<NyprMBlock/>` component should be used.

The other components on this page provide various layout configurations in the form of empty DOM elements; it is up to the user to fill those elements with their own `<NyprMBlock/>` component to ensure proper layouts.


<aside>
  The <code>nypr-m-block</code> component yields several nested blocks to accommodate UIs that are decoupled from data structures. It's recommended that developers wrap the <code>nypr-m-block</code> component in component that's local to their application. This can help reduce the noise on application level route templates.
</aside>

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
        @srcS='https://picsum.photos/id/237/600/400'
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
            @authors={{array (hash name='Jen Chung')}}
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

#### "Urgent" Style block

The `nypr-m-block` accepts an `@urgent` argument that provides some alternate styling. You can use the yielded components to render a "breaking news" style block like so:

<DocsDemo as |demo|>
  <demo.example @name="urgent-style-usage.hbs">

    <NyprMBlock @urgent={{true}} as |block|>
      <block.object as |o|>

        <o.eyebrow @text='Breaking News'/>

        <o.title @h3>
          <a href="">
            Families Say NYPD Victim-Blaming Compounds Grief
          </a>
        </o.title>

        <o.body as |body|>
          <body.meta @timestamp='Just Now'/>

          <body.text>
            <p>A <a href="">coalition of community groups</a> are suing the city to stop a multi-billion dollar mega development.</p>
          </body.text>
        </o.body>

      </block.object>
    </NyprMBlock>

  </demo.example>

  <demo.snippet @name="urgent-style-usage.hbs" @label="Usage"/>
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
            <body.meta @authors={{array (hash name=item.author)}} @commentCount={{item.commentCount}}/>
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
  This component only provides empty HTML elements configured to space out `nypr-m-block`s and `nypr-m-block-list`s evenly. It is up to the developer to actually render the proper components.
</aside>

<DocsDemo as |demo|>
  <demo.example @name='foo'>

    <p>
      <button class="btn" {{action (mut singleColumn) (not singleColumn)}}>
        Show as {{if singleColumn 'Two Column' 'Single Column'}}
      </button>
    </p>
    <aside>Columns are declarative. Simply add the column to your template or not</aside>

    <p>
      <label>
        <input name="layout" type="radio" onclick={{action (mut layoutType) 'right-rail'}} checked>
        Right Rail
      </label>
      <label>
        <input name="layout" type="radio" onclick={{action (mut layoutType) 'two-up'}}>
        Two Up
      </label>
      <label>
        <input name="layout" type="radio" onclick={{action (mut layoutType) 'offset'}}>
        Offset
      </label>
    </p>
    <p><code>@layoutType</code>: <strong>{{or layoutType 'right-rail'}}</strong></p>
    <aside>
      <code>right-rail</code> is the defualt. Green and blue borders added for reference.
    </aside>

    <!-- BEGIN-SNIPPET block-list-group-usage.hbs -->
      <NyprOBlockListGroup @layoutType={{layoutType}} as |blg|>
        <blg.col1 style="border: 2px solid green;">
          <NyprMBlockList @items={{BLOCKS}} as |item|>

            <NyprMBlock @orientation='h' @size='s' as |block|>
              <block.media @srcS={{item.thumbnail}}/>
              <block.object as |o|>
                <o.eyebrow @text={{item.section}}/>
                <o.title @h3>{{item.title}}</o.title>
                <o.body as |body|>
                  <body.text>{{item.summary}}</body.text>
                  <body.meta @authors={{array (hash name=item.author)}} @commentCount={{item.commentCount}}/>
                </o.body>
              </block.object>
            </NyprMBlock>

          </NyprMBlockList>
        </blg.col1>

        {{#unless singleColumn}}
          <blg.col2 style="border: 2px solid blue;" as |col|>
            <col.ad>
              Ad here
            </col.ad>
          </blg.col2>
        {{/unless}}
      </NyprOBlockListGroup>
    <!-- END-SNIPPET -->
  </demo.example>

  <demo.snippet @name="block-list-group-usage.hbs" @label="Usage"/>
</DocsDemo>

### `nypr-o-featured-block-list`

Provides a two column layout with more white space, a heading, and other decorative UI bits.

<aside>
  This component only provides empty HTML elements configured to space out `nypr-m-block`s and `nypr-m-block-list`s evenly. It is up to the developer to actually render the proper components.
</aside>

<DocsDemo as |demo|>
  <demo.example @name="featured-block-list-usage.hbs">
    <NyprOFeaturedBlockList as |fbl|>
      <fbl.heading>
        <span class="c-featured-blocks__heading-icon o-icon u-icon--s u-path-fill--quaternary">
          <NyprASvg @icon='arrow-stylish'/>
        </span>
        Featured
      </fbl.heading>

      <fbl.featured>
        {{#with (get BLOCKS 0) as |item|}}
          <NyprMBlock as |block|>
            <block.media
              @srcS={{item.thumbnail}}
            />

            <block.object as |o|>
              <o.eyebrow @text={{item.section}}/>

              <o.title @h3>
                {{item.title}}
              </o.title>

              <o.body as |body|>
                <body.text>
                  {{item.summary}}
                </body.text>

                <body.meta
                  @timestamp="1 hour ago"
                  @commentCount={{item.commentCount}}
                />
              </o.body>
            </block.object>
          </NyprMBlock>
        {{/with}}
      </fbl.featured>

      <fbl.col>
        <NyprMBlockList @items={{slice 1 undefined BLOCKS}} as |item|>
          <NyprMBlock @orientation='h' @size='s' as |block|>
            <block.media
              @srcS={{item.thumbnail}}
            />

            <block.object as |o|>
              <o.eyebrow @text={{item.section}}/>

              <o.title @h3>
                {{item.title}}
              </o.title>

              <o.body as |body|>
                <body.meta
                  @timestamp="1 hour ago"
                  @commentCount={{item.commentCount}}
                />
              </o.body>
            </block.object>
          </NyprMBlock>
        </NyprMBlockList>
      </fbl.col>

    </NyprOFeaturedBlockList>

  </demo.example>

  <demo.snippet @name="featured-block-list-usage.hbs" @label="Usage"/>

</DocsDemo>
