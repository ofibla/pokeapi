<template>
    <div v-if="isLoading" class="flex items-center justify-center  w-50">
        <img class="object-cover rounded-full" src="../assets/simple_pokeball.gif" alt="Loading..." />
    </div>

    <div v-else class=" bg-[#dadac8] self-center flex items-center justify-center flex-col h-100 w-90 bg-red/30 rounded-xl border-2 border-gray-400 backdrop-blur-sm">
        <p class="capitalize text-2xl bg-[#efefbf] p-2 pl-7 pr-7 rounded-xl border-2 border-[#baba79]"> <strong>{{ pokName }}</strong></p>
        <img :src="pokImg" alt="Pokemon" class="min-h-50 bg-grey-600 " />
        <div class="max-h-7 flex flex-row justify-center gap-2">
            <img v-for="(type, i) in pokTypes" :src="pokTypeSprites[i]" :alt="type.type.name" class="object-cover rounded-xl"/>
        </div>
        <button @click="fetchPokemon()" class="bg-[#efefbf] border-2 border-[#baba79] hover:bg-[#8b8b5a] hover:text-white font-bold py-2 px-4 rounded mt-5">New Pokemon</button>
    </div>
    
    
</template>

<script lang="ts" setup>
import useFetchPokemon  from '../composables/useFetchPokemon'

const {pokImg, pokTypes, pokTypeSprites, pokName, isLoading, fetchPokemon} = useFetchPokemon()
</script>


