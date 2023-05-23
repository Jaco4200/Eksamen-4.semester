<template>
<div class="w-screen h-[60vh] absolute bg-transparent overflow-x-hidden z-50">
  <div class="w-screen h-20 absolute bg-transparent z-50 px-12 flex gap-2 items-center justify-between">
    <div class="w-1/6">
        <img src="../assets/logo.svg" alt="Bronx-logo" class=" h-8">
    </div>
    <div class="w-4/6  flex flex-row items-center justify-between px-52 ">
          <router-link :to="{ name: 'home' }" class="menu-link group w-[85px] justify-center relative">
            <h2>Hjem</h2>
          </router-link>
          <router-link :to="{ name: 'omBronx' }" class="menu-link group w-[85px] justify-center relative">
            <h2>Om Bronx</h2>
          </router-link>
          <router-link :to="{ name: 'kalender' }" class="menu-link justify-center w-[85px] group relative">
            <h2>Kalender</h2>
          </router-link>
          <router-link :to="{ name: 'medlemsskab' }" class="menu-link justify-center w-[85px] group relative">
            <h2>Medlemsskab</h2>
          </router-link>
    
    </div>
    <div class=" w-1/6 flex justify-end text-white">
        <ButtonComp
        v-if="store.loggedIn === false"
        button-text="Login"
        @click.prevent="login =! login"
        class="w-[130px] h-[40px] hover:bg-white hover:text-black border-2 transition-all rounded-md border-white"/>
        <div
        v-else
        @click.prevent="user =! user"
        class="text-2xl cursor-pointer"
        ><i class="fa-light fa-user"></i></div>    
    </div>
  </div>
  <Transition name="slide-fade">
    <div
    v-if="login === true"
    :class="store.loggedIn ? 'hidden' : ''">
    <Login/>
  </div>
  </Transition>
  <Transition name="slide-fade">
    <div
    v-if="user === true">
    <Login/>
  </div>
  </Transition>
</div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useMainStore } from '../stores/main';
import Login from './Login.vue';

const store = useMainStore();
const login = ref(false);
const user = ref(false);

</script>

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(100px);
  opacity: 0;
}
</style>