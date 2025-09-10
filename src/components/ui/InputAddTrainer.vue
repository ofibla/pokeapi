<template>
    <input 
        class="rounded bg-[#f5f5f5] border border-black p-1  " 
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        required
        ></input>
</template>

<script setup lang="ts">
defineProps<{
    type: string
    modelValue: string
    placeholder?: string
}>()

defineEmits<{
    'update:modelValue': [value: string]
}>()
</script>
