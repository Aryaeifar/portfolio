<script setup>
import { useTheme } from "vuetify";
import { Icon } from "@iconify/vue";
const theme = useTheme();

function toggleTheme() {
  const newTheme = theme.global.current.value.dark ? "light" : "dark";
  theme.global.name.value = newTheme;
  localStorage.setItem("theme", newTheme);
}

onMounted(() => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    theme.global.name.value = savedTheme;
  }
});
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
        <!-- <li class="nav-item mx-2">
          <nuxt-link to="/blog" class="nav-link text-primary"> Blog </nuxt-link>
        </li> -->
        <li class="nav-item mx-2">
          <nuxt-link to="/projects" class="nav-link text-primary"
            >Projects</nuxt-link
          >
        </li>
        <li class="nav-item mx-2">
          <nuxt-link
            href="https://twitter.com/ali_aryaeifar"
            target="_blank"
            class="nav-link text-primary"
          >
            <Icon icon="ri:twitter-x-line" />
          </nuxt-link>
        </li>
        <li class="nav-item mx-2">
          <nuxt-link
            href="https://github.com/Aryaeifar"
            target="_blank"
            class="nav-link text-primary"
          >
            <Icon icon="ri:github-fill" />
          </nuxt-link>
        </li>
        <li class="nav-item mx-2 text-primary" style="cursor: pointer">
          <div style="position: relative;">
            <Transition name="slide-up">
              <Icon
                v-if="theme.global.name.value == 'light'"
                icon="ri:sun-line"
                @click="toggleTheme"
                style="position: absolute; top: 2px;"
              />
              <Icon
                v-else-if="theme.global.name.value == 'dark'"
                icon="ri:moon-fill"
                @click="toggleTheme"
                style="position: absolute; top: 2px;"
              />
            </Transition>
          </div>
          <!-- <Icon :icon=" theme.global.name.value == 'light'  ? 'ri:sun-line': 'ri:moon-fill'"@click="toggleTheme"/> -->
        </li>
      </ul>
    </div>
  </div>
</template>
<style>
.path {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: dash 5s linear alternate infinite;
}

@keyframes dash {
  from {
    stroke-dashoffset: 822;
  }
  to {
    stroke-dashoffset: 0;
  }
}
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.5s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
