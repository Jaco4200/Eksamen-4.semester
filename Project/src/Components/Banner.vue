<template>
<div>
  <div class="h-[85vh] w-[calc(100vw-10px)] transition-all">
    <slot>
        
    </slot>
    <div  class="banner fade">
        <img src="../assets/billeder/legony.jpg" alt="" id="banner" class="object-cover brightness-[0.69] absolute top-0 h-[85vh] w-screen">
    </div>
    <div  class="banner fade">
        <img src="../assets/billeder/mads_musiker.jpg" alt="" id="banner" class="object-cover brightness-[0.69] absolute top-0 h-[85vh] w-screen">
    </div>
    <div  class="banner fade">
        <img src="../assets/billeder/filmaften.jpg" alt="" id="banner" class="object-cover brightness-[0.69] absolute top-0 h-[85vh] w-screen">
    </div>
    <div  class="banner fade">
        <img src="../assets/billeder/maleworkshop.jpg" alt="" id="banner" class="object-cover brightness-[0.69] absolute top-0 h-[85vh] w-screen">
    </div>
  </div>
  <div class="h-16 w-full relative text-ellipsis bottom-24 md:px-28 grid grid-cols-4 justify-center md:gap-10 lg:gap-24">
        <router-link :to="{ name: 'lego' }" class="w-full hover:opacity-100"
        @click.prevent="clicked = true"
        :class="showBanner === 'lego' ? 'xs:w-[98vw] xs:px-6  md:px-0 md:w-full opacity-100' : 'xs:hidden md:block opacity-70'">
            <ul class="banner-bar  w-6/6 border-t-4 xs:h-[30px] text-ellipsis overflow-hidden border-whitebronx"><h1> Lego hyg og byg <i class="fa-light fa-arrow-up-right-from-square"></i></h1> </ul>
            <ul class="banner-bar  xs:h-[20px] text-ellipsis overflow-hidden w-6/6 "> <h2> Dato: 15/5 - Kl. 17:30</h2></ul>
        </router-link>
        <router-link :to="{ name: 'mads' }" class="w-full hover:opacity-100"
        @click.prevent="clicked = true"
        :class="showBanner === 'mads' ? 'xs:w-[98vw] xs:px-6  md:px-0 md:w-full xs:block mr-10 opacity-100' : ' xs:hidden md:block opacity-70'">
            <ul class="banner-bar  w-6/6 border-t-4 xs:h-[30px] text-ellipsis overflow-hidden border-whitebronx"><h1>Mads L . C Koncert <i class="fa-light fa-arrow-up-right-from-square"></i></h1></ul>
            <ul class="banner-bar  xs:h-[20px] text-ellipsis overflow-hidden w-6/6 "> <h2> Dato: 19/06 - Kl. 18:30</h2></ul>
        </router-link>
        <router-link :to="{ name: 'film' }" class="w-full hover:opacity-100"
        @click.prevent="showBanner = 'film'; clicked = true"
        :class="showBanner === 'film' ? 'xs:w-[98vw] xs:px-6  md:px-0 md:w-full opacity-100' : 'xs:hidden md:block opacity-70'">
            <ul class="banner-bar  w-6/6 border-t-4 xs:h-[30px] text-ellipsis overflow-hidden border-whitebronx"><h1>Film marathon <i class="fa-light fa-arrow-up-right-from-square"></i></h1></ul>
            <ul class="banner-bar  xs:h-[20px] text-ellipsis overflow-hidden w-6/6 "> <h2>Dato: 21/06 kl. 16:00</h2></ul>
        </router-link>
        <router-link :to="{ name: 'mal' }" class="w-full hover:opacity-100"
        @click.prevent="showBanner = 'mal'; clicked = true" 
        :class="showBanner === 'mal' ? 'xs:w-[98vw] xs:px-6 md:px-0 md:w-full opacity-100' : 'opacity-70 xs:hidden md:block'"> 
            <ul class="banner-bar  w-6/6 border-t-4 xs:h-[30px] text-ellipsis overflow-hidden border-whitebronx"><h1>Tegn og mal <i class="fa-light fa-arrow-up-right-from-square"></i>
            </h1></ul>
            <ul class="banner-bar  xs:h-[20px] text-ellipsis overflow-hidden w-6/6 "> <h2>Dato: 26/06 - Kl. 17:30</h2></ul>
        </router-link>
    
    </div>
</div>
</template>

<script setup>
import { computed, onMounted, reactive, ref } from 'vue';

const showBanner = ref('mads')
const banners = ['lego', 'mads', 'film', 'mal']
const clicked = ref(false);

let slideIndex = 0;

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("banner")
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";
  showBanner.value = banners[slideIndex-1];

  setTimeout(showSlides, 4000)
}
onMounted(() => {
    showSlides()
})

</script>

<style>
.fade {
  animation-name: fade;
  animation-duration: 2.5s;
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

</style>