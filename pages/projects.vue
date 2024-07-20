<script lang="ts" setup>
useHead({
  title: "Projects - Ali arya",
  meta: [{ name: "description", content: "My amazing site." }],
});
const projects = ref([
  {
    img: "minagoo-thumbnail.png",
    title: "Minagoo",
    text: "Minagoo is an online English learning platform to Improve your language skills and it can be used for any age, level, and nationality. ",
    link: "minagoo.ir",
    linkName: "minagoo.ir",
    frontTech: ["HTML-CSS", "JavaScript", "VUE", "NUXT"],
    date: "Des 6, 2023",
  },
  {
    img: "flylounge-menu.png",
    title: "Digital menu service",
    text: " A restaurant cafe menu with a beautiful design and interesting features such as table reservation, choosing food from the menu ",
    link: " http://menuly.vip/flylounge",
    linkName: "menuly.vip/flylounge",
    frontTech: ["HTML-CSS", "JavaScript", "VUE", "NUXT"],
    date: "Des 6, 2023",
  },
  {
    img: "shahrdari-main.png",
    title: "137",
    text: "  A system for municipalities with the possibility of  registering citizens' reports in the city and following up on reports and solving urban problems by managers ",
    link: "http://kermanshah.137.demo.hemend.com/en",
    linkName: "http://kermanshah.137.demo.hemend.com/en",
    frontTech: ["HTML-CSS", "JavaScript", "VUE", "NUXT"],
    date: "Des 6, 2023",
  },
  {
    img: "karkia.jpg",
    title: "Karkia",
    text: "  The Karkia Mattress website is designed to streamline the  mattress shopping experience by offering a robust platform    for browsing, learning about, and purchasing high-quality mattresses. It combines detailed product information,  customer support, and e-commerce functionality to meet theneeds of modern consumers.",
    link: "http://karkiamattress.com",
    linkName: "Karkia",
    frontTech: ["HTML-CSS", "JavaScript"],
    date: "July 20, 2024",
  },
  {
    img: "abdevali.png",
    title: "Abdevali Jewelry",
    text: " The Abdevali Jewelry website serves a dual purpose as both a professional portfolio and an e-commerce platform. The  shop features product listings with descriptions, prices,  and images. Allows users to add products to a shopping  cart and proceed through a secure checkout process to  complete their purchases.",
    link: "abdevali-tala.vercel.app",
    linkName: "Abdevali Jewelry",
    frontTech: ["HTML-CSS", "JavaScript" , "VUE", "NUXT"],
    date: "July 20, 2024",
  },
]);
</script>

<template>
  <div>
    <div class="prose mb-8">
      <h1 class="text-h3 text-title">Projects</h1>
    </div>
    <article>
      <div class="">
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" lg="4" v-for="(item, i) in projects" :key="i">
              <BaseCard :items="item" :style="['--stagger:' + (i + 1)]" data-animate />
            </v-col>
          </v-row>
        </v-container>
      </div>
    </article>
  </div>
</template>
