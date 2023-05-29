<template>
  <div class="w-full max-w-[1920px] bg-whitebronx overflow-x-hidden">
  <Banner>
  <TopMenu/>
    </Banner>
    <h1 class="text-black text-4xl text-center">Velkommen til Bronx
    </h1>
    <h2 class="text-black text-center pt-4">Forvandl de kedelige aftener til gode vendskaber gennem spændende og sjove aktiviteter.</h2>
  <Aktivitet/>
  <Testies/>
  <BlivMedlem/>
  <FooterComp/>
</div>
</template>

<script setup>
import Aktivitet from '../Components/Aktivitet.vue';
import Banner from '../components/Banner.vue';
import TopMenu from '../Components/TopMenu.vue';
import FooterComp from '../Components/FooterComp.vue';
import Testies from '../Components/Testies.vue';
import BlivMedlem from '../Components/BlivMedlem.vue';
import { ref } from 'vue';

const aktivitet = ref('')
</script>

<style>

</style>