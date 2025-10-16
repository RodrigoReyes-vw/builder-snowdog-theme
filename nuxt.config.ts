// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const currentDir = dirname(fileURLToPath(import.meta.url));

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/storybook'],
  // layers configuration
  css: [join(currentDir, "./assets/css/styles.css")],

  postcss: {
    plugins: {
      "@csstools/postcss-global-data": {
        files: [join(currentDir, "./assets/css/mq.css")],
      },
      "postcss-preset-env": {},
    },
  },

})
