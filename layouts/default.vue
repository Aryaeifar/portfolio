<script setup>
import { useWindowScroll } from "@vueuse/core";
const scroll_top = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
const { y } = useWindowScroll();
</script>

<template>
  <div>
    <NuxtLoadingIndicator />
    <div class="default-layout">
      <BaseHeader />
      <main class="main-container px-7 py-10">
        <div class="mask-image">
          <WidgetsBaseAnimation color="red" />
        </div>
        <div class="bg-white"></div>
        <slot />
      </main>
      <button v-show="y > 200" class="scroll-to-top" @click="scroll_top">
        <span class="mdi mdi-arrow-up"></span>
      </button>
    </div>
  </div>
</template>
<style>
html {
  background: rgb(var(--v-theme-dark));
}
body {
  color: rgb(var(--v-theme-primary));
}
.router-link-exact-active {
  opacity: 1;
}
</style>
