<template>
    <div class="p-6 justify-top items-center bg-[#dadac8] self-center flex flex-col h-140 w-110 bg-red/30 rounded-xl border-2 border-gray-400 backdrop-blur-sm">
        <mainTitle>Trainers List</mainTitle>
        <TrainersListElement v-for="trainer in trainers" :key="trainer.id">
            <img class="w-15 object-cover border-2 rounded-2xl border-[#cb9113]"  src="../assets/default-icon.jpg"></img>
            <div class="flex flex-col">
                <div class="flex flex-row gap-1">
                    <h1 class="text-2xl"> {{ trainer.name }} </h1>
                    <h1 class="text-2xl"> {{ trainer.lastName }}</h1>
                </div>
                <div class="flex flex-row ">
                    <h2 class=""> {{ trainer.email }}</h2>
    
                </div>
            </div>
           
        </TrainersListElement>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useTrainersStore } from '@/stores/useTrainersStore'

import mainTitle from '@components/ui/MainTitle.vue';
import TrainersListElement from '@components/ui/TrainersListElement.vue';
const trainersStore = useTrainersStore()
const { trainers } = storeToRefs(trainersStore)


</script>
