<script setup lang="ts">
const route = useRoute();
const { t } = useI18n();
const { getPost, relatedPosts, formatDate } = useBlog();

const slug = computed(() => String(route.params.slug || ""));
const post = computed(() => getPost(slug.value));
const more = computed(() =>
  post.value ? relatedPosts(post.value.slug, post.value.tags) : []
);

useHead({
  title: computed(() => (post.value ? `${post.value.title} - Ali arya` : t("blog"))),
  meta: [
    {
      name: "description",
      content: computed(() => post.value?.description || t("blogSubtitle")),
    },
  ],
});
</script>

<template>
  <div v-if="post">
    <PageHero :title="post.title" :description="post.description" />
    <article>
      <div class="prose page-content">
        <p>
          <NuxtLink to="/blog">{{ $t("blogBack") }}</NuxtLink>
          <span class="mx-2">·</span>
          <time>{{ formatDate(post.date) }}</time>
        </p>
        <p v-if="post.tags.length">
          {{ $t("blogTags") }}:
          {{ post.tags.join(", ") }}
        </p>
        <v-img
          v-if="post.thumbnail"
          :src="post.thumbnail"
          :alt="post.title"
          class="rounded mb-6"
          cover
          height="280"
        />
        <div class="blog-article-body" v-html="post.body" />
        <div v-if="more.length" class="mt-10">
          <p class="text-title" style="font-weight: 700">{{ $t("blogReadMore") }}</p>
          <p v-for="item in more" :key="item.slug">
            <NuxtLink :to="`/blog/${item.slug}`">{{ item.title }}</NuxtLink>
          </p>
        </div>
      </div>
    </article>
  </div>
  <div v-else>
    <PageHero :title="$t('blog')" :description="$t('blogNotFound')" />
    <article>
      <v-container>
        <EmptyState
          icon="ri:file-unknow-line"
          :title="$t('blogNotFound')"
        >
          <NuxtLink to="/blog">{{ $t("blogBack") }}</NuxtLink>
        </EmptyState>
      </v-container>
    </article>
  </div>
</template>
