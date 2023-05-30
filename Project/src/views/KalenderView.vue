<template>
<div>
    <div class="h-64 w-full">
        <div class="z-50">
            <TopMenu/>
        </div>
        <img src="../assets/billeder/kalenderbanner.svg" class="object-cover h-64 w-full brightness-[0.69]" alt="">
    </div>
    <div class="flex flex-col justify-center items-center">
        <h1 class="text-2xl text-black text-center my-20">Få et overblik over kommende events </h1>
        <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%237b86c6&ctz=Europe%2FCopenhagen&mode=MONTH&showNav=1&showTabs=1&showPrint=0&showCalendars=0&src=amFjb2IuaXBzZW45NkBnbWFpbC5jb20&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZGEuZGFuaXNoI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%#7B86C6&color=%#7B86C6&color=%#7B86C6" style=".logo-plus-button{display: none;}" class="lg:px-28 xs:px-6 rounded-xl mb-28" width="100%" height="600" frameborder="0" scrolling="no"></iframe>
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