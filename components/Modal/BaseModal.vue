<script setup>
import { Carousel, Slide, Navigation, Pagination } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
const props = defineProps({
  value: {
    type: Boolean,
  },
  item: {
    type: [Array, Object],
  },
});

const currentSlide = ref(0);
const slideTo = (val) => {
  currentSlide.value = val;
};
const settings = {
  dir: "rtl",
  snapAlign: "center",
};

const activeDesc = ref(true);
</script>

<template>
  <v-dialog v-model="dialog" class="base-modal">
    <v-card color="dark" class="base-modal-card rounded-xl pa-5"> 
      <div class="">
        <Carousel :items-to-show="2" :wrap-around="false">
          <Slide v-for="slide in item" :key="slide">
               <v-img aspect-ratio="4/3" class="rounded-xl" :src="'/assets/images/' + slide.img" cover></v-img>
          </Slide>
          <template #addons>
            <Navigation />
            <Pagination />
          </template>
        </Carousel>
      </div>

    </v-card>
  </v-dialog>
</template>
<style scoped>
.carousel__item {
  width: 100%;
  padding: 0 0.3rem;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.carousel__slide {
  padding: 10px;
}
</style>
