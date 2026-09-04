<script setup lang="ts">
import { changelogEntries, type ChangelogLocale } from "~/data/changelog";

const { t, locale } = useI18n();
const lang = computed<ChangelogLocale>(() =>
  locale.value?.startsWith("fa") ? "fa" : "en"
);

const formatDate = (date: string) => {
  const loc = lang.value === "fa" ? "fa-IR" : "en-US";
  return new Date(date).toLocaleDateString(loc, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const entries = computed(() =>
  [...changelogEntries].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
);

useHead({
  title: computed(() => `${t("changelog")} - Ali arya`),
  meta: [{ name: "description", content: computed(() => t("changelogSubtitle")) }],
});
</script>

<template>
  <div>
    <PageHero :title="$t('changelog')" :description="$t('changelogSubtitle')" />
    <div class="changelog-page">
      <div
        v-for="entry in entries"
        :key="entry.date + entry.version"
        class="changelog-entry"
      >
        <div class="changelog-meta">
          <time>{{ formatDate(entry.date) }}</time>
          <div class="changelog-version">{{ entry.version }}</div>
        </div>

        <div class="changelog-content">
          <div class="changelog-rail">
            <span class="changelog-dot" />
          </div>
          <h2>{{ entry.title[lang] }}</h2>
          <div class="changelog-tags">
            <span v-for="tag in entry.tags" :key="tag">{{ tag }}</span>
          </div>
          <ul class="changelog-highlights">
            <li v-for="item in entry.highlights[lang]" :key="item">{{ item }}</li>
          </ul>
          <ChangelogAccordion
            :features="entry.features[lang]"
            :fixes="entry.fixes[lang]"
          />
        </div>
      </div>
    </div>
  </div>
</template>
