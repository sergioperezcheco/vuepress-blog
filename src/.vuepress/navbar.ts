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
        ],
      },
      {
        text: "运维",
        icon: "server",
        prefix: "DevOps/",
        children: [
          { text: "new-api迁移MySQL", icon: "database", link: "1" },
          { text: "Docker iptables排障", icon: "server", link: "2" },
        ],
      },
      {
        text: "macOS",
        icon: "desktop",
        prefix: "Mac/",
        children: [
          { text: "Mac mini M4检测", icon: "desktop", link: "1" },
          { text: "VS Code消失复盘", icon: "code", link: "2" },
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
        icon: "cloud",
        prefix: "AWS/",
        children: [
          { text: "CloudWatch证书", icon: "cloud", link: "1" },
          { text: "Windows11 EC2", icon: "cloud", link: "2" },
          { text: "ALB证书链", icon: "shield-halved", link: "3" },
          { text: "S3对象统计", icon: "database", link: "4" },
          { text: "SAML限制EC2登录", icon: "key", link: "5" },
          { text: "AL2 EBS扩容", icon: "hard-drive", link: "6" },
          { text: "RHEL启动排障", icon: "server", link: "7" },
          { text: "Windows补丁不适用", icon: "screwdriver-wrench", link: "8" },
          { text: ".NET更新DISM安装", icon: "code", link: "9" },
          { text: "SSM补丁扫描503", icon: "wrench", link: "10" },
          { text: "Windows补丁回滚", icon: "rotate", link: "11" },
          { text: "FSx ONTAP权限", icon: "folder", link: "12" },
          { text: "FSx AD 9389", icon: "folder-tree", link: "13" },
          { text: "SQL HA许可", icon: "database", link: "14" },
          { text: "Server Manager恢复", icon: "toolbox", link: "15" },
          { text: "EC2 BitLocker", icon: "lock", link: "16" },
          { text: "RDP登录失败", icon: "desktop", link: "17" },
          { text: "SMB挂载失败", icon: "network-wired", link: "18" },
          { text: "Windows导出VMDK", icon: "compact-disc", link: "19" },
        ],
      },
      {
        text: "Windows",
        icon: "pen-to-square",
        prefix: "Windows/",
        children: [
          { text: "Kali WSL安装", icon: "pen-to-square", link: "kali-wsl" },
        ],
      },
      /* { text: "樱桃", icon: "pen-to-square", link: "cherry" },
      { text: "火龙果", icon: "pen-to-square", link: "dragonfruit" },
      "tomato",
      "strawberry", */
      "begin",
    ],
  },
]);
