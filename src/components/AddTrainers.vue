<template>
  <mainDiv class="w-100 h-130">
    <h1 class="capitalize text-3xl font-bold bg-[#efefbf] p-2 pl-7 pr-7 rounded-xl border-2 border-[#baba79]">Add Trainer</h1>
    <form @submit.prevent="submitTrainer" class="m-6 gap-2 grid grid-cols-1 grid-rows-5 items-center">
      <label>Name: <input v-model="trainerForm.name" placeholder="Edu"></input></label>
      <label>Last Name: <input v-model="trainerForm.lastName" placeholder="Quintó"></input></label>
      <label>DNI: <input v-model="trainerForm.dni" placeholder="1234578N"></input></label>
      <label >Email: <input v-model="trainerForm.email" placeholder="example@example.com"></input></label>
      <btn class="text-2xl w-50 mx-auto ">Submit</btn>
    </form>
  </mainDiv>
</template>

<script setup lang="ts">
import btn from '@components/ui/Button.vue'
import mainDiv from '@components/ui/mainDiv.vue'

import { ref } from 'vue'
import { useTrainersStore } from '@/stores/useTrainersStore'
import { storeToRefs } from 'pinia'

const trainersStore = useTrainersStore()
const { trainers } = storeToRefs(trainersStore)

const trainerForm = ref({
  name: '',
  lastName: '',
  dni: '',
  email: '',
  pokemon: null
})

function submitTrainer(){
  const newTrainer = {
    id: Date.now().toString(),
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