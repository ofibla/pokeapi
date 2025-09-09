<template>
    <div class="w-screen h-screen bg-black/20 fixed flex items-center justify-center ">
        <MainDiv class=" w-90 h-130">
            <MainTitle>
                Update trainer
            </MainTitle>
            <form @submit.prevent="" class="mt-3 grid grid-cols-1 grid-rows-5 items-center">
                <addTrainerLabel>Name:      <input class="rounded" v-model="updatedTrainer.name"></input></addTrainerLabel>
                <addTrainerLabel>Surname:   <input class="rounded" v-model="updatedTrainer.lastName"></input></addTrainerLabel>
                <addTrainerLabel>DNI:       <input class="rounded" v-model="updatedTrainer.dni"></input></addTrainerLabel>
                <addTrainerLabel >Email:    <input class="rounded" v-model="updatedTrainer.email"></input></addTrainerLabel>
                <btn @click="updateTrainerFunc" class="text-2xl w-50 mx-auto ">Submit</btn>
            </form>
            <btn @click="$emit('closeModal')" class="mt-2">
                Close
            </btn>
        </MainDiv>
    </div>
</template>

<script setup lang="ts">
import btn from '@components/ui/Button.vue'
import MainDiv from '@components/ui/MainDiv.vue'
import addTrainerLabel from '@components/ui/addTrainerLabel.vue'
import MainTitle from './ui/MainTitle.vue'

import { ref } from 'vue'
import { useTrainersStore } from '@/stores/useTrainersStore'

const trainersStore = useTrainersStore()

const props = defineProps<{
  trainer: {
    id: string
    name: string
    lastName: string
    dni: string
    email: string
  }
}>()

const updatedTrainer = ref({
        id:props.trainer.id,
        name: props.trainer.name,
        lastName: props.trainer.lastName,
        dni: props.trainer.dni,
        email: props.trainer.email,
    })

const emit = defineEmits<{
  (e: 'closeModal'): void
}>()


function updateTrainerFunc(){
  trainersStore.update(updatedTrainer.value)
  emit('closeModal')
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