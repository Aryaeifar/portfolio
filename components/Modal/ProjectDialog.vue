<script setup>
import { Carousel, Slide, Navigation, Pagination } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

defineProps({
  title: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  images: {
    type: Array,
    default: () => [],
  },
});

const model = defineModel({ type: Boolean, default: false });
</script>

<template>
  <v-dialog v-model="model" max-width="860" scrollable>
    <v-card class="rounded-xl pa-4 pa-sm-6">
      <div class="d-flex align-start justify-space-between mb-4 ga-4">
        <v-card-title class="pa-0 text-h5 text-wrap">{{ title }}</v-card-title>
        <v-btn icon variant="text" @click="model = false" aria-label="Close">
          <span style="font-size: 1.4rem; line-height: 1">×</span>
        </v-btn>
      </div>

      <ClientOnly>
        <Carousel :items-to-show="1" :wrap-around="true">
          <Slide v-for="src in images" :key="src">
            <v-img
              :src="src"
              cover
              height="360"
              class="rounded-xl"
              alt=""
            />
          </Slide>
          <template #addons>
            <Navigation />
            <Pagination />
          </template>
        </Carousel>
      </ClientOnly>

      <v-card-text class="px-0 pt-6 pb-0">
        <p class="text-body-1">{{ description }}</p>
        <slot />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<style scoped>
.carousel__slide {
  padding: 0 4px;
}
</style>
