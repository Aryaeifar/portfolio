<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
useHead({
  title: "Projects - Ali arya",
  meta: [{ name: "description", content: "My amazing site." }],
});
const projects = ref([
  {
    img: "minagoo-thumbnail.png",
    title: t("Minagoo"),
    text: t("minagooDesc"),
    link: "minagoo.ir",
    linkName: "minagoo.ir",
    frontTech: [t("HTML"), t("JavaScript"), t("VUE"), t("NUXT")],
    date: "Des 6, 2023",
  },
  {
    img: "menu2.png",
    title: t("menu"),
    text: (t("menuDesc")),
    link: " http://menuly.vip/flylounge",
    linkName: "menuly.vip/flylounge",
    frontTech: [t("HTML"), t("JavaScript"), t("VUE"), t("NUXT")],
    date: "Des 6, 2023",
  },
  {
    img: "shahrdari-main.png",
    title: t("137"),
    text:t("137Desc"),
    link: "http://kermanshah.137.demo.hemend.com/en",
    linkName: "http://kermanshah.137.demo.hemend.com/en",
    frontTech: [t("HTML"), t("JavaScript"), t("VUE"), t("NUXT")],
    date: "Des 6, 2023",
  },
  {
    img: "karkia.jpg",
    title: t("karkia"),
    text: t("karkiaDesc"),
    link: "http://karkiamattress.com",
    linkName: "Karkia",
    frontTech: [t("HTML"), t("JavaScript")],
    date: "July 20, 2024",
  },
  {
    img: "abdevali.png",
    title: t("abdevali"),
    text: " The Abdevali Jewelry website serves a dual purpose as both a professional portfolio and an e-commerce platform. The  shop features product listings with descriptions, prices,  and images. Allows users to add products to a shopping  cart and proceed through a secure checkout process to  complete their purchases.",
    link: "abdevali-tala.vercel.app",
    linkName: "Abdevali Jewelry",
    frontTech: [t("HTML"), t("JavaScript"), t("VUE"), t("NUXT")],
    date: "July 20, 2024",
  },
]);
</script>

<template>
  <div>
    <div class="prose mb-8">
      <h1 class="text-h3 text-title">{{ $t("projects") }}</h1>
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
