<template>
    <div class="w-screen h-screen flex items-center justify-center bg-[#e8e8e6] bg-[radial-gradient(#a29f9f_1.95px,#e8e8e6_1.95px)] bg-[length:35px_35px]">
        <Error v-if="isError" :errorCatched="errorCatched"></Error>
        <TopBar v-if="userStore.isLogged" @changePage="changePage"></TopBar>
        <RouterView></RouterView>
    </div>
    
</template>

<script setup lang="ts">
import { ref } from 'vue'
 
import Error from '@/components/Error.vue';
import TopBar from '@/components/TopBar.vue'
import { useUserStore } from './stores/useUserStore';

const userStore = useUserStore()

const isPokemon = ref(true)
const isAddTrainer = ref(false)
const isTrainersList = ref(false) 

function changePage(btn: string) {
    //Es true nomes si btn es igual a la string
    isPokemon.value = btn === 'Pokemon'
    isAddTrainer.value = btn === 'Add Trainer'
    isTrainersList.value = btn === 'Trainers'
}   

</script>

<style>@import "tailwindcss";</style>
