<template>
  <div class="grid md:grid-cols-2 sm:grid-cols-1 xs:px-6 sm:grid-rows-6 md:grid-rows-3 xl:grid-cols-3 pb-20 xl:grid-rows-2 xl:h-[1500px] md:h-[2250px] xs:h-[4500px] overflow-y-hidden gap-8 lg:px-28 pt-12 w-[calc(100vw-10px)] bg-white">
    <router-link :to="{ name: 'falles' }" class="bg-white rounded-2xl shadow-2xl">
        <div class=" h-3/4">
            <img src="../assets/billeder/aktivitet1.svg" alt="" class="object-cover saturate-[0.69] hover:saturate-100 rounded-t-2xl w-full h-full">
        </div>
        <div class=" h-1/4 w-full px-6 pt-4"><h1 class="text-black font-semibold pb-4"> Fantastiske smage og historier</h1><p > Vær med til fællesspisning og udforsk dine smagsløge over meningsfulde samtaler.</p>
        <div class="w-full h-2/4 items-end pb-6 flex flex-row justify-between">
            <p>08-06-2023</p>
            <p>Bronx - KL. 18:00</p>
        </div>
        </div>
    </router-link>
    <router-link :to="{ name: 'mal' }" class="bg-white rounded-2xl shadow-2xl">
        <div class=" h-3/4 w-full ">
            <img src="../assets/billeder/aktivitet2.svg" alt="" class="object-cover rounded-t-2xl w-full h-full transition-all saturate-[0.69] hover:saturate-100">
        </div>
        <div class=" h-1/4 w-full px-6 pt-4"><h1 class="text-black font-semibold md:pb-4"> Kom I kontakt med din indre kunstner</h1><p class="pb-5" > Slip din indre kreative kunstner løs gennem vores male og tegne workshop</p>
        <div class="w-full h-2/4 items-end xs:pb-8 md:pb-10 2xl:pb-7 flex flex-row justify-between">
            <p>11-06-2023</p>
            <p>Bronx - KL. 18:00</p>
        </div>
        </div>
    </router-link >
    <router-link :to="{ name: 'spil' }" class="bg-[url('../assets/billeder/aktivitet3.svg')] saturate-[0.69] bg-left-bottom px-6 hover:saturate-100 bg-cover object-top rounded-2xl shadow-2xl flex justify-end flex-col ">
        <div class=" pb-4"><h1 class="text-whitebronx font-semibold pb-4"> Oplev den søde smag af sejr</h1><p class="text-whitebronx pb-4"> Saml dit hold til vors brætspils aften og opnå sejren gennem strategi, list eller lidt held</p></div>
        <div class="w-full items-end pb-4 text-whitebronx flex flex-row justify-between">
            
            <p>15-06-2023</p>
            <p>Bronx - KL. 18:00</p>
        </div>
    </router-link>
    <router-link :to="{ name: 'film' }" id="aktivitet4" class="bg-[url('../assets/billeder/filmaften.jpg')] bg-center saturate-[0.69] bg-cover bg-no-repeat px-6 hover:saturate-100 rounded-2xl shadow-2xl flex justify-end flex-col ">
        <div class=" pb-4"><h1 class="text-whitebronx font-semibold pb-4"> En aften med film og uforglemmelige øjeblikke</h1><p class="text-whitebronx pb-4">Slå dig ned I godt selskab og oplev sand filmmagi med lækre snacks og verdensklasse selskab</p></div>
        <div class="w-full items-end pb-4 text-whitebronx flex flex-row justify-between">
            
            <p>21-06-2023</p>
            <p>Bronx - KL. 16:00</p>
        </div>
    </router-link>
<router-link :to="{ name: 'quiz' }" class="bg-white rounded-2xl shadow-2xl">
    <div class=" h-3/4 w-full ">
        <img src="../assets/billeder/quiz.jpg" alt="" class="object-cover rounded-t-2xl w-full h-full transition-all saturate-[0.69] hover:saturate-100">
    </div>
    <div class=" h-1/4 w-full px-6 pt-4"><h1 class="text-black  font-semibold xs:pb-2 md:pb-4">En aften fuld med indsigter og hjernevrid</h1><p > Test din paratviden af til vores spændende quizaften, og vær med til at føre dit hold til sejr.</p>
    <div class="w-full h-2/4 items-end xs:pb-10 md:pb-6 flex flex-row justify-between">
        <p>18-06-2023</p>
        <p>Bronx - KL. 14:00</p>
    </div>
    </div>
</router-link>
<router-link :to="{ name: 'lego' }" class="bg-white rounded-2xl shadow-2xl">
    <div class=" h-3/4 w-full ">
        <img src="../assets/billeder/aktivitet6.svg" alt="" class="object-cover object-center rounded-t-2xl h-full transition-all saturate-[0.69] hover:saturate-100">
    </div>
    <div class=" h-1/4 w-full px-6 pt-4"><h1 class="text-black font-semibold md:pb-4 xs:pb-2"> Spektakulære kreationer og relationer</h1><p >Dyk sammen ned I en verden af klodser og fantasi, hvor det kun er fantasien der sætter grænser. </p>
    <div class="w-full h-2/4 items-end md:pb-6 xs:pb-12 flex flex-row justify-between">
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