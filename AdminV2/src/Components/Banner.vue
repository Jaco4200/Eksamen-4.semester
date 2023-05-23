<template>
  <div class="h-[85vh] w-screen">
    <slot>
        
    </slot>
    <img src="../assets/lego.svg" alt="" class="object-cover absolute top-0 h-[85vh] w-screen">
  </div>
  <div class="h-18 w-full relative bottom-16 px-12 flex flex-row justify-center gap-6">
        <div class="w-1/4 opacity-70 hover:opacity-100">
            <ul class="banner-bar h-1/2 w-5/6 border-t-4 border-white"><h1> Lego hyg og byg</h1></ul>
            <ul class="banner-bar h-1/2 w-5/6 "> <h2> Dato: 15/5 - Kl. 17:30</h2></ul>
        </div>
        <div class="w-1/4 opacity-70 hover:opacity-100">
            <ul class="banner-bar h-1/2 w-5/6 border-t-4 border-white"><h1> Koncert med Mads La Cour</h1></ul>
            <ul class="banner-bar h-1/2 w-5/6 "> <h2> Dato: 19/06 - Kl. 18:30</h2></ul>
        </div>
        <div class="w-1/4 opacity-70 hover:opacity-100">
            <ul class="banner-bar h-1/2 w-5/6 border-t-4 border-white"><h1>Film marathon</h1></ul>
            <ul class="banner-bar h-1/2 w-5/6 "> <h2>Dato: 21/06 kl. 16:00</h2></ul>
        </div>
        <div class="w-1/4 opacity-70 hover:opacity-100" :class="active ? 'active' : ''"> 
            <ul class="banner-bar h-1/2 w-5/6 border-t-4 border-white"><h1>Tegn og mal workshop</h1></ul>
            <ul class="banner-bar h-1/2 w-5/6 "> <h2>Dato: 26/06 - Kl. 17:30</h2></ul>
        </div>
    
    </div>
</template>

<script setup>
import { ref } from 'vue';
</script>

<style>

</style>