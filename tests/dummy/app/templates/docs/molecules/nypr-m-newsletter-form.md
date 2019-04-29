## `nypr-m-newsletter-form`

### Examples

Base newsletter sign up form.

*Block form is required*.

Label text, legal language, and success message text can be overridden according to docs.

The default values are:

- __Sign up successful__: {{DEFAULT_SUBSCRIBED_MESSAGE}}
- __Accessible input label (invisible, only for screen readers)__: {{DEFAULT_LABEL}}
- __Legal language__: {{DEFAULT_LEGAL}}


<DocsDemo as |demo|>

  <demo.example>

    <!-- BEGIN-SNIPPET newsletter-form-usage.hbs -->
    <NyprMNewsletterForm @endpoint={{@endpoint}} @params={{@params}} as |form|>
      <form.label/>
      <form.input/>

      <form.submit>
        <NyprASvg @icon='arrow-dashed' style="fill: #fff" width="25" />
      </form.submit>

      <form.legal/>
    </NyprMNewsletterForm>
    <!-- END-SNIPPET -->

  </demo.example>

  <demo.snippet @name='newsletter-form-usage.hbs' @label='Usage'/>
  <demo.snippet @name='nypr-m-newsletter-form.hbs' @label='nypr-m-newsletter-form.hbs'/>
  <demo.snippet @name='nypr-m-newsletter-form.js' @label='nypr-m-newsletter-form.js'/>

</DocsDemo>
