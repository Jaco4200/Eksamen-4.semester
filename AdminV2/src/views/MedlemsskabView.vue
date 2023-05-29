<template>
  <div class="bg-whitebronx">
    <div class="h-64 w-full">
        <div class="z-50">
            <TopMenu/>
        </div>
        <img src="../assets/billeder/myhappyfriends.png" class="object-cover h-64 w-full brightness-[0.69]" alt="">    
      </div>
        <div class="pt-28 w-full bg-whitebronx grid lg:grid-cols-2 xs:grid-cols-1 xs:px-6 lg:px-28 mb-20">
      <div>
        <img src="../assets/billeder/matty.svg" class="h-[400px] object-left-bottom" alt="">
      </div>
        <div class="h-[400px] flex flex-col gap-6 justify-center">
          <h1 class="text-2xl text-black">Mange fordele som medlem</h1>
          <p>Som medlem hos Bronx får du fuld adgang til alt hvad Bronx kan tilbyde! Besøg vores sy -eller træværksted og udfordre din kreativitet, eller bytte-stationen, hvor du kan bytte en ting du ikke bruger mere til noget mere spændende.</p> 

<p>Hertil får du også adgang til Ting-biblioteket, hvor du kan låne diverse ting til hjemmet, og til tekstillageret hvor du har adgang til alverdens stoffer og tekstiler til dit næste kreative projekt.</p>

<p class="">Hvis dette ikke var nok, har vi også sørget for, at du får rabatter på mange af vores aktiviteter og events, så du kan fokusere på menneskerne omkring dig, uden at skulle bekymre dig for meget om pengepungen.</p>
<ButtonComp 
@click.prevent="isVisible = true;"
class="bg-oceanblue xs:w-2/6 xl:w-1/6 text-whitebronx"
button-text="Bliv Medlem"> </ButtonComp>        
</div>
    </div>


<Modal v-model:visible="isVisible">
    <div>your content...</div>
</Modal>
  <FooterComp/>
</div>
</template>

<script setup>
import { ref } from "vue";
import TopMenu from "../Components/TopMenu.vue";
import { useMainStore } from "../stores/main";
import { Modal } from 'usemodal-vue3';
import FooterComp from "../Components/FooterComp.vue";

const isVisible = ref(false);
const store = useMainStore();
</script>

<style>

</style>