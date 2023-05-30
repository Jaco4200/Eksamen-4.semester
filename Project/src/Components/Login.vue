<template>
  <div
    class="h-[400px] w-[300px] absolute z-50 right-0 top-24 rounded-bl-lg rounded-tl-lg border-2 flex overflow-x-hidden justify-start items-center flex-col bg-whitebronx">
      <CustomInput
      class="absolute h-[69px]"
      v-model="loginCredentials.name"
      :label="'Brugernavn'"
      :borderColor="'#000000'"
      :placeholder="'Brugernavn'"
      ref="navn"
      :name="'brugernavn'"
      />
      <CustomInput
      class="absolute h-[69px]"
      v-model="loginCredentials.password"
      type="password"
      :label="'Adgangskode'"
      :borderColor="'#000000'"
      :placeholder="'Adgangskode'"
      ref="navn"
      :name="'Kode'"
      />
      <p class="w-full flex justify-end mr-14 mt-1">glemt din kode?
      </p>
      <ButtonComp
      @click.prevent="loginF(loginCredentials)"
      class="w-5/6 h-10 text-white bg-oceanblue mt-10 rounded-lg transition-all hover:opacity-70"
      button-text="Login"
      :loading="loading === 'login'"
      :loadDone="loadDone === 'login'"
      :loadErr="loadErr === 'login'"
      />
      <div class="w-full h-1/6 flex flex-col items-center">
      <p class="h-3/6 mt-16">har du ikke en bruger?</p>
      <a class="mt-2 h-3/6 mb-16"><p class="text-oceanblue">Opret dig her</p></a>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useMainStore } from '../stores/main';

const store = useMainStore();
const loading = ref(null);
const loadDone = ref(null);
const loadErr = ref(null);
const loginCredentials = reactive({
    name: null,
    password: null
})

const loginF = (credentials) => {
  loading.value = 'login';
  store.login(credentials).then(
    (res) => {
    if (res.status === 200) {
      loading.value = ''
      loadDone.value = 'login'
      setTimeout(() => {
        loadDone.value = ''
        store.loggedIn = true;
      }, 2000);}
    else{
        loading.value = ''
        loadErr.value = 'login'
        setTimeout(() => {
            loadErr.value = ''
        }, 2000);
    }
    })
}

</script>

<style>

</style>