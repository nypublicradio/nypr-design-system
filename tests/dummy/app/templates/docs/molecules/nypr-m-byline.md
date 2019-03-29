## `nypr-m-byline`

### Example Usage

Given the following definitions:

<DocsSnippet @name='byline-choices.js'/>

<DocsDemo as |demo|>
  <demo.example>

    <fieldset>
      <legend>Choose author set</legend>

      <div style="display: flex;">
        <div style="flex: 1;">
          <label>
            {{input type='radio' name='authors' change=(action 'setAuthors') value='inhouse-1' checked=true}}
            In house author: 1
          </label>

          <label>
            {{input type='radio' name='authors' change=(action 'setAuthors') value='inhouse-2'}}
            In house author: 2
          </label>

          <label>
            {{input type='radio' name='authors' change=(action 'setAuthors') value='inhouse-3'}}
            In house author: 3
          </label>

          <label>
            {{input type='radio' name='authors' change=(action 'setAuthors') value='inhouse-4'}}
            In house author: 4
          </label>
        </div>
        <div style="flex: 1;">
          <label>
            {{input type='radio' name='authors' change=(action 'setAuthors') value='contrib-1'}}
            Contributing Org: 1
          </label>

          <label>
            {{input type='radio' name='authors' change=(action 'setAuthors') value='contrib-2'}}
            Contributing Org: 2
          </label>

          <label>
            {{input type='radio' name='authors' change=(action 'setAuthors') value='contrib-3'}}
            Contributing Org: 3
          </label>

          <label>
            {{input type='radio' name='authors' change=(action 'setAuthors') value='contrib-4'}}
            Contributing Org: 4
          </label>
        </div>
      </div>
    </fieldset>

    <!-- BEGIN-SNIPPET byline-example.hbs -->
    <NyprMByline @authors={{authors}} @sponsor={{sponsor}} />
    <!-- END-SNIPPET -->
  </demo.example>

  <demo.snippet @name="byline-example.hbs" @label='Usage'/>
  <demo.snippet @name="nypr-m-byline.hbs" @label='nypr-m-byline.hbs'/>
  <demo.snippet @name=""nypr-m-byline.js @label='nypr-m-byline.js'/>
</DocsDemo>
