<script setup>
import { useRoute, RouterView, RouterLink } from 'vue-router';
import TopMenu from './components/TopMenu.vue';
const route = useRoute();

</script>

<template>

  <TopMenu/>
  <router-view/>
</template>

<style>
@font-face {
  font-family: '3954';
  src: url('./fonts/futura/3954.eot');
  src: local('3954'), url('./fonts/futura/3954.woff') format('woff'), url('./fonts/futura/3954.ttf') format('truetype');
}
h1,
h2,
h3,
h4 {

  font-family: 'Open Sans', sans-serif;
}
h3{
  text-transform: capitalize;
}
::-webkit-scrollbar {
  width: 10px;
}


::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.custom-file-upload {
  border: 1px solid #ccc;
  display: inline-block;
  padding: 6px 12px;
  cursor: pointer;
}
input[type='file'] {
  display: none;
}

</style>
