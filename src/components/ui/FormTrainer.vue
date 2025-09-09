<template>
    <form @submit.prevent="submitTrainer" ref="myForm" class="mt-3 grid grid-cols-1 grid-rows-5 items-center">
      <addTrainerLabel>Name:    
        <InputAddTrainer 
            type="text"  
            v-model="trainerForm.name" 
            placeholder="Edu"  
        ></InputAddTrainer></addTrainerLabel>

      <addTrainerLabel>Surname: 
        <InputAddTrainer 
            type="text"  
            v-model="trainerForm.lastName" 
            placeholder="Quintó" 
        ></InputAddTrainer></addTrainerLabel>

      <addTrainerLabel>DNI:
        <InputAddTrainer 
            type="text"  
            v-model="trainerForm.dni" 
            placeholder="1234578N" 
        ></InputAddTrainer></addTrainerLabel>

      <addTrainerLabel >Email:  
        <InputAddTrainer 
            type="text" 
            v-model="trainerForm.email" 
             placeholder="example@example.com" 
        ></InputAddTrainer></addTrainerLabel>

      <btn type="submit" class="text-2xl w-50 mx-auto ">Submit</btn>
    </form>
</template>

<script setup lang="ts">
import addTrainerLabel from './addTrainerLabel.vue';
import InputAddTrainer from './InputAddTrainer.vue';
import btn from '../ui/Button.vue'

import { ref } from 'vue'
import { useTrainersStore } from '@/stores/useTrainersStore'

const initialTrainerState = () => ({
  id: Date.now().toString(),
  name: '',
  lastName: '',
  dni: '',
  email: '',
  pokemon: null
})

const trainerForm = ref(initialTrainerState())
const trainersStore = useTrainersStore()

function submitTrainer(){
  const newTrainer = {
    ...trainerForm.value
  }
  trainersStore.addTrainer(newTrainer)

  trainerForm.value = initialTrainerState()
}

</script>