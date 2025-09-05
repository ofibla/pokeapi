<template>
  <MainDiv class="w-100 h-120">
    <MainTitle>Add Trainer</MainTitle>
    <form @submit.prevent="submitTrainer" class="mt-3 grid grid-cols-1 grid-rows-5 items-center">
      <addTrainerLabel>Name: <input class="rounded" v-model="trainerForm.name" placeholder="Edu"></input></addTrainerLabel>
      <addTrainerLabel>Surname: <input class="rounded" v-model="trainerForm.lastName" placeholder="Quintó"></input></addTrainerLabel>
      <addTrainerLabel>DNI: <input class="rounded" v-model="trainerForm.dni" placeholder="1234578N"></input></addTrainerLabel>
      <addTrainerLabel >Email: <input class="rounded" v-model="trainerForm.email" placeholder="example@example.com"></input></addTrainerLabel>
      <btn class="text-2xl w-50 mx-auto ">Submit</btn>
    </form>
  </MainDiv>
</template>

<script setup lang="ts">
import btn from '@components/ui/Button.vue'
import MainDiv from '@components/ui/MainDiv.vue'
import addTrainerLabel from '@components/ui/addTrainerLabel.vue'

import { ref } from 'vue'
import { useTrainersStore } from '@/stores/useTrainersStore'
import { storeToRefs } from 'pinia'
import MainTitle from './ui/MainTitle.vue'


const trainersStore = useTrainersStore()
const { trainers } = storeToRefs(trainersStore)

const trainerForm = ref({
  id: Date.now().toString(),
  name: '',
  lastName: '',
  dni: '',
  email: '',
  pokemon: null
})

function submitTrainer(){
  const newTrainer = {
    ...trainerForm.value
  }
  trainersStore.addTrainer(newTrainer)
}

</script>

<style scoped>
label{
  display: flex;
  justify-content: space-between;
}
input{

  background-color: whitesmoke;
  border: 2px;
  border-color: black;
  padding: 3px;
}
</style>