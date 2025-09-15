<template>
    <div class="flex flex-col">
        <h1 class="text-5xl"><strong>404 NOT FOUND</strong></h1>
        <img src="../assets/img-20210519-235611-749-1.jpg " class="w-100"></img>
        <btn>
            <RouterLink to="/">Go back</RouterLink>
        </btn>
    </div>
    
</template>
<script setup lang="ts">
import btn from '@/components/ui/Button.vue'
import { RouterLink } from 'vue-router'
</script>