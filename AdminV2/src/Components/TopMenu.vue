<template>
<div class="w-[calc(100vw-10px)] h-[60vh] absolute bg-transparent overflow-x-hidden z-50">
  <div class="w-[calc(100vw-10px)] pt-14 xs:px-8 h-20 absolute bg-transparent z-50 lg:px-28 flex lg:gap-2 items-center justify-between">
    <div class="md:w-1/6 xs:w-2/6">
        <img src="../assets/logo.svg" alt="Bronx-logo" class=" md:h-8">
    </div>
    <div class="w-4/6 xs:hidden md:flex flex flex-row items-center justify-between md:px-12 2xl:px-48 3xl:px-64 ">
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
    <div @click.prevent="burger =! burger" class="flex w-2/6 justify-center px- items-center md:hidden">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="w-6 h-6 text-whitebronx"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg> 
    <div class="flex w-3/5 flex-col bg-black absolute top-24 ml-auto mr-auto left-0 right-0 center object-center gap-10 items-center rounded-2xl" v-if="burger === true">
      <router-link :to="{ name: 'home' }" class="menu-link group w-full justify-center relative">
            <h2>Hjem</h2>
          </router-link>
          <router-link :to="{ name: 'omBronx' }" class="menu-link group w-full justify-center relative">
            <h2>Om Bronx</h2>
          </router-link>
          <router-link :to="{ name: 'kalender' }" class="menu-link justify-center w-full group relative">
            <h2>Kalender</h2>
          </router-link>
          <router-link :to="{ name: 'medlemsskab' }" class="menu-link justify-center w-full group relative">
            <h2>Medlemsskab</h2>
          </router-link></div>
  </div>
    <div class=" xs:w-2/6 md:w-1/6 flex justify-end text-white">
        <ButtonComp
        v-if="store.loggedIn === false"
        button-text="Login"
        @click.prevent="login =! login"
        class="w-[130px] h-[40px] hover:bg-whitebronx hover:text-black border-2 transition-all text-whitebronx rounded-md border-whitebronx"/>
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
const burger = ref(false)
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