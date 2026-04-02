import { defineClientConfig } from "vuepress/client";
import { onMounted, watch, nextTick } from "vue";
import { useRoute } from "vuepress/client";
import VisitorCounter from "./components/VisitorCounter.vue";

// 创建一个根组件用于动态注入访问计数器
const VisitorCounterInjector = {
  name: "VisitorCounterInjector",
  setup() {
    const route = useRoute();

    const injectCounter = () => {
      nextTick(() => {
        // 只在首页显示
        if (route.path !== "/" && route.path !== "/index.html") {
          const existingCounters = document.querySelectorAll(".visitor-counter-wrapper");
          existingCounters.forEach((el) => el.remove());
          return;
        }

        // 移除已存在的计数器（避免重复）
        const existingCounters = document.querySelectorAll(".visitor-counter-wrapper");
        existingCounters.forEach((el) => el.remove());

        // 创建计数器容器 - 与主题卡片完全一致的结构
        const createCounter = () => {
          const counterWrapper = document.createElement("div");
          counterWrapper.className = "visitor-counter-wrapper";
          counterWrapper.innerHTML = `
            <div class="counter-header">
              <span class="counter-icon">👀</span>
              <span>访问统计</span>
            </div>
            <div class="counter-body">
              <img 
                src="https://count.getloli.com/@blog.checo.cc?name=blog.checo.cc&theme=smooth&padding=7&offset=0&align=top&scale=1&pixelated=1&darkmode=auto" 
                alt="访问次数"
                loading="lazy"
              />
            </div>
          `;
          return counterWrapper;
        };

        // 查找博客右侧侧边栏区域 - 找到包含所有模块的容器
        // 按优先级尝试不同的选择器
        const infoWrapper = document.querySelector(".vp-blog-infos, .blog-info-wrapper, .info-wrapper");
        const blogInfoList = document.querySelector(".vp-blog-info-list, .blog-info-list");
        const bloggerInfo = document.querySelector(".blogger-info, .vp-blogger-info");
        
        // 找到右侧栏的 aside 容器
        const aside = document.querySelector(".vp-blog-home aside, .blog-home aside, aside.vp-sidebar");

        const counter = createCounter();

        // 方案1: 如果有信息包装器，追加到末尾
        if (infoWrapper) {
          infoWrapper.appendChild(counter);
        }
        // 方案2: 如果找到博客信息列表（第二个模块），在其后面插入
        else if (blogInfoList) {
          blogInfoList.after(counter);
        }
        // 方案3: 如果找到 aside 容器，追加到末尾
        else if (aside) {
          aside.appendChild(counter);
        }
        // 方案4: 在博主信息后面插入
        else if (bloggerInfo) {
          bloggerInfo.after(counter);
        }
      });
    };

    onMounted(() => {
      // 延迟注入，确保 DOM 已完全渲染
      setTimeout(injectCounter, 500);
    });

    watch(
      () => route.path,
      () => {
        setTimeout(injectCounter, 500);
      }
    );

    return () => null;
  },
};

export default defineClientConfig({
  enhance({ app }) {
    app.component("VisitorCounter", VisitorCounter);
  },
  rootComponents: [VisitorCounterInjector],
});

