<template>
<div>
  <div class="h-[85vh] w-[calc(100vw-10px)]">
    <slot>
      <TopMenu/>
    </slot>
    <div  class="">
        <img src="../assets/billeder/aktivitet6.svg" alt="" id="banner" class="object-cover brightness-[0.69] absolute top-0 h-[85vh] w-screen">
    </div>
  </div>
  <div class="h-screen w-full bg-oceanblue"></div>
  <FooterComp/>
</div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import TopMenu from '../Components/TopMenu.vue';
import FooterComp from './FooterComp.vue';


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