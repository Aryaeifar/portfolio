<script setup lang="ts">
defineProps<{
  tags: string[];
  selectedTag: string;
  tagCounts: Record<string, number>;
}>();

const emit = defineEmits<{
  select: [tag: string];
}>();

const { t } = useI18n();
const mobileOpen = ref(false);

const labelFor = (tag: string) => (tag === "All" ? t("blogAll") : tag);
</script>

<template>
  <div class="blog-tags">
    <div class="blog-tags-desktop">
      <button
        v-for="tag in tags"
        :key="tag"
        type="button"
        class="blog-tag"
        :class="{ 'is-active': selectedTag === tag }"
        @click="emit('select', tag)"
      >
        <span>{{ labelFor(tag) }}</span>
        <span v-if="tagCounts[tag]" class="blog-tag-count">{{ tagCounts[tag] }}</span>
      </button>
    </div>

    <div class="blog-tags-mobile">
      <button
        type="button"
        class="blog-tag-mobile-trigger"
        @click="mobileOpen = !mobileOpen"
      >
        <span>{{ labelFor(selectedTag) }}</span>
        <span class="blog-tag-caret">▾</span>
      </button>
      <div v-if="mobileOpen" class="blog-tag-drawer">
        <p class="blog-tag-drawer-title">{{ $t("blogSelectCategory") }}</p>
        <button
          v-for="tag in tags"
          :key="tag"
          type="button"
          class="blog-tag-drawer-item"
          :class="{ 'is-active': selectedTag === tag }"
          @click="emit('select', tag); mobileOpen = false"
        >
          <span>{{ labelFor(tag) }}</span>
          <span v-if="tagCounts[tag]" class="blog-tag-count">{{ tagCounts[tag] }}</span>
        </button>
      </div>
    </div>
  </div>
</template>
