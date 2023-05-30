<template>
  <div class="h-[480px] w-full bg-whitebronx flex justify-center items-center xs:px-6 md:px-0 flex-col">
    <div class="h-[480px] w-full flex flex-end items-end justify-end absolute xl:pr-28 xs:px-6 md:px-0  right-0">
        <img src="../assets/billeder/medlem.png" class="object-contain w-[650px] " alt="">
    </div>
    <h1 class=" xs:text-2xl lg:text-3xl text-black z-50">Bliv medlem og få massere af fordele</h1>
    <ButtonComp
    button-text="Læs mere om fordele"
    class="w-[280px] text-whitebronx bg-oceanblue mt-10 cursor-pointer z-50"/>
  </div>
</template>

<script setup>
import ButtonComp from './ButtonComp.vue';


</script>

<style>

</style>