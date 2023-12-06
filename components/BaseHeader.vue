<script setup>
import { useTheme } from "vuetify";
import { Icon } from "@iconify/vue";
const theme = useTheme();
function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
}
</script>

<template>
  <div class="header d-flex justify-space-between align-center">
    <div>
      <span class="mdi mdi-vuejs text-h5"></span>
      <span class="mdi mdi-nuxt text-h5"></span>
    </div>
    <div class="nav">
      <ul class="d-flex">
        <li class="nav-item mx-2">
          <nuxt-link to="/" class="nav-link text-primary"> Me </nuxt-link>
        </li>
        <li class="nav-item mx-2">
          <nuxt-link to="/blog" class="nav-link text-primary"> Blog </nuxt-link>
        </li>
        <li class="nav-item mx-2">
          <nuxt-link to="/projects" class="nav-link text-primary">Projects</nuxt-link>
        </li>
        <li class="nav-item mx-2">
          <nuxt-link href="https://twitter.com/ali_aryaeifar" target="_blank"  class="nav-link text-primary">
            <Icon icon="ri:twitter-x-line" />
          </nuxt-link>
        </li>
        <li class="nav-item mx-2">
          <nuxt-link href="https://github.com/Aryaeifar" target="_blank"  class="nav-link text-primary">
            <Icon icon="ri:github-fill" />
          </nuxt-link>
        </li>
        <li class="nav-item mx-2 text-primary" style="cursor: pointer">
          <div>
            <Icon :icon="theme.global.name.value == 'light' ? 'ri:sun-line' : 'ri:moon-fill'" @click="toggleTheme" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

