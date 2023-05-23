<template>
  <nav class="w-screen h-20  px-12 flex gap-2 bg-sandbeige items-center  justify-between">
    <div class="w-1/6">
        <img src="../assets/logo.png" alt="Bronx-logo" class=" h-10">
    </div>
    <div class="w-4/6  flex flex-row items-center justify-between px-52 ">
          <router-link :to="{ name: 'home' }" class="menu-link group w-[85px] h-[85px] justify-center relative">
            <h2>Hjem</h2>
          </router-link>
          <router-link :to="{ name: 'omBronx' }" class="menu-link group w-[85px] h-[85px] justify-center relative">
            <h2>Om Bronx</h2>
          </router-link>
          <router-link :to="{ name: 'kalender' }" class="menu-link justify-center w-[85px] h-[85px] group relative">
            <h2>Kalender</h2>
          </router-link>
          <router-link :to="{ name: 'medlemsskab' }" class="menu-link justify-center w-[85px] h-[85px] group relative">
            <h2>Medlemsskab</h2>
          </router-link>
    
    </div>
    <div class=" w-1/6 flex justify-end">
        <button class="w-4/6 h-10 bg-brown text-sandbeige rounded-xl hover:bg-amberred">
            Login
        </button>
    </div>
  </nav>
</template>

<script setup>

</script>

<style>

</style>