<template>
    <div class="w-screen h-screen flex items-center justify-center bg-[#e8e8e6] bg-[radial-gradient(#a29f9f_1.95px,#e8e8e6_1.95px)] bg-[length:35px_35px]">
        <error v-if="isError"></error>
        <pokemon v-else></pokemon>
    </div>
    
</template>

<script setup lang="ts">
import pokemon from './components/pokeRandom.vue';
import error from './components/error.vue';
import useFetchPokemon  from './composables/useFetchPokemon'

const { isError } = useFetchPokemon()
console.log(isError)
</script>

<style>@import "tailwindcss";</style>
