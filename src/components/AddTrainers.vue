<template>
  <MainDiv class="w-100 h-120">
    <MainTitle>Add Trainer</MainTitle>
    <form ref="myForm" @submit.prevent="submitTrainer" class="mt-3 grid grid-cols-1 grid-rows-5 items-center">
      <addTrainerLabel>Name:    <input type="text" class="rounded" v-model="trainerForm.name"     placeholder="Edu" required ></input></addTrainerLabel>
      <addTrainerLabel>Surname: <input type="text" class="rounded" v-model="trainerForm.lastName" placeholder="Quintó" required></input></addTrainerLabel>
      <addTrainerLabel>DNI:     <input type="text" class="rounded" v-model="trainerForm.dni"      placeholder="1234578N" required></input></addTrainerLabel>
      <addTrainerLabel >Email:  <input type="email" class="rounded" v-model="trainerForm.email"    placeholder="example@example.com" required></input></addTrainerLabel>
      <btn class="text-2xl w-50 mx-auto ">Submit</btn>
    </form>
  </MainDiv>
</template>

<script setup lang="ts">
import btn from '../components/ui/Button.vue'
import MainDiv from '../components/ui/MainDiv.vue'
import addTrainerLabel from '../components/ui/addTrainerLabel.vue'

import { ref } from 'vue'
import { useTrainersStore } from '@/stores/useTrainersStore'
import MainTitle from './ui/MainTitle.vue'

const trainersStore = useTrainersStore()

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
  trainerForm.value = {
    id: Date.now().toString(),
    name: '',
    lastName: '',
    dni: '',
    email: '',
    pokemon: null
  }
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