

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

## Deployment
Radial is deployed as a static site which is housed in an S3 Bucket behind a Cloudfront Distribution.

### Production/Staging Environments
We use the `addon-versions` addon to maintain a single environment for both production and staging. This addon allows us to use the underlying directory structure of the S3 bucket as separate versions of the site. Each "version" that is deployed to the S3 bucket is stored in its own directory (as seen in the snippet from `circle.yml` below). 
```bash
[[ $CIRCLE_BRANCH = "main" ]] && RELEASE="latest" || { [[ -n $CIRCLE_BRANCH ]] && RELEASE=$CIRCLE_BRANCH || RELEASE=$CIRCLE_TAG; }
yarn storybook-to-aws-s3 --bucket-path=$S3_BUCKET/$RELEASE -e=./storybook-static/$RELEASE
aws s3 cp storybook-static/index.html s3://$S3_BUCKET
aws s3 cp storybook-static/storybook-config.json s3://$S3_BUCKET
AWS_PAGER="" aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_ID --paths "/index.html" "/storybook-config.json" "/$RELEASE/*"
```

Then `addon-versions` displays a "Versions" tab in the Storybook UI that allows the user to toggle between different available versions. This addon doesn't automatically detect the underlying directory structure, it relies on the `available-versions` field in `storybook-config.json` to populate its buttons.

> :warning: Thus, when deploying Radial, you must add a line to the `available-versions` field :warning:

### QA Branches
All branches that begin with `qa/` will be deployed to the S3 bucket. You have the option of adding your branch to the `available-versions` field or you can just modify the url manually to view your work.

## License

This project is licensed under the [MIT License](LICENSE.md).
