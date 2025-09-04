<template>
    <div class="w-screen h-screen flex items-center justify-center bg-[#e8e8e6] bg-[radial-gradient(#a29f9f_1.95px,#e8e8e6_1.95px)] bg-[length:35px_35px]">
        <Error v-if="isError" :errorCatched="errorCatched"></Error>
        <Pokemon v-else
            :pokImg="pokImg"
            :pokTypes="pokTypes"
            :pokTypeSprites="pokTypeSprites"
            :pokName="pokName"
            :isLoading="isLoading"
            :fetchPokemon="fetchPokemon"
        ></Pokemon>
        <TopBar></TopBar>
    </div>
    
</template>

<script setup lang="ts">
import Pokemon from '@components/PokeRandom.vue';
import Error from '@components/Error.vue';
import TopBar from '@components/TopBar.vue'

import useFetchPokemon  from './composables/UseFetchPokemon'

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

</script>

<style>@import "tailwindcss";</style>
