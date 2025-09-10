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

        <btn v-if="!editMode" @click="submitTrainer" class="text-2xl w-50 mx-auto mt-5">Submit</btn>
        <div v-else-if="editMode " class="flex flex-col h-18 items-center">
          <btn @click="updateTrainerFunc" class="text-2xl w-50 mx-auto ">Update</btn>
          <btn @click="$emit('closeModal')" class="w-20">
            Close
          </btn>
        </div>
        
    </form>
</template>

<script setup lang="ts">
import addTrainerLabel from './addTrainerLabel.vue';
import InputAddTrainer from './InputAddTrainer.vue';
import btn from '../ui/Button.vue'

import { computed, ref, watch } from 'vue'
import { useTrainersStore } from '@/stores/useTrainersStore'
import type { Trainer } from '@/interfaces/trainers.interface';

//Estat inicial del trainer
const initialTrainerState = () => ({
  id: Date.now().toString(),
  name: '',
  lastName: '',
  dni: '',
  email: '',
  pokemon: null
})

//Defineix el prop del Trainer
const props = defineProps<{
  trainer?: Trainer
}>()

//Defineix un emit per a tancar la modal del form
const emit = defineEmits<{
  (e: 'closeModal'): void
}>()

//Trainer form igual al estat inicial
const trainerForm = ref<Trainer>(initialTrainerState())

//Inicia la store de pinia
const trainersStore = useTrainersStore()

//Modo
const editMode = computed(() => !!props.trainer)

//Vigila props.trainer per a veure quan canvia
watch(
  () => props.trainer,
  (newTrainer) => {
    if (newTrainer) {
      trainerForm.value = { ...newTrainer } 
    } else {
      trainerForm.value = initialTrainerState() 
    }
  }
)


if (props.trainer){
    trainerForm.value = {...props.trainer}
}

//Actualitza el trainer i tanca la modal
function updateTrainerFunc(){
  trainersStore.update(trainerForm.value)
  emit('closeModal')
}

//Afegeix el nou trainer
function submitTrainer(){
  const newTrainer = {
    ...trainerForm.value
  }
  trainersStore.addTrainer(newTrainer)

  trainerForm.value = initialTrainerState()
}

</script>