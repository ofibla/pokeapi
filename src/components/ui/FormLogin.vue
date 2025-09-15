<template>
    <form @submit.prevent="onSubmit">
        <MainDiv class="w-100 h-70 ">
            <div class="m-3 p-3 flex gap-3 bg-white/60 rounded-2xl">
                <label>Email:</label>
                <input
                    v-model="form.email"
                    class="form-control"
                    placeholder="example@example.com"
                    required
                />
            </div>
            
            <div class="m-3 p-3 flex gap-3 bg-white/60 rounded-2xl">
                <label>Password:</label>
                <input
                    v-model="form.pass"
                    class="form-control"
                    type="password"
                    placeholder="Password"
                    required
                />
            </div>
            <div class="my-2" > {{ userStore.error}} </div>
            <btn class="btn btn-success btn-block" type="submit">Login</btn>
        </MainDiv>
    </form>  
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '@/stores/useUserStore'
import MainDiv from '@/components/ui/MainDiv.vue'
import btn from '@/components/ui/Button.vue'
import router from '@/router'

const regExEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const regExPass = /^.{7,}$/
 
const userStore = useUserStore()

const form = ref({
    email: "",
    pass: ""
})


const onSubmit = () => {
    
    if (regExEmail.test(form.value.email) ){
        if (regExPass.test(form.value.pass)){
            userStore.loginUser(form.value.email, form.value.pass)
            form.value.email = ''
            form.value.pass = ''
            router.push('/')
        }else{
            userStore.error = "Password must have 7 characters"
        }
    }else{
        userStore.error = "Wrong email"
    
    }
    
}

</script>