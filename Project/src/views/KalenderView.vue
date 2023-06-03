<template>
<div>
    <div class="h-64 w-full">
            <img src="../assets/billeder/kalender.jpg" class="object-cover h-64 w-full absolute top-0 brightness-[0.69]" alt="">
            <TopMenu/>

    </div>
    <div class="flex flex-col justify-center items-center">
        <h1 class="text-2xl text-black text-center my-20">Få et overblik over kommende events </h1>
        <div class="bg-whitebronx w-full h-max flex items-center justify-center">
            <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%237b86c6&ctz=Europe%2FWarsaw&showTitle=0&showTz=0&showCalendars=0&showPrint=0&src=ZGVnaXN0aXZlZUBnbWFpbC5jb20&color=%#7b86c6&color=%#7b86c6&color=%#7b86c6" style="margin-bottom: 100px;" width="1400" height="600" frameborder="0" scrolling="no"></iframe>
        </div>

    </div>
    <Footer/>
</div>
</template>

<script setup>
import Banner from '../Components/Banner.vue';
import Footer from '../Components/FooterComp.vue';
import TopMenu from '../Components/TopMenu.vue'

document.cookie = "username=John Doe";
</script>

<style scoped>
.logo-plus-button{
    display: none;
}

</style>