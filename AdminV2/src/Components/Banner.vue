<template>
<div>
  <div class="h-[85vh] w-[calc(100vw-10px)] transition-all">
    <slot>
        
    </slot>
    <img v-if="showBanner === 'lego'" src="../assets/billeder/legobygning.jpg" alt="" class="object-cover brightness-[0.69] absolute top-0 h-[85vh] w-screen">
    <img v-if="showBanner === 'mads'" src="../assets/billeder/mads_musiker.jpg" alt="" class="object-cover brightness-[0.69] absolute top-0 h-[85vh] w-screen">
    <img v-if="showBanner === 'film'" src="../assets/billeder/filmaften.jpg" alt="" class="object-cover brightness-[0.69] absolute top-0 h-[85vh] w-screen">
    <img v-if="showBanner === 'mal'" src="../assets/billeder/maleworkshop.jpg" alt="" class="object-cover brightness-[0.69] absolute top-0 h-[85vh] w-screen">
  </div>
  <div class="h-16 w-full relative text-ellipsis bottom-24 px-28 grid grid-cols-4 justify-center gap-24">
        <div class="w-full hover:opacity-100"
        @click.prevent="showBanner = 'lego'"
        :class="showBanner === 'lego' ? 'opacity-100' : 'opacity-70'">
            <ul class="banner-bar h-1/2 w-6/6 border-t-4 border-whitebronx"><h1> Lego hyg og byg<i class="fa-light fa-download"></i></h1> </ul>
            <ul class="banner-bar h-1/2 w-6/6 "> <h2> Dato: 15/5 - Kl. 17:30</h2></ul>
        </div>
        <div class="w-full hover:opacity-100"
        @click.prevent="showBanner = 'mads'"
        :class="showBanner === 'mads' ? 'opacity-100' : 'opacity-70'">
            <ul class="banner-bar h-1/2 w-6/6 border-t-4 text-ellipsis overflow-hidden border-whitebronx"><h1> Koncert med Mads La Cour</h1></ul>
            <ul class="banner-bar h-1/2 w-6/6 "> <h2> Dato: 19/06 - Kl. 18:30</h2></ul>
        </div>
        <div class="w-full hover:opacity-100"
        @click.prevent="showBanner = 'film'"
        :class="showBanner === 'film' ? 'opacity-100' : 'opacity-70'">
            <ul class="banner-bar h-1/2 w-6/6 border-t-4 border-whitebronx"><h1>Film marathon</h1></ul>
            <ul class="banner-bar h-1/2 w-6/6 "> <h2>Dato: 21/06 kl. 16:00</h2></ul>
        </div>
        <div class="w-full hover:opacity-100"
        @click.prevent="showBanner = 'mal'" 
        :class="showBanner === 'mal' ? 'opacity-100' : 'opacity-70'"> 
            <ul class="banner-bar h-1/2 w-6/6 border-t-4 border-whitebronx"><h1>Tegn og mal workshop</h1></ul>
            <ul class="banner-bar h-1/2 w-6/6 "> <h2>Dato: 26/06 - Kl. 17:30</h2></ul>
        </div>
    
    </div>
</div>
</template>

<script setup>
import { computed, onMounted, reactive, ref } from 'vue';

const showBanner = ref('lego')
const banners = ['lego', 'mads', 'film', 'mal']

computed
onMounted(() => {
})

</script>

<style>

</style>