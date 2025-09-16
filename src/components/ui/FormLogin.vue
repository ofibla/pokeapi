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
            <div class="my-2" > {{ userStore.errors.join(", ")}} </div>
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
import { useValidForm } from '@/composables/UseValidForm'
 
const userStore = useUserStore()

const form = ref({
    email: "",
    pass: ""
})

const { errors, isValid } = useValidForm(form)

const onSubmit = () => {

    if(isValid.value){
        userStore.loginUser(form.value.email, form.value.pass)
        form.value.email = ''
        form.value.pass = ''
        router.push({name: 'home'})

    }else{
        userStore.errors = errors.value
    }
}




</script>