<template>
  <div v-if="store.user.length === 0" class="w-full h-screen bg-amberred">
    <h1>login pls</h1>
  </div>
  <div v-else>
    du er logget ind!
    <button @click.prevent="store.flipMedlem(store.user.email)" class="w-10 h-10 bg-amberred"></button>
  </div>
</template>

<script setup>
import { useMainStore } from "../stores/main";


const store = useMainStore();
</script>

<style>

</style>