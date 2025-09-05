<template>
    <div class="fixed top-0 left-0 z-40 h-20 w-screen bg-red-400 flex items-center pl-2">
        <div class=" h-15 w-1/3 flex row items-center text-4xl">
            <img class="w-15" src="../assets/pokeball-icon-594338-512.png"></img>
            <h2> <strong>Pokedex</strong> </h2>
        </div>
        <div class="gap-10 w-2/3 flex justify-end text-gray-800 text-2xl pr-15 " >
            <btn @click="changePage(button )" v-for="button in buttons">
                <p> {{ button }} </p>
            </btn>  
            
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import btn from '@components/ui/TopBarButton.vue'

const buttons = ref([
    'Trainers',
    'Add Trainer',
    'Pokemon'
])

const emit = defineEmits(['changePage'])

function changePage(btn : string){
    emit('changePage', btn)
}

</script>