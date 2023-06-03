<template>
    <div>
      <div class="h-[85vh] w-[calc(100vw-10px)]">
        <slot>
          <TopMenu/>
        </slot>
        <div  class="">
            <img src="../assets/billeder/faellesspisning.jpg" alt="" id="banner" class="object-cover brightness-[0.69] absolute top-0 h-[85vh] w-screen">
        </div>
      </div>
      <div class="h-fit w-full bg-whitebronx flex flex-col xs:px-6 md:px-28">
    <router-link :to="{ name: 'home' }" class="w-6/6">
    <img src="../assets/billeder/tilbage.svg" class="h-14 mt-24" alt=""></router-link>
    <div class="w-3/6 ml-[30%] text-start">
        <h1 class="w-4/6 mt-10 text-black mb-4 text-3xl">Fællesspisning</h1>
    <p class="w-4/6 opacity-[0.8] ">Dato: 08/06 - Kl. 18:00    </p>
    <p class="w-3/6 opacity-[0.8]">Bronx</p>
    <p class="text-lg mt-10">
      Er du til stærk chili, søde sager eller bare en god samtale over en varm bid mad? Så burde du komme til vores fællesspisning! 


    </p>
    <p class="text-lg mt-4 mb-52">

      Her bliver både din smagsløg udfordret og forkælet, samtidig med du kan bryde brød og skabe relationer bogstavelig talt hen over bordet.

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
    
    <style scoped>
    .fade {
      animation-name: fade;
      animation-duration: 2.5s;
    }
    
    @keyframes fade {
      from {opacity: .4} 
      to {opacity: 1}
    }
    
    </style>