import {ref} from 'vue'
import type { PokemonTypeIndividual, PokemonTypeResponse } from "@/interfaces/pokemon.interfaces"
import axios from "axios"

const API_URL = import.meta.env.VITE_POKEAPI_URL

export default function useFetchPokemon() {
    const pokName = ref('')
    const pokImg = ref('')
    const pokTypes = ref<any[]>([])
    const pokTypeName = ref<string[]>([])
    const pokTypeSprites = ref<string[]>([])

    const isLoading = ref(false)

    const isError = ref(false)
    const errorCatched = ref<string>('')

    async function fetchPokemon(){
        try {
            isLoading.value = true
            const api = axios.create({
                baseURL: API_URL,
                timeout: 3000
            });
            await new Promise(resolve => setTimeout(resolve, 1100));
            const rand : Number = Math.floor(Math.random() * 1024)+1 // Fet per quintó
            const response  = await api.get("pokemon/" + rand);
            

            pokName.value = response.data.name;
            pokImg.value = response.data.sprites.front_default
            pokTypes.value = response.data.types
            
            for (let i = 0; i < pokTypes.value.length; i++) {
                pokTypeName.value[i] = pokTypes.value[i].type.name;
                const pokTypeResponse = await axios.get<PokemonTypeResponse>(API_URL + "type");
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

        } catch (error: any) {
            
            errorCatched.value = error.message
            isError.value = true
            isLoading.value = false
        }
    }
    
    return {
        pokImg, 
        pokTypes, 
        pokTypeSprites, 
        pokName,
        isLoading,
        isError,
        errorCatched,
        fetchPokemon
    }
}
