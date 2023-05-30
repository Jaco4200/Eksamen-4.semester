<template>
  <div
    class="h-[400px] w-[300px] absolute z-50 right-0 top-24 rounded-bl-lg rounded-tl-lg border-2 flex overflow-x-hidden justify-start items-center flex-col bg-whitebronx">
      <CustomInput
      class="absolute h-[69px]"
      v-model="loginCredentials.name"
      :label="'Brugernavn'"
      :borderColor="'#000000'"
      :labelBgColor="'#F9F9F9'"
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
      :labelBgColor="'#F9F9F9'"
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
      <a class="mt-2 h-3/6 mb-16 cursor-pointer hover:brightness-[0.69]" @click.prevent="register = true"><p class="text-oceanblue">Opret dig her</p></a>
    </div>
    <div v-if="register === true" class="modal-content px-6 w-full absolute bg-whitebronx h-full">
  <div class="flex w-full h-6 flex-row items-center gap-4">
    <button @click.prevent="register = false;" class="text-3xl cursor-pointer">&times;</button> <h1 class="text-sm h-7 flex items-end text-black font-primary">Opret dig som medlem</h1>
  </div>
  <div class="modal-body">
    <div class="bg-whitebronx w-full p-0">
      <CustomInput
      class="absolute h-[69px] w-full"
      v-model="registerCredentials.navn"
      :label="'Fornavn'"
      :borderColor="'#000000'"
      :labelBgColor="'#F9F9F9'"
      :placeholder="'Fornavn'"
      ref="regnavn"
      :name="'regnavn'"
      /><CustomInput
      class="absolute h-[69px] w-full"
      v-model="registerCredentials.efternavn"
      :label="'Efternavn'"
      :borderColor="'#000000'"
      :labelBgColor="'#F9F9F9'"
      :placeholder="'Efternavn'"
      ref="navn"
      :name="'regefter'"
      /><CustomInput
      class="absolute h-[69px] w-full"
      v-model="registerCredentials.email"
      :label="'Email'"
      :borderColor="'#000000'"
      :labelBgColor="'#F9F9F9'"
      :placeholder="'Email'"
      ref="navn"
      :name="'regmail'"
      /><CustomInput
      class="absolute h-[69px] w-full"
      v-model="registerCredentials.password"
      :label="'Password'"
      :borderColor="'whitebronx'"
      :labelBgColor="'#F9F9F9'"
      :placeholder="'Password'"
      ref="regpass"
      :name="'regpass'"
      />
    </div>
    <ButtonComp
    button-text="Registrer"
    class="w-[200px] ml-6 mt-4 bg-oceanblue text-whitebronx "
    @click.prevent="registerUser(registerCredentials)"/>
  </div>
</div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useMainStore } from '../stores/main';
const store = useMainStore();
const register = ref(false);
const loading = ref(null);
const loadDone = ref(null);
const loadErr = ref(null);
const loginCredentials = reactive({
    name: null,
    password: null
})
const trueState = true;
const registerCredentials = reactive({
  navn: null,
  efternavn: null,
  email: null,
  password: null,
  medlemsskab: false,
})
const registerUser = (Credentials) => {
  store.createUser(Credentials)
}

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
/* Modal Header */


/* Modal Body */
/* Modal Footer */


/* Modal Content */
.modal-content {
  animation-name: animatetop;
  animation-duration: 0.4s
}

/* Add Animation */
@keyframes animatetop {
  from {top: -300px; opacity: 0}
  to {top: 0; opacity: 1}
}
</style>