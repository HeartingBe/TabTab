import { defineUserConfig } from "vuepress";
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';
import { path } from '@vuepress/utils';

import theme from "./theme.js";

export default defineUserConfig({
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    })
  ],

  base: "/",

  locales: {
    "/home/": {
      lang: "zh-CN",
      title: "TabTab - HOME"
    },
    "/command/": {
      lang: "zh-CN",
      title: "TabTab - COMMAND"
    },
    "/source_code/": {
      lang: "zh-CN",
      title: "TabTab - SOURCE_CODE"
    },
    "/mod/": {
      lang: "zh-CN",
      title: "TabTab - MOD"
    }
  },

  theme,

  shouldPrefetch: false,
});
