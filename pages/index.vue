<script setup>
import { Icon } from '@iconify/vue';


</script>

<template>
  <div>
   
    <div class="prose mb-8">
      <h1 class="text-h3 text-title">{{ $t('name') }}</h1>
    </div>
    <article>
      <div class="prose">
        <p style="--stagger: 1" data-animate>
         {{ $t('para-one') }}
        </p>
        <!-- <p style="--stagger: 2" data-animate>
         {{ $t("Open") }} <span class="text-title" style="font-weight: 700;">{{ $t('Work') }}</span>.
        </p> -->
        <p style="--stagger: 3" data-animate>
          {{ $t("para-two") }}
        </p>
        <div style="--stagger: 4" data-animate>
          {{ $t("Skills") }}:
        <ul>
          <li> {{ $t("JavaScript") }}</li>
          <li> {{ $t("HTML") }}</li>
          <li> {{ $t("SCSS") }}</li>
          <li> {{ $t("VUE") }}</li>
          <li> {{ $t("NUXT") }}</li>
          <li> {{ $t("Bootstrap") }}</li>
          <li> {{ $t("VUETIFY") }}</li>
          <li> {{ $t("TAILWIND") }}</li>
          <li> {{ $t("SHADCN") }}</li>
          <li> {{ $t("GIT") }}</li>
        </ul>
        </div>
       
        <p style="--stagger: 4" data-animate>
          {{ $t("para-three") }}
        </p>
        <p style="--stagger: 5" data-animate>{{ $t("Find") }}</p>
        <p style="--stagger: 6" data-animate>
         <div class="d-flex">
          <nuxt-link href="https://github.com/Aryaeifar" target="_blank" >
            <span class="d-flex align-center text-decoration-underline me-2">
            <Icon icon="mdi:github" width="20" height="20" class="me-1"></Icon>
            {{ $t("GitHub") }}
          </span>
          </nuxt-link>
          <nuxt-link href="https://twitter.com/ali_aryaeifar" target="_blank" >
            <span class="d-flex align-center text-decoration-underline me-2">
            <Icon icon="ri:twitter-x-line" width="20" height="20" class="me-1"></Icon>
            {{ $t("Twitter") }}
          </span>
          </nuxt-link>
          <nuxt-link href="https://instagram.com/ali.aryaeifar?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr" target="_blank" >
            <span class="d-flex align-center text-decoration-underline me-2">
            <Icon icon="ri:instagram-line" width="20" height="20" class="me-1"></Icon>
            {{ $t("Instagram") }}
          </span>
          </nuxt-link>
          <nuxt-link href="https://www.linkedin.com/in/ali-aryaeifar-a38b87195?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" >
            <span class="d-flex align-center text-decoration-underline me-2">
            <Icon icon="ph:linkedin-logo" width="20" height="20" class="me-1"></Icon>
            {{ $t("Linkedin") }}
          </span>
          </nuxt-link>
          
         </div>
        </p>
        <p style="--stagger: 7" data-animate>
          {{ $t("Connect") }} 🤝
        </p>
      </div>
    </article>
  </div>
</template>
