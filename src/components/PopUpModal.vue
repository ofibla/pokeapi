<template>
    <div class="w-screen h-screen bg-black/30 fixed flex items-center justify-center ">
        <MainDiv class=" w-90 h-130">
            <MainTitle>
                Update trainer
            </MainTitle>
            <FormTrainer :trainer="trainer"  @closeModal="$emit('closeModal')"></FormTrainer>
        </MainDiv>
    </div>
</template>

<script setup lang="ts">
import MainDiv from '@/components/ui/MainDiv.vue'
import MainTitle from './ui/MainTitle.vue'
import FormTrainer from './ui/FormTrainer.vue';
import type { Trainer } from '@/interfaces/trainers.interface';

defineProps<{
  trainer: Trainer
}>()
defineEmits<{
  (e: 'closeModal'): void
}>()

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