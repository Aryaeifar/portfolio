export default defineNuxtConfig({
  vue: {
		compilerOptions: {
			isCustomElement: (tag) => tag === 'iconify-icon',
		},
	},
  ssr: false,
  devtools: { enabled: false },
  css: ["vuetify/lib/styles/main.sass", "@mdi/font/css/materialdesignicons.min.css", "@/assets/scss/app.scss"],
  build: {
    transpile: ["vuetify"],
  },
  modules: ["@vueuse/nuxt"],
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
});
