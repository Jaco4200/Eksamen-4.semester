<template>
  <div class="bg-bronxwhite">
    <img src="../assets/billeder/folkderhygger.jpg" class="h-64 object-cover w-[100%] absolute top-0 brightness-[0.69]" alt="">
    <TopMenu/>
    <div class="w-full xs:-mt-36 lg:-mt-20 bg-whitebronx"></div>
    <div class="w-full bg-whitebronx xs:h-[600px] lg:h-[400px] grid lg:grid-cols-2 xs:grid-cols-1 xs:px-6 lg:px-28">
      <div>
        <img src="../assets/billeder/matogdres.svg" class="xl:h-[400px] " alt="">
      </div>
        <div class="h-[300px] flex flex-col lg:pl-28 justify-center">
          <h1 class="text-2xl text-black pb-10">Bronx mission & værdier</h1>
          <p>Bronx er ikke bare et sted for aktiviteter og events, men et fælleskab på tværs af mennesker og kulture. Her er der plads til alle, og mulighed for at skabe nye og stærke relationer gennem sjove og spændende aktiviteter samt events.</p>
        </div>
    </div><div class="bg-whitebronx pt-20">
      <booklokale/>
    </div>
    <div class=" w-full bg-whitebronx lg:h-[540px] grid lg:grid-cols-2 xs:grid-cols-1 xs:py-12 xs:px-6 lg:px-28">
      <div>
        <img src="../assets/billeder/blivfrivillig.svg" class="h-[400px]" alt="">
      </div>
        <div class="lg:h-[400px] lg:mt-0 flex flex-col gap-6 justify-center">
          <h1 class="text-2xl text-black">Bliv frivilig</h1>
          <p>Har du lyst til at blive en del af et fantastisk fælleskab og udvikle dine kompetencer? Så har du nu muligheden for at blive frivillig i Bronx!
            </p><p>
            Som frivillig vil du også være med til at støtte vores mission om at skabe fælleskab på tværs af mennesker og kulture, og gøre en positiv forskel i lokalområdet, hvilket vi for evigt vil være taknemmelige for.</p>
        </div>
    </div>
    <h1 class="text-2xl bg-whitebronx text-center text-black">Var der mere? Kontakt os!</h1>
    <div class="lg:px-96 flex lg:flex-row xs:flex-col w-full pt-20 xs:px-6 bg-whitebronx xs:py-10 xl:pb-6">
      <p class="xs:w-full text-center lg:w-1/2">Middelfartvej 115b&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        DK-5200 Odense V&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </p>
        <p class="xs:hidden lg:block">|</p>
        <div class="flex flex-row xs:w-full lg:w-1/2">
          <p class="w-full xs:text-center lg:text-end">Tlf. +45 91 52 52 45 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            E-mail: sighej@bronx5200.dk</p>
        </div>
    </div>
    <div class="flex xs:flex-col lg:flex-row items-center justify-center bg-whitebronx">
      <h1 class="text-black text-2xl text-center py-20">Vores fantastiske sponsorer & samarbejdspartnere &nbsp;</h1><h1 class="xs:hidden lg:block text-amberred text-3xl">&hearts; </h1>
    </div>
    <div class="lg:flex flex-row gap-6 w-full justify-center items-center bg-whitebronx xs:grid xs:grid-cols-1 xs:justify-center pb-20 lg:px-28">
      <div class="xs:w-full h-32 flex items-center justify-center">
        <img src="../assets/billeder/kors.png" class="xs:w-2/6 " alt="">
      </div>
      <div class="xs:w-full h-32 flex items-center justify-center">
        <img src="../assets/billeder/aof.png"  class="xs:w-2/6 " alt="">
      </div>
      <div class="xs:w-full h-32 flex items-center justify-center">
        <img src="../assets/billeder/stop.png" class="xs:w-2/6 "  alt="">
      </div>
      <div class="xs:w-full h-32 flex items-center justify-center">
        <img src="../assets/billeder/reno.png" class="xs:w-2/6 " alt="">
      </div>
    </div>
    <FooterComp/>
  </div>
</template>

<script setup>

import booklokale from '../Components/booklokale.vue';
import FooterComp from '../Components/FooterComp.vue';
import TopMenu from '../Components/TopMenu.vue'
</script>

<style>

</style>