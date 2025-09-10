<template>
<div class="flex flex-row">
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

        <btn v-if="!editMode" class="text-2xl w-50 mx-auto mt-5">Submit</btn>
        <div v-else-if="editMode " class="flex flex-col h-18 items-center">
          <btn @click="updateTrainerFunc" class="text-2xl w-50 mx-auto ">Update</btn>
          <btn @click="$emit('closeModal')" class="w-20">
            Close
          </btn>
        </div>
        
    </form>
    <FormValidationErrors v-if="submit"
    :trainerForm="trainerForm"
    :errors = "errors"
    ></FormValidationErrors>
</div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useTrainersStore } from '@/stores/useTrainersStore'
import type { Trainer } from '@/interfaces/trainers.interface'
import { useValidForm } from '@/composables/UseValidForm'
import { toast } from 'vue3-toastify'
import "vue3-toastify/dist/index.css";

import addTrainerLabel from './addTrainerLabel.vue'
import InputAddTrainer from './InputAddTrainer.vue'
import btn from '../ui/Button.vue'
import FormValidationErrors from '@/components/ui/FormValidationErrors.vue'

const initialTrainerState = (): Trainer => ({
  id: Date.now().toString(),
  name: '',
  lastName: '',
  dni: '',
  email: '',
  pokemon: null
})


const props = defineProps<{ trainer?: Trainer }>()
const emit = defineEmits<{ (e: 'closeModal'): void }>()

const trainerForm = ref<Trainer>(initialTrainerState())
const editMode = computed(() => !!props.trainer)
const submit = ref(false)

const { errors, isValid } = useValidForm(trainerForm)
const trainersStore = useTrainersStore()



watch(
  () => props.trainer,
  (newTrainer) => {
    trainerForm.value = newTrainer ? { ...newTrainer } : initialTrainerState()
  },
  { immediate: true }
)

function updateTrainerFunc() {
  if (!isValid.value) return
  trainersStore.update(trainerForm.value)
  toast("Trainer updated!", {
      "theme": "colored",
      "type": "success",
      "position": "bottom-right",
      "dangerouslyHTMLString": true
  })
  emit('closeModal')
}

function submitTrainer() {
  submit.value = true
  if (!isValid.value){
    toast("Check the errors!", {
      "theme": "colored",
      "type": "error",
      "position": "bottom-right",
      "dangerouslyHTMLString": true
    })
    return
  } 
  toast("Trainer created!", {
      "theme": "colored",
      "type": "success",
      "position": "bottom-right",
      "dangerouslyHTMLString": true
  })
  trainersStore.addTrainer({ ...trainerForm.value })
  trainerForm.value = initialTrainerState()
  submit.value=false
}
</script>
