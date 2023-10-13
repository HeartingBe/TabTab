import { defineUserConfig } from "vuepress";
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';
import { path } from '@vuepress/utils';

import theme from "./theme.js";
import { readingTime } from "vuepress-theme-hope";

export default defineUserConfig({
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    })
  ],

  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "TabTab"
    }
  },

  theme,

  shouldPrefetch: false,
});
