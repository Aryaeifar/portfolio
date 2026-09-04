<script setup lang="ts">
const { t } = useI18n();
const { sortedPosts, localize, formatDate } = useBlog();

const posts = computed(() => sortedPosts.value.map(localize));

useHead({
  title: computed(() => `${t("blog")} - Ali arya`),
  meta: [{ name: "description", content: computed(() => t("blogSubtitle")) }],
});
</script>

<template>
  <div>
    <PageHero :title="$t('blog')" :description="$t('blogSubtitle')" />
    <article>
      <div>
        <v-container>
          <v-row>
            <v-col
              v-for="post in posts"
              :key="post.slug"
              cols="12"
              sm="6"
              lg="4"
            >
              <NuxtLink :to="`/blog/${post.slug}`" class="h-100 d-block">
                <v-card class="mx-auto projects-card h-100" max-width="374">
                  <v-img
                    v-if="post.thumbnail"
                    cover
                    height="250"
                    :src="post.thumbnail"
                    class="ma-3 rounded basecard-img"
                  />
                  <v-card-item>
                    <v-card-title>{{ post.title }}</v-card-title>
                  </v-card-item>
                  <v-card-text>
                    <div>
                      {{ post.description }}
                      <p v-if="post.tags.length" class="mt-3">{{ $t("blogTags") }}:</p>
                      <ul v-if="post.tags.length" class="mx-3 my-3">
                        <li
                          v-for="tag in post.tags"
                          :key="tag"
                          style="font-size: 12px"
                        >
                          {{ tag }}
                        </li>
                      </ul>
                    </div>
                  </v-card-text>
                  <v-card-item>
                    <v-card-subtitle>
                      <span class="me-1">{{ formatDate(post.date) }}</span>
                    </v-card-subtitle>
                  </v-card-item>
                </v-card>
              </NuxtLink>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </article>
  </div>
</template>
