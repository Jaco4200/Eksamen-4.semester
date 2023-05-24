<template>
<div>
  <div class="h-[85vh] w-[calc(100vw-10px)]">
    <slot>
        
    </slot>
    <img src="../assets/lego.svg" alt="" class="object-cover absolute top-0 h-[85vh] w-screen">
  </div>
  <div class="h-18 w-full relative text-ellipsis bottom-24 px-28 grid grid-cols-4 justify-center gap-24">
        <div class="w-full opacity-70 hover:opacity-100">
            <ul class="banner-bar h-1/2 w-6/6 border-t-4 border-white"><h1> Lego hyg og byg</h1></ul>
            <ul class="banner-bar h-1/2 w-6/6 "> <h2> Dato: 15/5 - Kl. 17:30</h2></ul>
        </div>
        <div class="w-full opacity-70 hover:opacity-100">
            <ul class="banner-bar h-1/2 w-6/6 border-t-4 text-ellipsis border-white"><h1> Koncert med Mads La Cour</h1></ul>
            <ul class="banner-bar h-1/2 w-6/6 "> <h2> Dato: 19/06 - Kl. 18:30</h2></ul>
        </div>
        <div class="w-full opacity-70 hover:opacity-100">
            <ul class="banner-bar h-1/2 w-6/6 border-t-4 border-white"><h1>Film marathon</h1></ul>
            <ul class="banner-bar h-1/2 w-6/6 "> <h2>Dato: 21/06 kl. 16:00</h2></ul>
        </div>
        <div class="w-full opacity-70 hover:opacity-100" :class="active ? 'active' : ''"> 
            <ul class="banner-bar h-1/2 w-6/6 border-t-4 border-white"><h1>Tegn og mal workshop</h1></ul>
            <ul class="banner-bar h-1/2 w-6/6 "> <h2>Dato: 26/06 - Kl. 17:30</h2></ul>
        </div>
    
    </div>
</div>
</template>

<script setup>
import { onMounted, ref } from 'vue';



onMounted(() => {

})
</script>

<style>

</style>