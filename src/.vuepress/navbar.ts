import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/photos/",
  {
    text: "文章",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      { text: "AI", icon: "brain", link: "/posts/AI/" },
      { text: "AWS", icon: "cloud", link: "/posts/AWS/" },
      { text: "运维", icon: "server", link: "/posts/DevOps/" },
      { text: "macOS", icon: "desktop", link: "/posts/Mac/" },
      { text: "VPS", icon: "network-wired", link: "/posts/VPS/" },
      { text: "Windows", icon: "display", link: "/posts/Windows/" },
      { text: "星标文章", icon: "star", link: "/star/" },
      { text: "分类", icon: "folder", link: "/category/" },
      { text: "标签", icon: "tags", link: "/tag/" },
      { text: "时间轴", icon: "clock", link: "/timeline/" },
    ],
  },
]);
