<script setup>
const scroll_top = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
</script>

<template>
  <div class="default-layout">
    <BaseHeader />
    <main class="main-container px-7 py-10">
      <div class="mask-image">
        <WidgetsBaseAnimation color="red"/>
      </div>
      <slot />
    </main>
    <button class="scroll-to-top" @click="scroll_top">
      <span class="mdi mdi-arrow-up"></span>
    </button>
  </div>
</template>
<style>
html {
  background: rgb(var(--v-theme-dark))
}
body {
  color:  rgb(var(--v-theme-primary)) ;
}
.router-link-exact-active {
  opacity: 1;
}
</style>