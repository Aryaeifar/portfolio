<script setup lang="ts">
import FlickeringGrid from "~/components/Blog/FlickeringGrid.vue";

defineProps<{
  title: string;
  description?: string;
}>();
</script>

<template>
  <header class="blog-hero">
    <div class="blog-hero-grid">
      <FlickeringGrid />
    </div>
    <div class="blog-wrap">
      <h1>{{ title }}</h1>
      <p v-if="description">{{ description }}</p>
    </div>
    <div v-if="$slots.default" class="blog-wrap">
      <slot />
    </div>
  </header>
</template>
