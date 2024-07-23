export default defineNuxtConfig({
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag === "iconify-icon",
    },
  },
  ssr: false,
  devtools: { enabled: false },
  app: {
    layoutTransition: { name: "layout", mode: "out-in" },
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      charset: "utf-8",
      title: "Aryaeifar",
    },
  },
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
    "@/assets/scss/app.scss",
  ],
  build: {
    transpile: ["vuetify"],
  },
  modules: ["@vueuse/nuxt", "@nuxtjs/i18n"],
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  i18n: {
    vueI18n: "./i18n.config.ts", // if you are using custom path, default
  },
});