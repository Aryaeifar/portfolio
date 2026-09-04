<script setup lang="ts">
import { Icon } from "@iconify/vue";

withDefaults(
  defineProps<{
    icon?: string;
    title: string;
    description?: string;
  }>(),
  {
    icon: "ri:article-line",
  }
);
</script>

<template>
  <div class="empty-state">
    <div class="empty-state-icon" aria-hidden="true">
      <Icon :icon="icon" width="22" height="22" />
    </div>
    <h2>{{ title }}</h2>
    <p v-if="description">{{ description }}</p>
    <div v-if="$slots.default" class="empty-state-actions">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 28rem;
  margin: 0 auto;
  padding: 3.5rem 1.5rem 4.5rem;
}

.empty-state-icon {
  width: 3rem;
  height: 3rem;
  margin-bottom: 1.1rem;
  border: 1px solid var(--blog-border, rgba(128, 128, 128, 0.28));
  border-radius: 0.9rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(128, 128, 128, 0.08);
  color: rgb(var(--v-theme-title));
}

.empty-state h2 {
  margin: 0;
  font-size: 1.15rem;
  font-weight: 600;
  letter-spacing: -0.03em;
  color: rgb(var(--v-theme-title));
}

.empty-state p {
  margin: 0.5rem 0 0;
  font-size: 0.9rem;
  line-height: 1.55;
  color: var(--blog-muted, rgba(128, 128, 128, 0.75));
}

.empty-state-actions {
  margin-top: 1.15rem;
}
</style>
