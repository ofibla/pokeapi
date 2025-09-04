<template>
    <div class="bg-red-500 text-white  p-3 rounded-xl">
        <h1 class="text-5xl ">Error: <strong>{{ errorCatched }} 😢</strong></h1>
    </div>
    
</template>

<script setup lang="ts">
import useFetchPokemon  from '@composables/UseFetchPokemon'

const {errorCatched} = useFetchPokemon()
</script>