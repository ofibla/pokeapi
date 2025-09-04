<template>
    <div class="w-screen h-screen flex items-center justify-center bg-[#e8e8e6] bg-[radial-gradient(#a29f9f_1.95px,#e8e8e6_1.95px)] bg-[length:35px_35px]">
        <Error v-if="isError"></Error>
        <Pokemon v-else></Pokemon>
        <SideBar></SideBar>
        <TopBar></TopBar>
    </div>
    
</template>

<script setup lang="ts">
import Pokemon from '@components/PokeRandom.vue';
import Error from '@components/Error.vue';
import SideBar from '@components/SideBar.vue'
import TopBar from '@components/TopBar.vue'

import useFetchPokemon  from './composables/UseFetchPokemon'

const { isError } = useFetchPokemon()
</script>

<style>@import "tailwindcss";</style>
