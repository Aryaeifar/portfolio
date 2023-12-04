// plugins/vuetify.js
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    ssr: false,
    components,
    directives,
    theme: {
      defaultTheme: 'dark',
      themes: {
        light: {
          colors:{
            primary:"#000000",
            title:"#000000"
          }
        },
        dark: {
          colors:{
            primary:"#e5e7eb",
            dark:"#050505",
            title:"#ffffff"
          }
        },
        
      }
    }
  })
  nuxtApp.vueApp.use(vuetify)
})