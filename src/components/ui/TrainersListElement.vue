<template>
  <div class="p-1 flex flex-row gap-2 mt-5 bg-[#fedc92] max-h-17 min-w-120 border-2 rounded-2xl border-[#cb9113]">
    <img
      class="bg-white/40 w-20 object-cover border-2 rounded-2xl border-[#cb9113]"
      :src="trainer.pokemon ? trainer.pokemon : '/src/assets/default-icon.jpg'"
    />
    <div class="flex flex-col">
      <div class="flex flex-row gap-1">
        <h1 class="text-2xl">{{ trainer.name }}</h1>
        <h1 class="text-2xl">{{ trainer.lastName }}</h1>
      </div>
      <div class="flex flex-row">
        <h2>{{ trainer.email }}</h2>
      </div>
    </div>
    <div class="ml-auto mr-3 flex items-center">
      <button
        v-if="!trainer.pokemon"
        @click="$emit('assign-pokemon', trainer)"
        class="hover:scale-110 transition-all"
      >
        <img id="pokeBallImg" class="w-10" src="/src/assets/Poké_Ball_icon.svg.png"  :class="{ 'spin': isLoading }"/>
      </button>
      <button @click="$emit('update-trainer', trainer)" class="hover:scale-110 transition-all">
        <img class="w-10" src="/src/assets/edit.png" />
      </button>
      <button @click="$emit('delete-trainer', trainer)" class="hover:scale-110 transition-all">
        <img class="w-9" src="/src/assets/delete.png" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Trainer } from '@/interfaces/trainers.interface'

const props = defineProps<{
  trainer: Trainer
  isLoading: boolean
}>()

const emit = defineEmits<{
  (e: 'assign-pokemon', trainer: Trainer): void
  (e: 'update-trainer', trainer: Trainer): void
  (e: 'delete-trainer', trainer: Trainer): void
}>()

</script>
<style>
.spin {
  animation: rotate 0.5s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

</style>