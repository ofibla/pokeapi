<template>
  <div v-if="errors.length" class="ml-3 text-red-500 text-[20px] fixed top-20 left-100 min-w-90 bg-white/80 p-3 rounded">
    <h1><strong>Please, fix the errors:</strong></h1>
    <ul>
      <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
defineProps<{ errors: string[] }>()
</script>
