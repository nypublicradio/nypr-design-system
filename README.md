

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
This app will automatically import the css for your chosen theme in head of your application template (using the contentfor 'head-footer' hook).

You can select a theme to build by adding a theme name to the options in your app's `ember-cli-build.js` file

```js
let app = new EmberApp(defaults, {
  //...
  'nypr-design-system': {
    theme: 'gothamist'
  },
  //...
});
```

If you want to disable this behavior for some reason, add `theme: 'none'`.

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
