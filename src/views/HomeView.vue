<template>
    <div class="flex flex-col items-center">
        <h1 class="text-9xl ">Hello, {{ userStore.name }}</h1>
        <btn class="max-w-60 mt-10 text-3xl">
            <router-link to="/trainers_list"> Go to Trainers</router-link>
        </btn>
        <btn @click="userStore.logoutUser()">
            Logout
        </btn>
    </div>
    
</template>

<script setup lang="ts">
import btn from '@/components/ui/Button.vue'
import { RouterLink } from 'vue-router';
import { useUserStore } from '@/stores/useUserStore';
import { onMounted } from 'vue';
import FormLogin from '@/components/ui/FormLogin.vue';

const userStore = useUserStore()

onMounted(userStore.getUser)

</script>