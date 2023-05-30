<script setup>
import { useRoute, RouterView, RouterLink } from 'vue-router';
import TopMenu from './components/TopMenu.vue';
const route = useRoute();

</script>

<template>
  <router-view/>
</template>

<style>
@font-face {
  font-family: '3954';
  src: url('./fonts/futura/3954.eot');
  src: local('3954'), url('./fonts/futura/3954.woff') format('woff'), url('./fonts/futura/3954.ttf') format('truetype');
}
h1{
  font-family: "auster", sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 1.2em;
  color: white;
}
h2,
h3,
h4 {

  font-family:'Poppins', sans-serif;
}
h3{
  text-transform: capitalize;
}
::-webkit-scrollbar {
  width: 10px;
  background-color: black;
}
h2{
  color: #fafafafa;
  font-size: medium;
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
