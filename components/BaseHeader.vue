<script setup>
import { useTheme } from "vuetify";
import { Icon } from "@iconify/vue";
const { locale, setLocale } = useI18n();
const isEnglish = ref(true);
const isPersian = ref(false);

// THEME

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

// TRANSLATE

const getLanguageLabel = (locale) => {
  switch (locale) {
    case 'fa':
      return 'FA';
    case 'en':
    default:
      return 'EN';
  }
};

const updateDirectionClass = (newLocale) => {
  document.body.classList.toggle('rtl', newLocale === 'fa');
};

function changeLanguage(newLocale) {
  setLocale(newLocale);
  localStorage.setItem('preferred-lang', newLocale);
  const newLabel = getLanguageLabel(newLocale);
  localStorage.setItem('preferred-lang-label', newLabel);
  updateDirectionClass(newLocale);
}
onMounted(() => {
  const savedLocale = localStorage.getItem('preferred-lang') || 'en';
  setLocale(savedLocale);
  updateDirectionClass(savedLocale);
});
watch(() => locale.value, (newLocale) => {
  updateDirectionClass(newLocale);
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
          <nuxt-link to="/" class="nav-link text-primary"> {{ $t('me') }} </nuxt-link>
        </li>
        <li class="nav-item mx-2">
          <nuxt-link to="/projects" class="nav-link text-primary"
            >{{ $t('Projects') }}</nuxt-link
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
        <li
          class="nav-item mx-3 text-primary"
          @click="toggleLang"
          style="font-size: 14px; cursor: pointer"
          role="button"
        >
          <div style="position: relative">
            <Transition name="slide-up">
              <div
                v-if="locale === 'en'"
                style="position: absolute; top: 0px; left: -9px"
                @click="changeLanguage('fa')"
              >
                EN
              </div>
              <div
                v-else-if="locale === 'fa'"
                style="position: absolute; top: 0px; left: -9px"
                @click="changeLanguage('en')"
              >
                FA
              </div>
            </Transition>
          </div>
        </li>
        <li class="nav-item mx-2 text-primary" style="cursor: pointer">
          <div style="position: relative">
            <Transition name="slide-up">
              <Icon
                v-if="theme.global.name.value == 'light'"
                icon="ri:sun-line"
                @click="toggleTheme"
                style="position: absolute; top: 2px"
              />
              <Icon
                v-else-if="theme.global.name.value == 'dark'"
                icon="ri:moon-fill"
                @click="toggleTheme"
                style="position: absolute; top: 2px"
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
