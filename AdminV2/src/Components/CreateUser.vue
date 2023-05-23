<template>
  <div class="w-full h-full bg-amberred">
    <input type="text" v-model="credentials.navn" placeholder="navn">
    <input type="text" v-model="credentials.efternavn" placeholder="efternavn">
    <input type="text" v-model="credentials.email" placeholder="E-mail">
    <input type="password" v-model="credentials.password" placeholder="kode">
    <button class="w-10 h-10" @click.prevent="store.createUser(credentials)">post</button>
    <button class="w-10 h-10" @click.prevent="store.login(login)">delete</button>

    <input type="text" v-model="login.name" placeholder="navn">
    <input type="text" v-model="login.password" placeholder="password">
  </div>
  
</template>

<script setup>
import { reactive, ref } from "vue";
import axios from "axios";
import { useMainStore } from "../stores/main";

axios.defaults.baseURL = 'http://localhost:6969'
const store = useMainStore();
const user = ref('jacob')
const login = reactive({
    name: null,
    password: null
})
const credentials = reactive({
    navn: null,
    efternavn: null,
    email: null,
    password: null,
    medlemsskab: false,
})

</script>

<style>

</style>