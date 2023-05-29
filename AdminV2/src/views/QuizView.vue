<template>
    <div>
      <div class="h-[85vh] w-[calc(100vw-10px)]">
        <slot>
          <TopMenu/>
        </slot>
        <div  class="">
            <img src="../assets/billeder/quiz.jpg" alt="" id="banner" class="object-cover brightness-[0.69] absolute top-0 h-[85vh] w-screen">
        </div>
      </div>
      <div class="h-fit w-full bg-whitebronx flex flex-col xs:px-6 md:px-28">
    <router-link :to="{ name: 'home' }" class="w-6/6">
    <img src="../assets/billeder/tilbage.svg" class="h-14 mt-24" alt=""></router-link>
    <div class="w-3/6 ml-[30%] text-start">
        <h1 class="w-4/6 mt-10 text-black mb-4 text-3xl">Tegn og mal workshop</h1>
    <p class="w-4/6 opacity-[0.8] ">Dato: 26/06 - Kl. 17:30 </p>
    <p class="w-3/6 opacity-[0.8]">Bronx</p>
    <p class="text-lg mt-10">
      Frem med penslerne og blyanterne, for det er blevet tid til at finde din indre kunstner frem! 

    </p>
    <p class="text-lg mt-4 mb-52">

      Vi ligger igen lokaler til din kreative side, og glæder os til at se dig, og hvad din fantasi formår at fremtrylle på dit besøg.

    </p>
    </div>
  </div>
      <FooterComp/>
    </div>
    </template>
    
    <script setup>
    import { onMounted, ref } from 'vue';
    import TopMenu from '../Components/TopMenu.vue';
    import FooterComp from '../Components/FooterComp.vue';
    
    
    onMounted(() => {
    
    })
    </script>
    
    <style>
    .fade {
      animation-name: fade;
      animation-duration: 2.5s;
    }
    
    @keyframes fade {
      from {opacity: .4} 
      to {opacity: 1}
    }
    
    </style>