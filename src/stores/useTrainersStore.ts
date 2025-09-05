import { ref } from 'vue'
import { defineStore } from 'pinia';

interface Trainer {
    name: String,
    lastName: String,
    dni: String,
    email: String,
    pokemon: null
}

export const useTrainersStore = defineStore('trainers', () => {
    
    //State
    const trainers  = ref<Trainer[]>([]);
    
    //Actions
    function addTrainer(trainer: Trainer) {
        trainers.value.push(trainer);
    }

    //Getters
    

    return { trainers, addTrainer }
})