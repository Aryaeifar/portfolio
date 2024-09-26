<template>
  <form @submit.prevent="login" class="">
    <input
      type="text"
      v-model="loginForm.username"
      class="pa-2 border rounder"
      placeholder="username"
    />
    <input
      type="text"
      v-model="loginForm.password"
      class="pa-2 border rounder"
      placeholder="password"
    />
    <button type="submit" @click="login" class="border rounded px-4 py-2">login</button>
  </form>
</template>

<script setup>
let loginForm = ref({
    username:'',
    password:''
})

const login = () => {
  console.log("login");
};
</script>

<style lang="scss" scoped></style>
