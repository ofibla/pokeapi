<template>
    <button :class="`px-4 py-2 rounded-xl font-bold ${customClass}`">
        <slot />
    </button>
</template>

<script lang="ts" setup>
    interface Props {
        customClass?: string
        type?: 'button' | 'submit' | 'reset'
    }
    
    withDefaults(defineProps<Props>(), {
      customClass: 'bg-[#efefbf] border-2 border-[#baba79] hover:bg-[#8b8b5a] hover:text-white font-bold mt-5',
      type: 'button'
    });
</script>