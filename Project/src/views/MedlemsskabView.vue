<template>
  <div class="bg-whitebronx">
    <div class="h-64 w-full">
      <img src="../assets/billeder/myhappyfriends.png" class="object-cover absolute top-0 h-64 w-full brightness-[0.69]" alt="">  
        <div class="z-50">
            <TopMenu/>
        </div>
  
      </div>
        <div class="pt-28 w-full xs:h-[1000px] lg:h-auto bg-whitebronx grid lg:grid-cols-2 xs:grid-cols-1 xs:px-6 lg:px-28 mb-28">
      <div>
        <img src="../assets/billeder/matty.svg" class=" xs:h[500px] lg:h-[400px] object-left-bottom" alt="">
      </div>
        <div class="h-[400px] flex flex-col gap-6 justify-center">
          <h1 class="text-2xl text-black">Mange fordele som medlem</h1>
          <p>Som medlem hos Bronx får du fuld adgang til alt hvad Bronx kan tilbyde! Besøg vores sy -eller træværksted og udfordre din kreativitet, eller bytte-stationen, hvor du kan bytte en ting du ikke bruger mere til noget mere spændende.</p> 

<p>Hertil får du også adgang til Ting-biblioteket, hvor du kan låne diverse ting til hjemmet, og til tekstillageret hvor du har adgang til alverdens stoffer og tekstiler til dit næste kreative projekt.</p>

<p class="">Hvis dette ikke var nok, har vi også sørget for, at du får rabatter på mange af vores aktiviteter og events, så du kan fokusere på menneskerne omkring dig, uden at skulle bekymre dig for meget om pengepungen.</p>
<ButtonComp 
v-if="store.loggedIn === true && store.user.medlem === 'false'"
@click.prevent="isVisible = true;"
class="bg-oceanblue text-whitebronx w-[250px]"
button-text="Bliv Medlem"> </ButtonComp>
<div v-if="store.user.medlem === 'true'">Du er allerde medlem!</div>    
<div v-if="store.loggedIn === false" class="text-black"><p>Log ind for at blive medlem</p></div>    
</div>
    </div>
    <div v-if="betalt === true" class="modal-content border-2 px-6 xs:w-[380px] lg:w-[600px] absolute top-72 left-0 m-auto right-0 bg-whitebronx h-[350px]">
      
  <div class="flex w-[400px] h-6 flex-row items-center gap-4">
    <button @click.prevent="betalt = false, isVisible = false;" class="text-3xl cursor-pointer">&times;</button> <h1 class="text-sm h-7 flex items-end  ml-32 w-full justify-center text-black font-primary">Opret dig som medlem</h1>
  </div>
  <div class="modal-body">
      <div class="w-full h-[300px] flex flex-col gap-2 justify-center items-center">
        <h1 class="text-3xl text-black">Tak For din betaling!</h1>
      </div>
      </div>   
    </div>
    <div v-if="isVisible === true && betalt === false" class="modal-content border-2 px-6 xs:w-[380px] lg:w-[600px] absolute top-72 left-0 m-auto right-0 bg-whitebronx h-[400px]">
  <div class="flex w-[400px] h-6 flex-row items-center mt-4 gap-4">
    <button @click.prevent="isVisible = false;" class="text-3xl cursor-pointer">&times;</button> <h1 class="text-sm h-7 flex items-end xs:mr-24 md:mr-0  lg:ml-32 w-full justify-center text-black font-primary">Opret dig som medlem</h1>
  </div>
  <div class="modal-body">
    <div class="bg-whitebronx h-[330px] flex flex-col items-center justify-center px-6">
      <p class="mb-6 w-full flex flex-col text-center font-bold">Pris:<br> 25kr. pr. Måned</p>
      <p class="mb-6">vælg betalings metode</p>
      <div class="w-full flex flex-col gap-2 justify-center items-center">
        <buttonComp
        @click.prevent="store.flipMedlem(store.user.email), betalt = true;" 
        button-text="PayPal"
        class="text-center text-whitebronx w-3/6 bg-oceanblue items-center">
        </buttonComp>
        <buttonComp
        @click.prevent="store.flipMedlem(store.user.email), betalt = true;" 
        button-text="Mobilepay"
        class="text-center text-whitebronx w-3/6 bg-oceanblue items-center">
        </buttonComp>        
        <buttonComp
        @click.prevent="store.flipMedlem(store.user.email), betalt = true;" 
        button-text="Mastercard"
        class="text-center text-whitebronx w-3/6 bg-oceanblue items-center">
        </buttonComp>
      </div>   
    </div>
  </div>
</div>
  <FooterComp/>
</div>
</template>

<script setup>
import { ref } from "vue";
import TopMenu from "../Components/TopMenu.vue";
import { useMainStore } from "../stores/main";
import { Modal } from 'usemodal-vue3';
import ButtonComp from "../Components/ButtonComp.vue";
import FooterComp from "../Components/FooterComp.vue";

const betalt = ref(false);
const isVisible = ref(false);
const store = useMainStore();
</script>

<style>
.modal-content {
  animation-name: animatetop;
  animation-duration: 0.4s
}

/* Add Animation */
@keyframes animatetop {
  from { opacity: 0}
  to {top: 72; opacity: 1}
}
</style>