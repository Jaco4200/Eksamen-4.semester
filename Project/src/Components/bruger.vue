<template>
  <div class="h-[400px] w-[300px] absolute z-50 right-0 top-24 rounded-bl-lg rounded-tl-lg  flex overflow-x-hidden justify-start items-center flex-col bg-whitebronx">
    <div class="w-full h-2 text-black flex justify-end pr-6 mt-2"><slot>

    </slot></div>
    <img src="../assets/billeder/bruger.png" class="h-16 my-6" alt="">
    <h2 class="text-black mb-4">Hej {{store.user.fornavn }}</h2>

    <div class="w-full px-12 flex flex-col items-center mb-4"><p class="">Navn:</p> <p>{{ store.user.fornavn }} {{ store.user.efternavn }}</p> </div>
    <div class="w-full px-12 flex flex-col items-center mb-4"><p>E-mail:</p> <p>{{ store.user.email }}</p> </div>
    <div :class="store.user.medlem === 'true'? 'text-successgreen' : 'text-dangerred'" class="w-full px-12 flex flex-row justify-between"><p>medlemsskab:</p> <p v-if="store.user.medlem === 'true'">aktiv </p><p v-else>Inaktiv</p> </div>
    <div class="flex flex-row justify-between gap-4 px-12 mt-2">
        <Button
    class="bg-oceanblue text-whitebronx rounded-lg w-[100px] h-10 py-0 px-0 hover:bg-darkblue"
    @click.prevent="store.logout()">Log ud</Button>
    <Button
    class="bg-oceanblue text-whitebronx rounded-lg w-[100px] h-10 py-0 px-0 hover:bg-darkblue"
    button-text="Settings"> Settings</Button>
    </div>
</div>
</template>

<script setup>
import { useMainStore } from '../stores/main';
import ButtonComp from './ButtonComp.vue';
const store = useMainStore();

defineProps({
    close: Boolean,
})
</script>

<style>

</style>