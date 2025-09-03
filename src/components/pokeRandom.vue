<template>
    <div>
        <p class="capitalize text-2xl bg-[#efefbf] p-2 pl-7 pr-7 rounded-xl border-2 border-[#baba79]"> <strong>{{ pokName }}</strong></p>
        <img :src="pokImg" alt="Pokemon" class="min-h-30 bg-grey-600 m-7" />
        <div class="min-h-10 flex flex-row gap-2">
            <img v-for="(type, i) in pokTypes" :src="pokTypeSprites[i]" :alt="type.type.name" class="object-cover rounded-xl"/>
        </div>
        <button @click="fetchPokemon()" class="bg-[#efefbf] border-2 border-[#baba79] hover:bg-[#8b8b5a] hover:text-white font-bold py-2 px-4 rounded mt-5">New Pokemon</button>
    </div>
</template>

<script lang="ts" setup>
import type { PokemonTypeIndividual, PokemonTypeResponse } from "@/interfaces/pokemon.interfaces"
import axios from "axios"
import { ref } from "vue"

//Posar aixo en un composable
const pokName = ref('')
const pokImg = ref('')
const pokTypes = ref<any[]>([])
const pokTypeName = ref<string[]>([])
const pokTypeSprites = ref<string[]>([])

async function fetchPokemon() {
    try {
        const rand : Number = Math.floor(Math.random() * 1024)+1 // Fet per quintó
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


