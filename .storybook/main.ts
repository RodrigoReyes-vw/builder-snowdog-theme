import type { StorybookConfig } from '@nuxtjs/storybook'

const config: StorybookConfig = {
  staticDirs: ["../public"],
  addons: [
    '@chromatic-com/storybook', 
    "@storybook/addon-links",
    "@storybook/addon-postcss",
    "@storybook/addon-docs"],
  stories: [
    '../components/**/*.mdx',
    '../components/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  framework: {
    name: '@storybook-vue/nuxt',
    options: {},
  },
  css: {
    postcss: ".storybook/postcss.config.js",
  },
  viteFinal: (config) => {
    config.optimizeDeps = {
      include: ["vue"],
    };
    return config;
  }
}
export default config
