<template>
  <div class="visitor-counter">
    <div class="counter-title">
      <span class="icon">👀</span>
      <span>访问统计</span>
    </div>
    <div class="counter-image">
      <img 
        src="https://count.getloli.com/@blog.checo.cc?name=blog.checo.cc&theme=nixietube-1&padding=7&offset=0&align=top&scale=1&pixelated=1&darkmode=auto" 
        alt="访问次数"
        loading="lazy"
      />
    </div>
  </div>
</template>

<style scoped>
.visitor-counter {
  margin-top: 16px;
  padding: 12px;
  background: var(--bg-color-secondary, #f6f6f6);
  border-radius: 8px;
  text-align: center;
}

:root.dark .visitor-counter {
  background: var(--bg-color-secondary, #1e1e1e);
}

.counter-title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 600;
  color: var(--text-color, #2c3e50);
}

.icon {
  font-size: 16px;
}

.counter-image {
  display: flex;
  justify-content: center;
}

.counter-image img {
  max-width: 100%;
  height: auto;
  image-rendering: pixelated;
}
</style>

