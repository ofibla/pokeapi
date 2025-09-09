import { ref, watch } from 'vue'
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

    //Load from local storage
    const saved = localStorage.getItem('trainers')
    if (saved){
        trainers.value = JSON.parse(saved)
    }

    //Save to local storage when change
    watch(trainers, (newVal) => {
        localStorage.setItem('trainers', JSON.stringify(newVal))
    }, { deep: true }) //Assegura que se guardan cambios internos en los objetos

    //Actions
    function addTrainer(trainer: Trainer) {
        trainers.value.push(trainer);
    }

    function removeById(id:string){
        // torna un array en les pelicules que NO tenen la id especificada
        trainers.value = trainers.value.filter(t => t.id !== id)
    }

    function update(updatedTrainer:any){
        const trainer = trainers.value.find(trainer => updatedTrainer.id === trainer.id);
        console.log("the hell")
        if(trainer){
            Object.assign(trainer, updatedTrainer)
        }
    }

    function assignPokemon(id: string, pokemon: string){
        const trainer = trainers.value.find(trainer => trainer.id === id)
        if (trainer) {
            trainer.pokemon = pokemon
        }
    }
    
    //Getters
    

    return { trainers, addTrainer, assignPokemon, removeById, update }
})