const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)', '../src/**/*stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app',
    'storybook-addon-theme-toggle'
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5'
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias['assets'] = path.join(__dirname, '../src/assets');
    config.resolve.alias['@styles'] = path.join(__dirname, '../src/styles');
    config.resolve.alias['@core'] = path.join(__dirname, '../src/core');
    config.resolve.alias['@store'] = path.join(__dirname, '../src/store');
    config.resolve.alias['@components'] = path.join(__dirname, '../src/components');

    return config;
  }
};
