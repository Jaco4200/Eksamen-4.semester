<template>
  <div class="lg:h-[550px] xs:h-[900px] w-full bg-footer text-whitebronx overflow-y-hidden">
  <div class="h-3/5 w-full bg-footer gap-2 pt-20 xs:px-6 lg:px-28 border-b-2 border-b-darken border-white md:flex xs:grid xs:grid-cols-2">
    <div class=" xs:hidden xl:block lg:w-5/12 mr-14"><router-link :to=" {name: 'home'} "><img src="../assets/logo.svg" alt="" class="w-1/4 -ml-1"></router-link><p class="text-primary pt-4 pr-44">Bronx er stedet for fælleskab og aktiviteter. Vi dyrker altid den gode stemning, og går op I at skabe et trygt miljø, hvor alle kan føle sig hjemme i et varm og imødekommende miljø, hvor fælleskabet og uforglemmelige oplevelser kan blomstre.</p></div>
    <div class="xs:w-6/12 md:w-4/12 xl:w-2/12"><h1>Navigation</h1>
    <p class="pt-4 hover:opacity-50 cursor-pointer"><router-link :to=" {name: 'home'}">Hjem</router-link></p>
    <p class="py-4 hover:opacity-50 cursor-pointer"><router-link :to=" {name: 'omBronx'}">Om bronx</router-link></p>
    <p class="pb-4 hover:opacity-50 cursor-pointer"><router-link :to=" {name: 'kalender'}">Kalender</router-link></p>
    <p class="hover:opacity-50 cursor-pointer"><router-link :to=" {name: 'medlemsskab'}">Medlemsskab</router-link></p></div>
    <div class=" xs:w-7/12 md:w-4/12 lg:w-3/12"><h1>Kontakt Informationer</h1> 
    <p class="py-4">Tlf. +45&nbsp;91&nbsp;52&nbsp;52&nbsp;45 </p>
    <p>E-mail: sighej@bronx5200.dk</p>
    </div>
    <div class=" xs:w-full md:ml-32 xl:ml-0 md:w-4/12 xs:h-4/6 lg:h-5/6 xl:w-[200px] flex flex-col col-span-2 xs:mt-10 md:mt-0 xs:mb-10 lg:mb-0 justify-between"><h1 class=" mb-4">Abningstider</h1>
    <div class="flex flex-row justify-between ">
      <p>Mandag</p><p> 8:30 - 15:00</p>
    </div>
    <div class="flex flex-row justify-between ">
      <p>Tirsdag</p><p> 8:30 - 15:00</p>
    </div>
    <div class="flex flex-row justify-between ">
      <p>Onsdag</p><p> 8:30 - 21:00</p>
    </div>
    <div class="flex flex-row justify-between ">
      <p>Torsdag</p><p> 8:30 - 21:00</p>
    </div>
    <div class="flex flex-row justify-between ">
      <p>Fredag</p><p>Lukket</p>
    </div>
    <div class="flex flex-row justify-between ">
      <p>Lørdag</p><p>Lukket</p>
    </div>
    <div class="flex flex-row justify-between ">
      <p>Søndag</p><p> 8:30 - 15:50</p>
    </div>
  </div>
    
  </div>
  <div class="w-full h-[218px] bg-footer flex flex-col gap-4 items-center justify-center">
    <p class="text-white">© Bronx – 2023 Middelfartvej 115b st.  5200 Odense V</p>
    <div class="flex flex-row gap-4 w-full justify-center">
      <a class="text-white">Cookie information </a><p>|</p> <a>Privatlivspolitik </a>
    </div>
    <div class="flex flex-row gap-6 w-full justify-center">
     <a href="https://www.facebook.com/profile.php?id=100092525427290"> <img src="../assets/billeder/facebook.svg" class="h-8 hover:brightness-50" alt=""></a>
      <a href="https://www.instagram.com/bronxstudieprojekt/reels/?fbclid=IwAR1C8W7wa2joshf7TbV3d8bAUEfQ39SfgC2GD-qKvzL7SIijLlyUVQUy0UM"><img src="../assets/billeder/instagram.svg" class="h-8 hover:brightness-50" alt=""></a>
    </div>
  </div>
</div>
</template>

<script setup>

</script>

<style>

</style>