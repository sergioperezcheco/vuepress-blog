import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Checo的博客",
  description: "Checo的博客",

  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["link", { rel: "icon", type: "image/png", href: "/favicon.png" }],
    ["link", { rel: "apple-touch-icon", href: "/assets/icon/apple-icon-152.png" }],
  ],

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
