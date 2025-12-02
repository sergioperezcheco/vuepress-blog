import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  /* "/demo/", */
  "/photos/",
  {
    text: "文章",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "AI",
        icon: "pen-to-square",
        prefix: "AI/",
        children: [
          { text: "DeepSeek本地部署", icon: "pen-to-square", link: "1" },
          { text: "通过硅基流动使用DeepSeek-R1", icon: "pen-to-square", link: "2" },
          "3",
          /* "4", */
        ],
      },
      {
        text: "VPS",
        icon: "pen-to-square",
        prefix: "VPS/",
        children: [
          /* {
            text: "香蕉 1",
            icon: "pen-to-square",
            link: "1",
          },
          {
            text: "香蕉 2",
            icon: "pen-to-square",
            link: "2",
          }, */
          "1",
          "2",
        ],
      },
      {
        text: "AWS",
        icon: "pen-to-square",
        prefix: "AWS/",
        children: [
          "1",
        ],
      },
      /* { text: "樱桃", icon: "pen-to-square", link: "cherry" },
      { text: "火龙果", icon: "pen-to-square", link: "dragonfruit" },
      "tomato",
      "strawberry", */
      "begin",
    ],
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
