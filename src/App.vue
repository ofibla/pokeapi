<template>
    <div class="w-screen h-screen flex items-center justify-center bg-[#e8e8e6] bg-[radial-gradient(#a29f9f_1.95px,#e8e8e6_1.95px)] bg-[length:35px_35px]">
        <Error v-if="isError" :errorCatched="errorCatched"></Error>
        <Pokemon v-else-if="!isError && isPokemon"
            :pokImg="pokImg"
            :pokTypes="pokTypes"
            :pokTypeSprites="pokTypeSprites"
            :pokName="pokName"
            :isLoading="isLoading"
            :fetchPokemon="fetchPokemon"
        ></Pokemon>
        <TrainersList v-else-if="!isError && isTrainersList"
            :pokImg="pokImg"
            :fetchPokemon="fetchPokemon"
        ></TrainersList>
        <AddTrainers v-else-if="!isError && isAddTrainer"></AddTrainers>
        <TopBar @changePage="changePage"></TopBar>
    </div>
    
</template>

<script setup lang="ts">
import { ref } from 'vue'
 
import Error from '@components/Error.vue';
import TopBar from '@components/TopBar.vue'

import AddTrainers from '@components/AddTrainers.vue'
import TrainersList from '@components/TrainersList.vue';
import Pokemon from '@components/PokeRandom.vue';


import useFetchPokemon  from './composables/UseFetchPokemon.ts'


const isPokemon = ref(true)
const isAddTrainer = ref(false)
const isTrainersList = ref(false) 

const currentPage = ref('')

const {
    pokImg, 
    pokTypes, 
    pokTypeSprites, 
    pokName, 
    isLoading,
    isError,
    errorCatched,
    fetchPokemon
} = useFetchPokemon()

function changePage(btn: string) {
    //Es true nomes si btn es igual a la string
    isPokemon.value = btn === 'Pokemon'
    isAddTrainer.value = btn === 'Add Trainer'
    isTrainersList.value = btn === 'Trainers'
}   


</script>

<style>@import "tailwindcss";</style>
