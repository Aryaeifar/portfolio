<script lang="ts" setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
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
    text: t("menuDesc"),
    link: " http://menuly.vip/flylounge",
    linkName: "menuly.vip/flylounge",
    frontTech: [t("HTML"), t("JavaScript"), t("VUE"), t("NUXT")],
    date: "Des 6, 2023",
  },
  {
    img: "shahrdari-main.png",
    title: t("137"),
    text: t("137Desc"),
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
    text: t("abdevaliDesc"),
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
    <!-- Card 1 -->
    <v-col cols="12" sm="6" lg="4">
      <div class="h-100">
        <v-card class="mx-auto projects-card h-100" max-width="374">
          <v-img
            cover
            height="250"
            src="/assets/images/minagoo-thumbnail.png"
            class="ma-3 rounded basecard-img"
          ></v-img>

          <v-card-item>
            <v-card-title>{{ $t("Minagoo") }}</v-card-title>
          </v-card-item>

          <v-card-text>
            <div>
              {{ $t("minagooDesc") }}
              <p class="mt-3">{{ $t("tech") }}:</p>
              <ul class="mx-3 my-3">
                <li style="font-size: 12px">{{ $t("HTML") }}</li>
                <li style="font-size: 12px">{{ $t("JavaScript") }}</li>
                <li style="font-size: 12px">{{ $t("VUE") }}</li>
                <li style="font-size: 12px">{{ $t("NUXT") }}</li>
              </ul>
            </div>
            <div>
              <a href="https://minagoo.ir/" target="_blank">minagoo.ir</a>
            </div>
          </v-card-text>
          <v-card-item>
            <v-card-subtitle>
              <div>
                <span class="me-1">Des 6, 2023</span>
              </div>
            </v-card-subtitle>
          </v-card-item>
        </v-card>
      </div>
    </v-col>

    <!-- Card 2 -->
    <v-col cols="12" sm="6" lg="4">
      <div class="h-100">
        <v-card class="mx-auto projects-card h-100" max-width="374">
          <v-img
            cover
            height="250"
            src="/assets/images/menu2.png"
            class="ma-3 rounded basecard-img"
          ></v-img>

          <v-card-item>
            <v-card-title>{{ $t("menu") }}</v-card-title>
          </v-card-item>

          <v-card-text>
            <div>
              {{ $t("menuDesc") }}
              <p class="mt-3">{{ $t("tech") }}:</p>
              <ul class="mx-3 my-3">
                <li style="font-size: 12px">{{ $t("HTML") }}</li>
                <li style="font-size: 12px">{{ $t("JavaScript") }}</li>
                <li style="font-size: 12px">{{ $t("VUE") }}</li>
                <li style="font-size: 12px">{{ $t("NUXT") }}</li>
              </ul>
            </div>
            <div>
              <a href="http://menuly.vip/flylounge" target="_blank">menuly.vip/flylounge</a>
            </div>
          </v-card-text>
          <v-card-item>
            <v-card-subtitle>
              <div>
                <span class="me-1">Des 6, 2023</span>
              </div>
            </v-card-subtitle>
          </v-card-item>
        </v-card>
      </div>
    </v-col>

    <!-- Card 3 -->
    <v-col cols="12" sm="6" lg="4">
      <div class="h-100">
        <v-card class="mx-auto projects-card h-100" max-width="374">
          <v-img
            cover
            height="250"
            src="/assets/images/shahrdari-main.png"
            class="ma-3 rounded basecard-img"
          ></v-img>

          <v-card-item>
            <v-card-title>{{ $t("137") }}</v-card-title>
          </v-card-item>

          <v-card-text>
            <div>
              {{ $t("137Desc") }}
              <p class="mt-3">{{ $t("tech") }}:</p>
              <ul class="mx-3 my-3">
                <li style="font-size: 12px">{{ $t("HTML") }}</li>
                <li style="font-size: 12px">{{ $t("JavaScript") }}</li>
                <li style="font-size: 12px">{{ $t("VUE") }}</li>
                <li style="font-size: 12px">{{ $t("NUXT") }}</li>
              </ul>
            </div>
            <div>
              <a href="http://kermanshah.137.demo.hemend.com/en" target="_blank">http://kermanshah.137.demo.hemend.com/en</a>
            </div>
          </v-card-text>
          <v-card-item>
            <v-card-subtitle>
              <div>
                <span class="me-1">Des 6, 2023</span>
              </div>
            </v-card-subtitle>
          </v-card-item>
        </v-card>
      </div>
    </v-col>

    <!-- Card 4 -->
    <v-col cols="12" sm="6" lg="4">
      <div class="h-100">
        <v-card class="mx-auto projects-card h-100" max-width="374">
          <v-img
            cover
            height="250"
            src="/assets/images/karkia.jpg"
            class="ma-3 rounded basecard-img"
          ></v-img>

          <v-card-item>
            <v-card-title>{{ $t("karkia") }}</v-card-title>
          </v-card-item>

          <v-card-text>
            <div>
              {{ $t("karkiaDesc") }}
              <p class="mt-3">{{ $t("tech") }}:</p>
              <ul class="mx-3 my-3">
                <li style="font-size: 12px">{{ $t("HTML") }}</li>
                <li style="font-size: 12px">{{ $t("JavaScript") }}</li>
              </ul>
            </div>
            <div>
              <a href="http://karkiamattress.com" target="_blank">Karkia</a>
            </div>
          </v-card-text>
          <v-card-item>
            <v-card-subtitle>
              <div>
                <span class="me-1">July 20, 2024</span>
              </div>
            </v-card-subtitle>
          </v-card-item>
        </v-card>
      </div>
    </v-col>

    <!-- Card 5 -->
    <v-col cols="12" sm="6" lg="4">
      <div class="h-100">
        <v-card class="mx-auto projects-card h-100" max-width="374">
          <v-img
            cover
            height="250"
            src="/assets/images/abdevali.png"
            class="ma-3 rounded basecard-img"
          ></v-img>

          <v-card-item>
            <v-card-title>{{ $t("abdevali") }}</v-card-title>
          </v-card-item>

          <v-card-text>
            <div>
              {{ $t("abdevaliDesc") }}
              <p class="mt-3">{{ $t("tech") }}:</p>
              <ul class="mx-3 my-3">
                <li style="font-size: 12px">{{ $t("HTML") }}</li>
                <li style="font-size: 12px">{{ $t("JavaScript") }}</li>
                <li style="font-size: 12px">{{ $t("VUE") }}</li>
                <li style="font-size: 12px">{{ $t("NUXT") }}</li>
              </ul>
            </div>
            <div>
              <a href="https://abdevali-tala.vercel.app" target="_blank">Abdevali Jewelry</a>
            </div>
          </v-card-text>
          <v-card-item>
            <v-card-subtitle>
              <div>
                <span class="me-1">July 20, 2024</span>
              </div>
            </v-card-subtitle>
          </v-card-item>
        </v-card>
      </div>
    </v-col>
  </v-row>
        </v-container>
      </div>
    </article>
  </div>
</template>
