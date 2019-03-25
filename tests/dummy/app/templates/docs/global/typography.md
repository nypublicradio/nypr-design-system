## Typography

### Headings

<div class="theme-typography">
  <h1>This is an H1 element</h1>
  <h2>This is an H2 element</h2>
  <h3>This is an H3 element</h3>
  <h4>This is an H4 element</h4>
  <h5>This is an H5 element</h5>
  <h6>This is an H6 element</h6>
</div>

### Lists

#### Unordered List
<ul>
  <li>This is a list item in an unordered list</li>
  <li>An unordered list is a list in which the sequence of items is not important. Sometimes, an unordered list is a bulleted list. And this is a long list item in an unordered list that can wrap onto a new line. </li>
  <li>
    Lists can be nested inside of each other
    <ul>
      <li>This is a nested list item</li>
      <li>This is another nested list item in an unordered list</li>
    </ul>
  </li>
  <li>This is the last list item</li>
</ul>

#### Ordered list
<ol>
  <li>This is a list item in an unordered list</li>
  <li>An unordered list is a list in which the sequence of items is not important. Sometimes, an unordered list is a bulleted list. And this is a long list item in an unordered list that can wrap onto a new line. </li>
  <li>
    Lists can be nested inside of each other
    <ul>
      <li>This is a nested list item</li>
      <li>This is another nested list item in an unordered list</li>
    </ul>
  </li>
  <li>This is the last list item</li>
</ol>

#### Definition List
<dl>
  <dt>Definition List</dt>
  <dd>A number of connected items or names written or printed consecutively, typically one below the other.</dd>
  <dt>This is a term.</dt>
  <dd>This is the definition of that term, which both live in a <code>dl</code>.</dd>
  <dt>Here is another term.</dt>
  <dd>And it gets a definition too, which is this line.</dd>
  <dt>Here is term that shares a definition with the term below.</dt>
  <dd>And it gets a definition too, which is this line.</dd>
</dl>

## Text Elements

### `<blockquote />`

Basic blockquote element. The `<p/>` tag is required for decoration.

{{#docs-demo as |demo|}}
  {{#demo.example name='blockquote.hbs'}}
    <blockquote>
      <p>
        Lorem ipsum
      </p>
    </blockquote>
  {{/demo.example}}

  {{demo.snippet name='blockquote.hbs' label='Usage'}}
{{/docs-demo}}

### `<time />`

Basic time element.

{{#docs-demo as |demo|}}
  {{#demo.example name='time.hbs'}}
    <time datetime={{now}}>{{moment-format (now) 'MMMM Do YYYY, h:mm:ss a'}}</time>
  {{/demo.example}}

  {{demo.snippet name='time.hbs' label='Usage'}}
{{/docs-demo}}

## Components

### `atoms/story-headline`
Make text suitable for a story headline

{{#docs-demo as |demo|}}
  {{#demo.example name='headline.hbs'}}
    {{#atoms/story-headline}}
      Headline with Lots of Text Can Sit Here on Multiple Lines
    {{/atoms/story-headline}}
  {{/demo.example}}

  {{demo.snippet name='headline.hbs' label='Usage'}}
{{/docs-demo}}

### `atoms/section-heading`
Make text suitable for a section heading. Pass a block or a text parameter.

{{#docs-demo as |demo|}}
  {{#demo.example name='section.hbs'}}
    Using a block:
    {{#atoms/section-heading}}
      This is a Section Heading
    {{/atoms/section-heading}}

    Using a positional param:
    {{atoms/section-heading 'Foo Bar Section'}}
  {{/demo.example}}

  {{demo.snippet name='headline.hbs' label='Usage'}}
{{/docs-demo}}


### `atoms/-kicker`

Kicker used for decorating metadata. Pass a block or a test parameter.

{{#docs-demo as |demo|}}
  {{#demo.example name='kicker.hbs'}}
    Using a block:
    {{#atoms/-kicker}}
      Category
    {{/atoms/-kicker}}

    Using an argument:
    {{atoms/-kicker text='News'}}
  {{/demo.example}}

  {{demo.snippet name='kicker.hbs' label='Usage'}}
{{/docs-demo}}
