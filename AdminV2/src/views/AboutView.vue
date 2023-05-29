<template>
  <div class="bg-bronxwhite">
    <TopMenu/>
    <img src="../assets/billeder/ombanner.svg" class="h-72 object-cover w-[100%] brightness-[0.69]" alt="">
    <div class="pt-28 w-full bg-whitebronx lg:h-[400px] grid lg:grid-cols-2 xs:grid-cols-1 xs:px-6 lg:px-28">
      <div>
        <img src="../assets/billeder/matogdres.svg" class="h-[300px]" alt="">
      </div>
        <div class="h-[300px] flex flex-col gap-6 justify-center">
          <h1 class="text-2xl text-black">Bronx mission & værdier</h1>
          <p>Bronx er ikke bare et sted for aktiviteter og events, men et fælleskab på tværs af mennesker og kulture. Her er der plads til alle, og mulighed for at skabe nye og stærke relationer gennem sjove og spændende aktiviteter samt events.</p>
        </div>
    </div>
    <img src="../assets/billeder/book-lokaleoptimeret.png" class="bg-whitebronx xs:py-0 lg:py-28" alt="">
    <div class=" w-full bg-whitebronx lg:h-[400px] grid lg:grid-cols-2 xs:grid-cols-1 xs:py-12 xs:px-6 lg:px-28">
      <div>
        <img src="../assets/billeder/blivfrivillig.svg" class="h-[300px]" alt="">
      </div>
        <div class="lg:h-[300px] xs:mt-10 lg:mt-0 flex flex-col gap-6 justify-center">
          <h1 class="text-2xl text-black">Bliv frivilig</h1>
          <p>Har du lyst til at blive en del af et fantastisk fælleskab og udvikle dine kompetencer? Så har du nu muligheden for at blive frivillig i Bronx!
            </p><p>
            Som frivillig vil du også være med til at støtte vores mission om at skabe fælleskab på tværs af mennesker og kulture, og gøre en positiv forskel i lokalområdet, hvilket vi for evigt vil være taknemmelige for.</p>
        </div>
    </div>
    <div class="lg:px-28 xs:px-6 bg-whitebronx">
      <h1 class="text-2xl pb-6 text-black">Var der mere? Kontakt os!</h1>
      <p class="w-[200px] pb-6">Middelfartvej 115b<br> 
        DK-5200 Odense V<br>
        Danmark
        </p>
      <p class="w-[200px]"> Tlf. +45 91 52 52 45 
        <br>E-mail: sighej@bronx5200.dk</p>
    </div>
    <div class="flex flex-row items-center justify-center bg-whitebronx">
      <h1 class="text-black py-20">Vores fantastiske sponsorer &nbsp;</h1><h1 class="text-amberred text-3xl">&hearts; </h1>
    </div>
    <div class="flex flex-row h-20 w-full+ py-28">
      <img src="../assets/billeder/rodkors.svg" alt="">
      <img src="../assets/billeder/avg.svg" alt="">
      <img src="../assets/billeder/stops.svg" alt="">
      <img src="../assets/billeder/odnsreno.svg" alt="">
    </div>
  </div>
</template>

<script setup>

import TopMenu from '../Components/TopMenu.vue'
</script>

<style>

</style>