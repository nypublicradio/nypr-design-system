const path = require('path');

module.exports = {
  stories: [
    '../stories/**/*.stories.(js|mdx)',
  ],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-a11y/register',
    '@storybook/addon-storysource',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      }
    }
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.jsx$/,
      use: [{
        loader: 'babel-loader',
        options: {
          plugins: ['@babel/plugin-transform-react-jsx']
        }
      }],
      include: path.resolve(__dirname, './custom/components'),
    });

    // Return the altered config
    return config;
  },
};
