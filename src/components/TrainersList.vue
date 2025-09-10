<template>
    <div class="p-6 justify-top items-center bg-[#dadac8] self-center flex flex-col h-140 w-130 bg-red/30 rounded-xl border-2 border-gray-400 backdrop-blur-sm">
        <mainTitle>Trainers List</mainTitle>
        <TrainersListElement
            v-for="trainer in trainers"
            :key="trainer.id"
            :trainer="trainer"
            :isLoading="isLoading"
            @assign-pokemon="assignPokemonToTrainer"
            @update-trainer="updateTrainer"
            @delete-trainer="openDelete"
        />

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
import { ref} from 'vue'

import mainTitle from '../components/ui/MainTitle.vue';
import TrainersListElement from '../components/ui/TrainersListElement.vue';
import PopUpModal from '../components/PopUpModal.vue'
import ConfirmDelete from './ui/ConfirmDelete.vue';
import type { Trainer } from '@/interfaces/trainers.interface';
import useFetchPokemon from '@/composables/UseFetchPokemon';


const trainersStore = useTrainersStore()
const { trainers } = storeToRefs(trainersStore)

const { 
    pokImg,
    isLoading, 
    fetchPokemon 
} = useFetchPokemon()

const showDelete = ref(false)
const modal = ref(false)
const selectedTrainer = ref<Trainer>()



async function assignPokemonToTrainer(trainer: Trainer){
    await fetchPokemon()
    trainersStore.assignPokemon(trainer.id, pokImg.value)
}

function deleteTrainer(){
    if(selectedTrainer.value){
        trainersStore.removeById(selectedTrainer.value.id)
        selectedTrainer.value = undefined
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
