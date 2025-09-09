<template>
    <div class="p-6 justify-top items-center bg-[#dadac8] self-center flex flex-col h-140 w-130 bg-red/30 rounded-xl border-2 border-gray-400 backdrop-blur-sm">
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
            <div class="ml-auto  mr-3 flex items-center">
                <button v-if="!trainer.pokemon" @click="assignPokemonToTrainer(trainer)" class=" hover:scale-110 transition-all"><img class="w-10" src="../assets/Poké_Ball_icon.svg.png"></button>
                <button  @click="updateTrainer(trainer)" class=" hover:scale-110 transition-all"> <img class="w-10" src="/src/assets/edit.png"></img></button>
                <button @click="openDelete(trainer)" class=" hover:scale-110 transition-all"><img class="w-9"  src="/src/assets/delete.png" ></img></button>
            </div>
            
        </TrainersListElement>
    </div>
    <PopUpModal 
        v-if="modal" 
        @closeModal="toggleModal" 
        :trainer="selectedTrainer">
    </PopUpModal>
    <ConfirmDelete 
        v-if="showDelete" 
        @closeDelete="toggleDelete" 
        @deleteTrainer="deleteTrainer">
    </ConfirmDelete>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useTrainersStore } from '@/stores/useTrainersStore'
import {ref} from 'vue'

import mainTitle from '../components/ui/MainTitle.vue';
import TrainersListElement from '../components/ui/TrainersListElement.vue';
import PopUpModal from '../components/PopUpModal.vue'
import ConfirmDelete from './ui/ConfirmDelete.vue';

import useFetchPokemon from '@/composables/UseFetchPokemon';


const trainersStore = useTrainersStore()
const { trainers } = storeToRefs(trainersStore)

const { fetchPokemon, pokImg }= useFetchPokemon()

const showDelete = ref(false)
const modal = ref(false)
const selectedTrainer = ref<any>(null)

async function assignPokemonToTrainer(trainer: any){
    await fetchPokemon()
    trainersStore.assignPokemon(trainer.id, pokImg.value)
}

function deleteTrainer(){
    if(selectedTrainer.value){
        trainersStore.removeById(selectedTrainer.value.id)
        selectedTrainer.value = null
    }
    toggleDelete()
}

function toggleDelete(){
    showDelete.value = !showDelete.value
}

function toggleModal(){
    modal.value = !modal.value
}

function updateTrainer(trainer: any){
    selectedTrainer.value = trainer
    toggleModal()
}

function openDelete(trainer: any){
    selectedTrainer.value = trainer
    toggleDelete()
}
</script>
