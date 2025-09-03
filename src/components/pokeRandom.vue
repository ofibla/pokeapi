<template>
    <div class="self-center flex items-center justify-center flex-col h-100 w-150">
        <img :src="pokImg" alt="Pokemon" />
        <p class="capitalize"> {{ pokName }}</p>
        <img v-for="(type, i) in pokTypes" :src="pokTypeSprites[i]" :alt="type.type.name" />
        <button @click="fetchPokemon()">NewPokemon</button>
    </div>
</template>

<script lang="ts" setup>
import type { PokemonTypeIndividual, PokemonTypeResponse } from "@/interfaces/pokemon.interfaces"
import axios from "axios"
import { ref } from "vue"

//Posar aixo en un component
const pokName = ref('')
const pokImg = ref('')
const pokTypes = ref<any[]>([])
const pokTypeName = ref<string[]>([])
const pokTypeSprites = ref<string[]>([])

async function fetchPokemon() {
    try {
        const rand : Number = Math.floor(Math.random() * 1024)+1
        const response  = await axios.get("https://pokeapi.co/api/v2/pokemon/" + rand);
        

        pokName.value = response.data.name;
        pokImg.value = response.data.sprites.front_default
        pokTypes.value = response.data.types
        
        for (let i = 0; i < pokTypes.value.length; i++) {
            pokTypeName.value[i] = pokTypes.value[i].type.name;
            const pokTypeResponse = await axios.get<PokemonTypeResponse>("https://pokeapi.co/api/v2/type");
            const pokTypeObj = pokTypeResponse.data.results.find(result => result.name === pokTypeName.value[i]);

            if (pokTypeObj && pokTypeObj.url) {
                const pokTypeDetailResponse = await axios.get<PokemonTypeIndividual>(pokTypeObj.url);
                pokTypeSprites.value[i] = pokTypeDetailResponse.data.sprites["generation-viii"]["sword-shield"].name_icon;
            } else {
                pokTypeSprites.value[i] = '';
            }
        }
        return
    } catch (error) {
        console.error(error);
        return null;
    }
}   

fetchPokemon();
</script>


