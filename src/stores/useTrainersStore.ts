import { ref } from 'vue'
import { defineStore } from 'pinia';

interface Trainer {
    id: string,
    name: string,
    lastName: string,
    dni: string,
    email: string,
    pokemon: null | string
}

export const useTrainersStore = defineStore('trainers', () => {
    
    //State
    const trainers  = ref<Trainer[]>([]);
    
    //Actions
    function addTrainer(trainer: Trainer) {
        trainers.value.push(trainer);
    }

    function assignPokemon(id: string, pokemon: string){
        const trainer = trainers.value.find(trainer => trainer.id === id)
        if (trainer) {
            trainer.pokemon = pokemon
        }
    }
    //Getters
    

    return { trainers, addTrainer, assignPokemon }
})