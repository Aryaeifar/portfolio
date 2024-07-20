<script setup>
const props = defineProps({
    items:{
        type:Object
    }
})
</script>

<template>
  <div class="h-100">
    <v-card class="mx-auto projects-card h-100" max-width="374">
      <v-img
        cover
        height="250"
        :src="'/assets/images/' + items.img"
        class="ma-3 rounded basecard-img"
      ></v-img>

      <v-card-item>
        <v-card-title>{{items.title}}</v-card-title>
      </v-card-item>

      <v-card-text>
        <div>
        {{ items.text }}
          <p class="mt-3">Front-end technologies:</p>
          <ul class="mx-3 my-3">
            <li style="font-size: 12px" v-for="i in items.frontTech">
                {{ i }}
            </li>
          </ul>
        </div>
        <div>
          <a :href="items.link" target="_blank">{{items.linkName}}</a>
        </div>
      </v-card-text>
      <v-card-item>
        <v-card-subtitle>
          <div>
            <span class="me-1">{{ items.date }}</span>
          </div>
        </v-card-subtitle>
      </v-card-item>
    </v-card>
  </div>
</template>


<style lang="scss" scoped></style>
