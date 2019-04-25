## `nypr-m-block`

Render a story tease with the passed in arguments.

### Examples
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
        @srcS='https://picsum.photos/800/450'
        @alt='alt text'
        @tag={{hash label='Foo' slug='foo'}}
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
