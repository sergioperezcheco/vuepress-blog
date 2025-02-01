import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Checo的博客",
  description: "Checo的博客",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
