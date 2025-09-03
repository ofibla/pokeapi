<template>
    <div class="w-screen h-screen flex items-center justify-center bg-[#e8e8e6] bg-[radial-gradient(#a29f9f_1.95px,#e8e8e6_1.95px)] bg-[length:35px_35px]">
        <pokemon class=" bg-[#dadac8] self-center flex items-center justify-center flex-col h-100 w-155 bg-red/30 rounded-xl border-2 border-gray-400 backdrop-blur-sm"></pokemon>
    </div>

</template>

<script setup lang="ts">
import pokemon from './components/pokeRandom.vue';


</script>

<style>
@import "tailwindcss";
</style>
