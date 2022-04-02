module.exports = {
  core: { builder: 'webpack5', }, 
  presets: ['@storybook/addon-docs/preset'],
  stories: ['../src/**/*.stories.(js|mdx)'],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-knobs",
    


  ]
};