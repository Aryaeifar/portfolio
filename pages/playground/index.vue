<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import { Icon } from "@iconify/vue";

const { t } = useI18n();
useHead({
  title: "Playground - Ali arya",
  meta: [{ name: "description", content: "My playground." }],
});
</script>

<template>
  <div>
    <div class="prose mb-8">
      <h1 class="text-h3 text-title">{{ $t("Playground") }}</h1>
    </div>
    <article>
      <div class="">
        <v-container>
          <v-row>
            <v-col cols="12" md="4">
              <NuxtLink
                data-v-8cb24504=""
                class="item relative d-flex align-center"
                to="https://github.com/Aryaeifar/vue-polygon-drawer"
                target="_blank"
                title="Vue Polygon Drawer">
                <div data-v-8cb24504="" class="item-icon">
                  <Icon icon="mdi:shape" width="50" height="50" class=""></Icon>
                </div>
                <div data-v-8cb24504="" class="d-flex flex-column">
                  <div data-v-8cb24504="" class="title">Vue Polygon Drawer</div>
                  <div data-v-8cb24504="" class="desc">
                    {{ $t('polygon-drawer-desc') }}
                  </div>
                </div>
              </NuxtLink>
            </v-col>
            <v-col cols="12" md="4">
              <NuxtLink
                data-v-8cb24504=""
                class="item relative d-flex align-center"
                to="https://github.com/Aryaeifar/vue-video-subtitle-sync"
                target="_blank"
                title="Vue Video Subtitle">
                <div data-v-8cb24504="" class="item-icon">
                  <Icon icon="mdi:video" width="50" height="50" class=""></Icon>
                </div>
                <div data-v-8cb24504="" class="d-flex flex-column">
                  <div data-v-8cb24504="" class="title">vue-video-subtitle-sync</div>
                  <div data-v-8cb24504="" class="desc">
                    {{ $t('video-desc') }}
                  </div>
                </div>
              </NuxtLink>
            </v-col>
            <v-col cols="12" md="4">
              <NuxtLink
                data-v-8cb24504=""
                class="item relative d-flex align-center"
                to="https://github.com/Aryaeifar/english-digits"
                target="_blank"
                title="v-english-number">
                <div data-v-8cb24504="" class="item-icon">
                  <Icon icon="mdi:numeric" width="50" height="50" class=""></Icon>
                </div>
                <div data-v-8cb24504="" class="d-flex flex-column">
                  <div data-v-8cb24504="" class="title">v-english-number</div>
                  <div data-v-8cb24504="" class="desc">
                    {{ $t('english-digit-desc') }}
                  </div>
                </div>
              </NuxtLink>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </article>
  </div>
</template>
<style scoped>
.item {
  background: transparent;
  font-size: 1.1rem;
  width: 350px;
  max-width: 100%;
  padding: 0.5rem 0.875rem 0.875rem;
  border-radius: 6px;

  transition: 0.2s all ease-out;
  text-decoration: none;
  border-bottom: none !important;
  opacity: 0.6;
}
.item:hover {
  background: #8881 !important;
  opacity: 1 !important;
}
.item-icon {
  padding-top: 0.5rem;
  padding-right: 1.25rem;
  padding-left: 1.25rem;

  opacity: 0.5;
  font-size: 1.875rem;
  line-height: 2.25rem;
}
.title {
  font-size: 1.1rem;
}
.desc {
  opacity: 0.5;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.25rem;
}
</style>
