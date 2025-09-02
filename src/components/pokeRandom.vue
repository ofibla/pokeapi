<script lang="ts" setup>
import axios from "axios"
import { ref } from "vue"

const pokName = ref('')
const pokImg = ref('')
async function fetchPokemon() {
    try {
        const rand : Number = Math.floor(Math.random() * 1024)+1
        
        const response  = await axios.get("https://pokeapi.co/api/v2/pokemon/" + rand);
        pokName.value = response.data.name;
        pokImg.value = response.data.sprites.front_default
        return pokName.value;
    } catch (error) {
        console.error(error);
        return null;
    }
}

fetchPokemon();

</script>

<template>
    <img :src="pokImg" alt="Pokemon" />
    <p> {{ pokName }}</p>
    <button @click="fetchPokemon()">NewPokemon</button>
</template>

<style>
button{
    background-color: grey;
}
</style>