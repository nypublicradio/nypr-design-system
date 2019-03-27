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

    <!-- BEGIN-SNIPPET block-example.hbs -->
    <NyprMBlock
      @url='https://example.com/story'
      @src='https://picsum.photos/400/250'
      @alt='alt text'
      @category='news'
      @title='Story Title'
      @tease='Short summary of the story'
      @author='Jen Chung'
      @commentCount=100
      @orientation={{this.orientation}}
    />
    <!-- END-SNIPPET -->
  </demo.example>

  <demo.snippet @name='block-example.hbs' @label='Usage'/>
  <demo.snippet @name='nypr-m-block.js' @label='nypr-m-block.js'/>
  <demo.snippet @name='nypr-m-block.hbs' @label='nypr-m-block.hbs'/>
</DocsDemo>
