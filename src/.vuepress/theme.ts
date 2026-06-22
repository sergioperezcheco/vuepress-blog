import { hopeTheme } from "vuepress-theme-hope";
import process from "node:process";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

const siteHostname =
  process.env.NODE_ENV === "development"
    ? "http://127.0.0.1:8080"
    : "https://blog.checo.cc";

export default hopeTheme({
  hostname: siteHostname,

  /* 全屏按钮 */
  fullscreen: true,

  author: {
    name: "Checo",
    url: "https://home.checo.cc",
  },

  logo: "/logo.png",
  repo: "sergioperezcheco/vuepress-blog",

  docsDir: "src",

  // 页脚
  footer: "© 2026 Checo's Blog. All rights reserved.",
  displayFooter: true,

  // 博客相关
  blog: {
    description: "云计算/运维/网安/前端/交通/摄影",
    intro: "/intro.html",
    medias: {
      Github: "https://github.com/sergioperezcheco",
      Email: "mailto:fddm025@gmail.com",
      Telegram: "https://t.me/iiiiiikun",
      Rss: "/rss.xml",
      /* Nodeseek: "https://www.nodeseek.com/space/12394", */
      Nodeseek: {
        icon: "https://www.nodeseek.com/static/image/favicon/android-chrome-192x192.png",
        link: "https://www.nodeseek.com/space/12394",
      },
    },
  },

  // 多语言配置
  locales: {
    "/": {
      navbar,
      sidebar,

      blog: {
        description: "云计算/运维/网安/前端/交通/摄影",
        intro: "/intro.html",
        medias: {
          Github: "https://github.com/sergioperezcheco",
          Email: "mailto:fddm025@gmail.com",
          Telegram: "https://t.me/iiiiiikun",
          Rss: "/rss.xml",
          Nodeseek: {
            icon: "https://www.nodeseek.com/static/image/favicon/android-chrome-192x192.png",
            link: "https://www.nodeseek.com/space/12394",
          },
        },
      },

      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },

    "/en/": {
      navbar: [
        "/en/",
        "/en/photos/",
        {
          text: "Posts",
          icon: "pen-to-square",
          prefix: "/en/posts/",
          children: [
            { text: "AI", icon: "brain", link: "/en/posts/AI/" },
            { text: "AWS", icon: "cloud", link: "/en/posts/AWS/" },
            { text: "DevOps", icon: "server", link: "/en/posts/DevOps/" },
            { text: "macOS", icon: "desktop", link: "/en/posts/Mac/" },
            { text: "VPS", icon: "network-wired", link: "/en/posts/VPS/" },
            { text: "Windows", icon: "display", link: "/en/posts/Windows/" },
            { text: "Starred", icon: "star", link: "/en/star/" },
            { text: "Categories", icon: "folder", link: "/en/category/" },
            { text: "Tags", icon: "tags", link: "/en/tag/" },
            { text: "Timeline", icon: "clock", link: "/en/timeline/" },
          ],
        },
      ],
      sidebar: [
        { text: "Homepage", icon: "house", link: "/en/" },
        {
          text: "Posts",
          icon: "pen-to-square",
          children: [
            {
              text: "AI",
              icon: "brain",
              prefix: "/en/posts/AI/",
              collapsible: true,
              children: [
                { text: "Local Deployment of DeepSeek", link: "1" },
                { text: "Using DeepSeek-R1 via SiliconFlow", link: "2" },
                { text: "Finding Public DeepSeek Services via FOFA", link: "3" },
                { text: "Training a TinyStories-Style GPT Model from Scratch", link: "4" },
              ],
            },
            {
              text: "AWS",
              icon: "cloud",
              prefix: "/en/posts/AWS/",
              collapsible: true,
              children: [
                { text: "CloudWatch Agent Certificate Failure on Windows 2008", link: "1" },
                { text: "Launching Windows 11 EC2 on AWS", link: "2" },
                { text: "ALB Certificate Chain Break / curl Error", link: "3" },
                { text: "Counting S3 Objects by Extension", link: "4" },
                { text: "Restricting SAML Users from EC2 Console Login", link: "5" },
                { text: "growpart Fails After EBS Expansion", link: "6" },
                { text: "RHEL EC2 Boot Failure Troubleshooting", link: "7" },
                { text: "Windows 2019 Cumulative Update Reports Not Applicable", link: "8" },
                { text: ".NET Cumulative Update Fails: Using DISM to Bypass WUA", link: "9" },
                { text: "SSM Patch Manager Scan Failure: Microsoft Update 503", link: "10" },
                { text: "Windows Server 2016 Keeps Rolling Back Patches", link: "11" },
                { text: "FSx ONTAP SMB Share Permission Troubleshooting", link: "12" },
                { text: "FSx for Windows Creation Fails: TCP 9389 Unreachable", link: "13" },
                { text: "EC2 SQL Server HA Standby Node License Cost Reduction", link: "14" },
                { text: "Recovering Server Manager After Uninstalling .NET", link: "15" },
                { text: "Deploying BitLocker on EC2 Windows Instances", link: "16" },
                { text: "EC2 Windows RDP Failure: Winlogon Memory Exhaustion", link: "17" },
                { text: "EC2 Windows SMB Mount: EDR Interception & Auth Issues", link: "18" },
                { text: "EC2 Windows Root Volume Export to VMDK", link: "19" },
                { text: "Installing Windows 11 ARM on EC2 T4g Graviton", link: "20" },
              ],
            },
            {
              text: "macOS",
              icon: "desktop",
              prefix: "/en/posts/Mac/",
              collapsible: true,
              children: [
                { text: "Mac mini M4 Hardware Inspection Guide", link: "1" },
                { text: "Why VS Code Disappeared on macOS", link: "2" },
              ],
            },
            {
              text: "VPS",
              icon: "network-wired",
              prefix: "/en/posts/VPS/",
              collapsible: true,
              children: [
                { text: "Linux Common Scripts Collection", link: "1" },
                { text: "Finding Triple-Network IPs via FOFA", link: "2" },
              ],
            },
            {
              text: "Windows",
              icon: "display",
              prefix: "/en/posts/Windows/",
              collapsible: true,
              children: [
                { text: "Installing Kali WSL on Windows 10", link: "kali-wsl" },
              ],
            },
            { text: "Afterword", icon: "star", link: "/en/posts/begin" },
            {
              text: "DevOps",
              icon: "server",
              prefix: "/en/posts/DevOps/",
              collapsible: true,
              children: [
                { text: "1Panel Server Docker & new-api MySQL Migration", link: "1" },
                { text: "Docker iptables and nftables Compatibility", link: "2" },
              ],
            },
          ],
        },
        {
          text: "Photography",
          icon: "camera",
          children: [
            { text: "Southern Anhui Scenic Road", link: "/en/photos/1" },
            { text: "Birds", link: "/en/photos/2" },
            { text: "Football", link: "/en/photos/3" },
          ],
        },
        { text: "About Me", icon: "circle-info", link: "/en/intro" },
      ],

      blog: {
        description: "Cloud / DevOps / Security / Frontend / Transport / Photography",
        intro: "/en/intro.html",
        medias: {
          Github: "https://github.com/sergioperezcheco",
          Email: "mailto:fddm025@gmail.com",
          Telegram: "https://t.me/iiiiiikun",
          Rss: "/rss.xml",
          Nodeseek: {
            icon: "https://www.nodeseek.com/static/image/favicon/android-chrome-192x192.png",
            link: "https://www.nodeseek.com/space/12394",
          },
        },
      },
    },
  },

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,

  // 此处开启了很多功能用于演示，你应仅保留用到的功能。
  markdown: {
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    demo: true,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    plantuml: true,
    spoiler: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,

    // 取消注释它们如果你需要 TeX 支持
    // markdownMath: {
    //   // 启用前安装 katex
    //   type: "katex",
    //   // 或者安装 mathjax-full
    //   type: "mathjax",
    // },

    // 如果你需要幻灯片，安装 @vuepress/plugin-revealjs 并取消下方注释
    // revealjs: {
    //   plugins: ["highlight", "math", "search", "notes", "zoom"],
    // },

    // 在启用之前安装 chart.js
    // chartjs: true,

    // insert component easily

    // 在启用之前安装 echarts
    // echarts: true,

    // 在启用之前安装 flowchart.ts
    // flowchart: true,

    // 在启用之前安装 mermaid
    // mermaid: true,

    // playground: {
    //   presets: ["ts", "vue"],
    // },

    // 在启用之前安装 @vue/repl
    // vuePlayground: true,

    // 在启用之前安装 sandpack-vue3
    // sandpack: true,
  },

  // 在这里配置主题提供的插件
  plugins: {
    blog: true,

    // 启用之前需安装 @waline/client
    // 警告: 这是一个仅供演示的测试服务，在生产环境中请自行部署并使用自己的服务！
    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://waline-comment.vuejs.press",
    // },

    components: {
      components: ["Badge", "VPCard"],
    },

    icon: {
     prefix: "fa6-solid:",
   },

 slimsearch: {
   indexContent: false,
   customFields: [
      {
        getter: (page) => page.frontmatter.category,
        formatter: {
          "/": "分类: $content",
          "/en/": "Category: $content",
        },
      },
      {
        getter: (page) => page.frontmatter.tag,
        formatter: {
          "/": "标签: $content",
          "/en/": "Tag: $content",
        },
      },
    ],
  },
  feed: {
      rss: true,
      atom: true,
      json: true,
      devServer: true,
      devHostname: "http://127.0.0.1:8080",
      count: 50,
      locales: {
        "/": {
          channel: {
            title: "Checo的博客",
            link: siteHostname,
            description: "云计算/运维/网安/前端/交通/摄影",
            language: "zh-CN",
            copyright: "© 2026 Checo's Blog. All rights reserved.",
          },
        },
        "/en/": {
          channel: {
            title: "Checo's Blog",
            link: siteHostname,
            description: "Cloud / DevOps / Security / Frontend / Transport / Photography",
            language: "en-US",
            copyright: "© 2026 Checo's Blog. All rights reserved.",
          },
        },
      },
    },

    // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
