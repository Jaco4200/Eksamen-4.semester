<template>
  <div class="grid md:grid-cols-2 sm:grid-cols-1 xs:px-6 sm:grid-rows-6 md:grid-rows-3 xl:grid-cols-3 pb-20 xl:grid-rows-2 xl:h-[1700px] md:h-[2400px] xs:h-[4800px] overflow-y-hidden gap-8 lg:px-28 pt-12 w-[calc(100vw-10px)] bg-whitebronx">
    <router-link :to="{ name: 'falles' }" class="bg-white rounded-2xl h-[750px] shadow-2xl">
        <div class=" h-[550px]">
            <img src="../assets/billeder/aktivitet1.svg" alt="" class="object-cover saturate-[0.69] hover:saturate-100 rounded-t-2xl w-full h-full">
        </div>
        <div class=" h-[200px] w-full flex flex-col justify-between px-6 pt-4"><h1 class="text-black font-semibold "> Fantastiske smage og historier</h1><p class="h-[100px]"> Vær med til fællesspisning og udforsk dine smagsløge over meningsfulde samtaler.</p>
        <div class="w-full items-end pb-4 flex flex-row justify-between">
            <p>08-06-2023</p>
            <p>Bronx - KL. 18:00</p>
        </div>
        </div>
    </router-link>
    <router-link :to="{ name: 'mal' }" class="bg-white rounded-2xl h-[750px] shadow-2xl">
        <div class=" h-[550px] w-full ">
            <img src="../assets/billeder/aktivitet2.svg" alt="" class="object-cover rounded-t-2xl w-full h-full transition-all lg:saturate-[0.69] xs:saturate-100 hover:saturate-100">
        </div>
        <div class=" h-[200px] w-full flex items-between justify-between flex-col px-6 pt-4"><h1 class="text-black font-semibold"> Kom I kontakt med din indre kunstner</h1><p class="h-[100px]"> Slip din indre kreative kunstner løs gennem vores male og tegne workshop</p>
        <div class="w-full flex flex-row pb-4 justify-between">
            <p>11-06-2023</p>
            <p>Bronx - KL. 18:00</p>
        </div>
        </div>
    </router-link >
    <router-link :to="{ name: 'spil' }" class="bg-[url('../assets/billeder/aktivitet3.svg')] lg:saturate-[0.69] xs:saturate-100 h-[750px] bg-left-bottom px-6 hover:saturate-100 bg-cover object-top rounded-2xl shadow-2xl flex justify-end flex-col ">
        <div class=" h-[200px] flex flex-col justify-between pt-4">
            <h1 class="text-whitebronx font-semibold"> Oplev den søde smag af sejr</h1>
            <p class="text-whitebronx h-[100px]"> Saml dit hold til vors brætspils aften og opnå sejren gennem strategi, list eller lidt held</p>
        <div class="w-full items-end text-whitebronx pb-4 flex flex-row justify-between">
            
            <p>15-06-2023</p>
            <p>Bronx - KL. 18:00</p>
        </div>
        </div>
    </router-link>
    <router-link :to="{ name: 'film' }" id="aktivitet4" class="bg-[url('../assets/billeder/filmaften.jpg')] bg-center lg:saturate-[0.69] xs:saturate-100 bg-cover h-[750px] bg-no-repeat px-6 hover:saturate-100 rounded-2xl shadow-2xl flex justify-end flex-col ">
        <div class=" h-[200px] flex flex-col justify-between pt-4"><h1 class="text-whitebronx font-semibold"> En aften med film og uforglemmelige øjeblikke</h1><p class="text-whitebronx h-[100px]">Slå dig ned I godt selskab og oplev sand filmmagi med lækre snacks og verdensklasse selskab</p>
        <div class="w-full items-end text-whitebronx flex flex-row justify-between pb-4">
            
            <p>21-06-2023</p>
            <p>Bronx - KL. 16:00</p></div>
        </div>
    </router-link>
<router-link :to="{ name: 'quiz' }" class=" h-[750px] bg-white rounded-2xl shadow-2xl">
    <div class=" h-[550px] w-full ">
        <img src="../assets/billeder/quiz.jpg" alt="" class="object-cover rounded-t-2xl w-full h-full transition-all saturate-[0.69] hover:saturate-100">
    </div>
    <div class=" h-[200px] flex justify-between flex-col w-full px-6 pt-4"><h1 class="text-black py-0">En aften fuld med indsigter og hjernevrid</h1><p class="h-[100px]"> Test din paratviden af til vores spændende quizaften, og vær med til at føre dit hold til sejr.</p>
    <div class="w-full items-end flex flex-row pb-4 justify-between">
        <p>18-06-2023</p>
        <p>Bronx - KL. 14:00</p>
    </div>
    </div>
</router-link>
<router-link :to="{ name: 'lego' }" class="bg-white h-[750px] rounded-2xl shadow-2xl">
    <div class=" h-[550px] w-full ">
        <img src="../assets/billeder/aktivitet6.svg" alt="" class="object-cover object-center rounded-t-2xl h-full transition-all saturate-[0.69] hover:saturate-100">
    </div>
    <div class=" h-[200px] w-full flex flex-col justify-between px-6 pt-4"><h1 class="text-black font-semibold"> Spektakulære kreationer og relationer</h1><p class="h-[100px]">Dyk sammen ned I en verden af klodser og fantasi, hvor det kun er fantasien der sætter grænser. </p>
    <div class="w-full items-end flex flex-row pb-4 justify-between">
        <p>22-06-2023</p>
        <p>Bronx - KL. 12:00</p>
    </div>
    </div>
</router-link>
  </div>
</template>

<script setup>

</script>

<style>
#aktivitet4{
    object-position: -400px 0px;
}
</style>