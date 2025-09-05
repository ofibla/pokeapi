<template>
    <div :class="customClass">
        <slot></slot>
    </div>
</template>

<script lang="ts" setup>
    interface Props {
        customClass?: string;
    }
    
    withDefaults(defineProps<Props>(), {
      customClass: ' h-100 w-50 p-6 pb-10 justify-top items-center bg-[#dadac8] self-center flex flex-col  bg-red/30 rounded-xl border-2 border-gray-400 backdrop-blur-sm'
    });
</script>