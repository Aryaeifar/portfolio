<script setup lang="ts">
defineProps<{
  url: string;
  title: string;
  description: string;
  date: string;
  thumbnail?: string;
  showRightBorder?: boolean;
}>();
</script>

<template>
  <NuxtLink
    :to="url"
    class="blog-card"
    :class="{ 'has-right-border': showRightBorder }"
  >
    <div v-if="thumbnail" class="blog-card-media">
      <img :src="thumbnail" :alt="title" />
    </div>
    <div class="blog-card-body">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <time>{{ date }}</time>
    </div>
  </NuxtLink>
</template>
