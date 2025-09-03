<template>
    <div v-if="isLoading" class="flex items-center justify-center h-60 w-60">
        <img class="object-cover rounded-full" src="../assets/simple_pokeball.gif" alt="Loading..." />
    </div>
    
    <div v-else class=" bg-[#dadac8] self-center flex items-center justify-center flex-col h-100 w-155 bg-red/30 rounded-xl border-2 border-gray-400 backdrop-blur-sm">
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

const apiUrl = import.meta.env.VITE_POKEAPI_URL

//Posar aixo en un composable
const pokName = ref('')
const pokImg = ref('')
const pokTypes = ref<any[]>([])
const pokTypeName = ref<string[]>([])
const pokTypeSprites = ref<string[]>([])

const isLoading = ref(true)


async function fetchPokemon() {
    try {
        isLoading.value = true
        await new Promise(resolve => setTimeout(resolve, 1000)); // Timer de 0.5 pa que se veigue lo loader
        const rand : Number = Math.floor(Math.random() * 1024)+1 // Fet per quintó
        const response  = await axios.get(apiUrl +"pokemon/" + rand);
        

        pokName.value = response.data.name;
        pokImg.value = response.data.sprites.front_default
        pokTypes.value = response.data.types
        
        for (let i = 0; i < pokTypes.value.length; i++) {
            pokTypeName.value[i] = pokTypes.value[i].type.name;
            const pokTypeResponse = await axios.get<PokemonTypeResponse>(apiUrl + "type");
            //Busca un objecte que coincidixque en el nom del tipo del pokemon
            const pokTypeObj = pokTypeResponse.data.results.find(result => result.name === pokTypeName.value[i]);

            if (pokTypeObj && pokTypeObj.url) {
                const pokTypeDetailResponse = await axios.get<PokemonTypeIndividual>(pokTypeObj.url);
                pokTypeSprites.value[i] = pokTypeDetailResponse.data.sprites["generation-viii"]["sword-shield"].name_icon;
            } else {
                pokTypeSprites.value[i] = '';
            }
        }
        isLoading.value = false
        return
    } catch (error) {
        console.error(error);
        isLoading.value = false
        return null;
    }
}   

fetchPokemon();
</script>


