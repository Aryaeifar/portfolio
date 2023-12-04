<script setup>
import { Icon } from '@iconify/vue';

</script>

<template>
  <div>
    <div class="prose mb8">
      <h1 class="text-h3 text-title">Ali Aryaeifar</h1>
    </div>
    <article>
      <div class="prose">
        <p style="--stagger: 1" data-animate>
          I'm Ali aryaei, an enthusiastic Frontend Developer with a solid three years of experience in crafting dynamic
          and intuitive user interfaces using Vue and Nuxt.
        </p>
        <p style="--stagger: 2" data-animate>
          I take immense pride in my ability to bring designs to life and create seamless web experiences that captivate
          users. From building interactive components to optimizing performance, my passion for frontend development
          drives me to stay abreast of the latest technologies and best practices.
        </p>
        <p style="--stagger: 3" data-animate>
          Let's connect and collaborate on exciting projects that push the boundaries of web development.
        </p>
        <p style="--stagger: 4" data-animate>Find me on</p>
        <p style="--stagger: 5" data-animate>
         <div class="d-flex">
          <nuxt-link to="/">
            <span class="d-flex align-center text-decoration-underline me-2">
            <Icon icon="mdi:github" width="20" height="20" class="me-1"></Icon>
            GitHub
          </span>
          </nuxt-link>
          <nuxt-link to="/">
            <span class="d-flex align-center text-decoration-underline me-2">
            <Icon icon="ri:twitter-x-line" width="20" height="20" class="me-1"></Icon>
            Twitter
          </span>
          </nuxt-link>
          <nuxt-link to="/">
            <span class="d-flex align-center text-decoration-underline me-2">
            <Icon icon="ri:instagram-line" width="20" height="20" class="me-1"></Icon>
            Instagram
          </span>
          </nuxt-link>
          <nuxt-link to="/">
            <span class="d-flex align-center text-decoration-underline me-2">
            <Icon icon="ph:linkedin-logo" width="20" height="20" class="me-1"></Icon>
            Linkedin
          </span>
          </nuxt-link>
          
         </div>
        </p>
        <p style="--stagger: 6" data-animate>
          If you enjoy my works, Lets connect to each other 🤝
        </p>
      </div>
    </article>
  </div>
</template>
