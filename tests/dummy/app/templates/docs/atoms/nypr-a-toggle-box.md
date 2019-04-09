## `nypr-a-toggle-box`

Import position handlers from `nypr-design-system/utils/toggle-box-positions` for some shortcuts you can pass to `@calculatePosition`.

The main difference between these positioning functions and what `ember-basic-dropdown` provides out of the box is an optional offset you can pass directly to these positioning functions. See [module reference](/docs/api/modules/nypr-design-system/utils/toggle-box-positions) for more.

### Examples
<DocsDemo as |demo|>
  <demo.example>
    <fieldset>
      <legend>Pick a positioning function</legend>

      {{#each-in POSITIONS as |position fn|}}
        <p>
          <label>{{position}}
            <input type='radio' name='position' onChange={{action (mut calculatePosition) fn}} />
          </label>
        </p>
      {{/each-in}}
    </fieldset>

    <style>
      .c-toggle-box .c-toggle-box__label { color: #333; }
    </style>
    <!-- BEGIN-SNIPPET toggle-box-example.hbs -->
    <NyprAToggleBox @calculatePosition={{calculatePosition}} as |toggle|>
      <toggle.trigger>
        <strong>Toggle Box Label</strong>
      </toggle.trigger>

      <toggle.dropdown>
        Dropdown Contents
      </toggle.dropdown>
    </NyprAToggleBox>
    <!-- END-SNIPPET -->
  </demo.example>

  <demo.snippet @name='toggle-box-example.hbs' @label='Usage'/>
  <demo.snippet @name='nypr-a-toggle-box.hbs' @label='nypr-a-toggle-box.hbs'/>
  <demo.snippet @name='nypr-a-toggle-box.js' @label='nypr-a-toggle-box.js'/>
</DocsDemo>
