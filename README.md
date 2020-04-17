

nypr-design-system
==============================================================================

Home of the Radial Design system.

This repo contains an Ember addon, `nypr-design-system` and the files to
power Storybook.



## Ember Addon


### Installation
```
ember install nypr-design-system
```

### Configuration
This app will automatically import the css for your chosen theme in head of your application template (using the content for 'head-footer' hook).

You can select which themes to build (usually just one) by adding a list of theme names to the options in your app's `ember-cli-build.js` file.

```js
let app = new EmberApp(defaults, {
  //...
  'nypr-design-system': {
    themes: ['gothamist']
  },
  //...
});
```
If you don't specify a `themes` option, it will default to only the white label (`[white-label]`).
If you don't want any themes, use `themes: []`.

Additional themes beyond the first one will be added as [alternate stylesheets](https://developer.mozilla.org/en-US/docs/Web/CSS/Alternative_style_sheets). This is useful within storybook itself and also when debugging themes in clients.

## Storybook
The following folders contain files for storybook:

`stories`
`.storybook`

To run Storybook locally you need Ember to already be running (`ember serve`) or built (`ember build`). More specifically you need the Ember addon to exist in the `dist` folder, so it can read and display the Ember components. After that you can start storybook by running:

```bash
yarn storybook
```

## License

This project is licensed under the [MIT License](LICENSE.md).
