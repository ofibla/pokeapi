<template>
    <div class="fixed top-0 left-0 z-40 h-20 w-screen bg-red-400 flex items-center pl-2">
        <div class=" h-15 w-1/3 flex row items-center text-4xl">
            <img class="w-15" src="../assets/pokeball-icon-594338-512.png"></img>
            <h2> <strong>Pokedex</strong> </h2>
        </div>
        <div class="gap-10 w-2/3 flex justify-end text-gray-800 text-2xl pr-15 " >
            <btn>
                <RouterLink :to="'/'">Home</RouterLink>
            </btn>
            <btn v-for="button in buttons">
                <RouterLink :to="'/'+ button"> {{ button }} </RouterLink>
            </btn>
            <btn @click="userStore.logoutUser">
                Logout
            </btn>  
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import btn from '@/components/ui/TopBarButton.vue'
import { RouterLink } from 'vue-router'
import { useUserStore } from '@/stores/useUserStore'

const userStore = useUserStore()

const buttons = ref([
    'Trainers',
    'Form',
    'Pokemon'
])

const emit = defineEmits(['changePage'])


</script>