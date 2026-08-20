<script lang="ts" setup>
import { useI18n } from "vue-i18n";
// definePageMeta({
//   middleware: 'check'
// })
const { t } = useI18n();
useHead({
  title: "Projects - Ali arya",
  meta: [{ name: "description", content: "My amazing site." }],
});

const doomDialog = ref(false);
const doomImages = [
  "/assets/images/doom-cover.png",
  "/assets/images/doom-gameplay.png",
  "/assets/images/doom-start.png",
  "/assets/images/doom-died.png",
];

const projects = ref([
  {
    img: "doom-cover.png",
    title: t("doom"),
    text: t("doomDesc"),
    link: "",
    linkName: "",
    frontTech: [t("HTML"), t("JavaScript"), t("REACT"), t("NEXT.JS"), t("AI")],
    date: "Aug 20, 2026",
  },
  {
    img: "minagoo.jpg",
    title: t("Minagoo"),
    text: t("minagooDesc"),
    link: "minagoo.ir",
    linkName: "minagoo.ir",
    frontTech: [t("HTML"), t("JavaScript"), t("VUE"), t("NUXT")],
    date: "Des 6, 2023",
  },
  {
    img: "digital-menu.jpg",
    title: t("menu"),
    text: t("menuDesc"),
    link: " http://menuly.vip/flylounge",
    linkName: "menuly.vip/flylounge",
    frontTech: [t("HTML"), t("JavaScript"), t("VUE"), t("NUXT")],
    date: "Des 6, 2023",
  },
  {
    img: "137.jpg",
    title: t("137"),
    text: t("137Desc"),
    link: "http://kermanshah.137.demo.hemend.com/en",
    linkName: "http://kermanshah.137.demo.hemend.com/en",
    frontTech: [t("HTML"), t("JavaScript"), t("VUE"), t("NUXT")],
    date: "Des 6, 2023",
  },
  {
    img: "karkia-cover.jpg",
    title: t("karkia"),
    text: t("karkiaDesc"),
    link: "http://karkiamattress.com",
    linkName: "Karkia",
    frontTech: [t("HTML"), t("JavaScript")],
    date: "July 20, 2024",
  },
  {
    img: "abdevali.jpg",
    title: t("abdevali"),
    text: t("abdevaliDesc"),
    link: "abdevali-tala.vercel.app",
    linkName: "Abdevali Jewelry",
    frontTech: [t("HTML"), t("JavaScript"), t("VUE"), t("NUXT")],
    date: "July 20, 2024",
  },
  {
    img: "b2b.jpg",
    title: t("b2b"),
    text: t("b2bDesc"),
    link: "b2b.app",
    linkName: "B2B meeting",
    frontTech: [t("HTML"), t("JavaScript"), t("VUE"), t("NUXT")],
    date: "Dec 15, 2025",
  },
  {
    img: "learning-next.jpg",
    title: t("learningNext"),
    text: t("learningNextDesc"),
    link: "https://t-learning.net",
    linkName: "t-learning.net",
    frontTech: [t("HTML"), t("JavaScript"), t("REACT"), t("NEXT.JS")],
    date: "Aug 19, 2026",
  },
  {
    img: "majara.jpg",
    title: t("majara"),
    text: t("majaraDesc"),
    link: "https://majara.io",
    linkName: "majara.io",
    frontTech: [t("HTML"), t("JavaScript"), t("VUE2"), t("NUXT2")],
    date: "2024",
  },
]);
const newTask = ref('')
const { tasksList, addTodo } = useTodo()
const addTask = () => {
  if (newTask.value == '' || !newTask.value) {
    alert('پر کنید')
  } else {
    addTodo({
      id: tasksList.value.length + 1,
      text: newTask.value
    })
  }
}
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
            <!-- Doom FPS -->
            <v-col cols="12" sm="6" lg="4">
              <div class="h-100">
                <v-card
                  class="mx-auto projects-card h-100"
                  max-width="374"
                  @click="doomDialog = true"
                >
                  <v-img
                    cover
                    height="250"
                    src="/assets/images/doom-cover.png"
                    class="ma-3 rounded basecard-img"
                  ></v-img>

                  <v-card-item>
                    <v-card-title>{{ $t("doom") }}</v-card-title>
                  </v-card-item>

                  <v-card-text>
                    <div>
                      {{ $t("doomDesc") }}
                      <p class="mt-3">{{ $t("tech") }}:</p>
                      <ul class="mx-3 my-3">
                        <li style="font-size: 12px">{{ $t("HTML") }}</li>
                        <li style="font-size: 12px">{{ $t("JavaScript") }}</li>
                        <li style="font-size: 12px">{{ $t("REACT") }}</li>
                        <li style="font-size: 12px">{{ $t("NEXT.JS") }}</li>
                        <li style="font-size: 12px">{{ $t("AI") }}</li>
                      </ul>
                    </div>
                  </v-card-text>
                  <v-card-item>
                    <v-card-subtitle>
                      <div>
                        <span class="me-1">Aug 20, 2026</span>
                      </div>
                    </v-card-subtitle>
                  </v-card-item>
                </v-card>
              </div>
            </v-col>

            <!-- Card 8 -->
            <v-col cols="12" sm="6" lg="4">
              <div class="h-100">
                <v-card class="mx-auto projects-card h-100" max-width="374">
                  <v-img cover height="250" src="/assets/images/learning-next.jpg"
                    class="ma-3 rounded basecard-img"></v-img>

                  <v-card-item>
                    <v-card-title>{{ $t("learningNext") }}</v-card-title>
                  </v-card-item>

                  <v-card-text>
                    <div>
                      {{ $t("learningNextDesc") }}
                      <p class="mt-3">{{ $t("tech") }}:</p>
                      <ul class="mx-3 my-3">
                        <li style="font-size: 12px">{{ $t("HTML") }}</li>
                        <li style="font-size: 12px">{{ $t("JavaScript") }}</li>
                        <li style="font-size: 12px">{{ $t("REACT") }}</li>
                        <li style="font-size: 12px">{{ $t("NEXT.JS") }}</li>
                      </ul>
                    </div>
                    <div>
                      <a href="https://t-learning.net" target="_blank">t-learning.net</a>
                    </div>
                  </v-card-text>
                  <v-card-item>
                    <v-card-subtitle>
                    <div>
                      <span class="me-1">Aug 19, 2026</span>
                    </div>
                  </v-card-subtitle>
                </v-card-item>
              </v-card>
            </div>
          </v-col>

            <!-- Majara -->
            <v-col cols="12" sm="6" lg="4">
              <div class="h-100">
                <v-card class="mx-auto projects-card h-100" max-width="374">
                  <v-img cover height="250" src="/assets/images/majara.jpg"
                    class="ma-3 rounded basecard-img"></v-img>

                  <v-card-item>
                    <v-card-title>{{ $t("majara") }}</v-card-title>
                  </v-card-item>

                  <v-card-text>
                    <div>
                      {{ $t("majaraDesc") }}
                      <p class="mt-3">{{ $t("tech") }}:</p>
                      <ul class="mx-3 my-3">
                        <li style="font-size: 12px">{{ $t("HTML") }}</li>
                        <li style="font-size: 12px">{{ $t("JavaScript") }}</li>
                        <li style="font-size: 12px">{{ $t("VUE2") }}</li>
                        <li style="font-size: 12px">{{ $t("NUXT2") }}</li>
                      </ul>
                    </div>
                    <div>
                      <a href="https://majara.io" target="_blank">majara.io</a>
                    </div>
                  </v-card-text>
                  <v-card-item>
                    <v-card-subtitle>
                      <div>
                        <span class="me-1">2024</span>
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
                  <v-img cover height="250" src="/assets/images/karkia-cover.jpg" class="ma-3 rounded basecard-img"></v-img>

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
                  <v-img cover height="250" src="/assets/images/abdevali.jpg" class="ma-3 rounded basecard-img"></v-img>

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
                      <a href="https://abdevali.com" target="_blank">Abdevali Jewelry</a>
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
            <!-- Card 1 -->
            <v-col cols="12" sm="6" lg="4">
              <div class="h-100">
                <v-card class="mx-auto projects-card h-100" max-width="374">
                  <v-img cover height="250" src="/assets/images/minagoo.jpg"
                    class="ma-3 rounded basecard-img"></v-img>

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
                  <v-img cover height="250" src="/assets/images/digital-menu.jpg"
                    class="ma-3 rounded basecard-img"></v-img>

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
                  <v-img cover height="250" src="/assets/images/137.jpg"
                    class="ma-3 rounded basecard-img"></v-img>

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
                      <a href="http://kermanshah.137.demo.hemend.com/en"
                        target="_blank">http://kermanshah.137.demo.hemend.com/en</a>
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



            <!-- Card 6 -->
            <v-col cols="12" sm="6" lg="4">
              <div class="h-100">
                <v-card class="mx-auto projects-card h-100" max-width="374">
                  <v-img cover height="250" src="/assets/images/khadamati.jpg"
                    class="ma-3 rounded basecard-img"></v-img>

                  <v-card-item>
                    <v-card-title>{{ $t("khadamati") }}</v-card-title>
                  </v-card-item>

                  <v-card-text>
                    <div>
                      {{ $t("khadamatiDesc") }}
                      <p class="mt-3">{{ $t("tech") }}:</p>
                      <ul class="mx-3 my-3">
                        <li style="font-size: 12px">{{ $t("HTML") }}</li>
                        <li style="font-size: 12px">{{ $t("JavaScript") }}</li>
                        <li style="font-size: 12px">{{ $t("VUE") }}</li>
                        <li style="font-size: 12px">{{ $t("NUXT") }}</li>
                      </ul>
                    </div>
                    <div>
                      <a href="https://khadamati.io" target="_blank">Khadamati super application</a>
                    </div>
                  </v-card-text>
                  <v-card-item>
                    <v-card-subtitle>
                      <div>
                        <span class="me-1">Feb 28, 2025</span>
                      </div>
                    </v-card-subtitle>
                  </v-card-item>
                </v-card>
              </div>
            </v-col>

            <v-col cols="12" sm="6" lg="4">
              <div class="h-100">
                <v-card class="mx-auto projects-card h-100" max-width="374">
                  <v-img cover height="250" src="/assets/images/b2b.jpg" class="ma-3 rounded basecard-img"></v-img>

                  <v-card-item>
                    <v-card-title>{{ $t("b2b") }}</v-card-title>
                  </v-card-item>

                  <v-card-text>
                    <div>
                      {{ $t("b2bdesc") }}
                      <p class="mt-3">{{ $t("tech") }}:</p>
                      <ul class="mx-3 my-3">
                        <li style="font-size: 12px">{{ $t("HTML") }}</li>
                        <li style="font-size: 12px">{{ $t("JavaScript") }}</li>
                        <li style="font-size: 12px">{{ $t("VUE") }}</li>
                        <li style="font-size: 12px">{{ $t("NUXT") }}</li>
                      </ul>
                    </div>
                    <div>
                      <a href="https://khadamati.io" target="_blank">B2b Online Meeting sesions</a>
                    </div>
                  </v-card-text>
                  <v-card-item>
                    <v-card-subtitle>
                      <div>
                        <span class="me-1">Des 15, 2025</span>
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

    <ModalProjectDialog
      v-model="doomDialog"
      :title="$t('doom')"
      :description="$t('doomDialogDesc')"
      :images="doomImages"
    >
      <p class="mt-4">{{ $t("tech") }}:</p>
      <ul class="mx-3 my-3">
        <li>{{ $t("HTML") }}</li>
        <li>{{ $t("JavaScript") }}</li>
        <li>{{ $t("REACT") }}</li>
        <li>{{ $t("NEXT.JS") }}</li>
        <li>{{ $t("AI") }}</li>
      </ul>
    </ModalProjectDialog>
  </div>
</template>
