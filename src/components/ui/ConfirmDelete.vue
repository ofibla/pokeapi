<template>
    <div class="w-screen h-screen fixed flex items-center justify-center">
        <MainDiv class=" w-80 h-40">
            <MainTitle>Are you sure ?</MainTitle>
            <div class="flex gap-5  mt-5 w-50 h-20 justify-center">
                <button @click="$emit('deleteTrainer')" class="bg-red-400 border-2 p-2 rounded"> DELETE </button>
                <button @click="$emit('closeDelete')" class="bg-blue-400 border-2 p-2 rounded"> CANCEL</button>
            </div>
        </MainDiv>
    </div>
    
</template>
<script setup lang="ts">
import MainDiv from './MainDiv.vue';
import MainTitle from './MainTitle.vue';



</script>