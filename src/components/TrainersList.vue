<template>
    <div class="p-6 justify-top items-center bg-[#dadac8] self-center flex flex-col h-140 w-110 bg-red/30 rounded-xl border-2 border-gray-400 backdrop-blur-sm">
        <mainTitle>Trainers List</mainTitle>
        <TrainersListElement v-for="trainer in trainers" :key="trainer.id">
            <img class="bg-white/40 w-20 object-cover border-2 rounded-2xl border-[#cb9113]" :src="trainer.pokemon ? trainer.pokemon : '/src/assets/default-icon.jpg'" />
            <div class="flex flex-col">
                <div class="flex flex-row gap-1">
                    <h1 class="text-2xl"> {{ trainer.name }} </h1>
                    <h1 class="text-2xl"> {{ trainer.lastName }}</h1>
                </div>
                <div class="flex flex-row ">
                    <h2 class=""> {{ trainer.email }}</h2>
                </div>
            </div>
            <button v-if="!trainer.pokemon" @click="assignPokemonToTrainer(trainer)" class="ml-auto mr-3 hover:scale-110 transition-all"><img class="w-10" src="../assets/Poké_Ball_icon.svg.png"></button>
           
        </TrainersListElement>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useTrainersStore } from '@/stores/useTrainersStore'        
import mainTitle from '@components/ui/MainTitle.vue';
import TrainersListElement from '@components/ui/TrainersListElement.vue';
import useFetchPokemon from '@/composables/UseFetchPokemon';
const trainersStore = useTrainersStore()
const { trainers } = storeToRefs(trainersStore)

const { fetchPokemon, pokImg }= useFetchPokemon()

async function assignPokemonToTrainer(trainer: any){
    await fetchPokemon()
    trainersStore.assignPokemon(trainer.id, pokImg.value)
}

</script>
