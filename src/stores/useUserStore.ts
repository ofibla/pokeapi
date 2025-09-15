import * as Request from '@/composables/UseRequestLogin'
import router from '@/router'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useUserStore = defineStore('users', () => {
  const name = ref('')
  const email = ref('')

  const error = ref('')

  const isLogged = computed(() => email.value !== '')

  async function getUser() {
    const user = await Request.getUserEnd()
    if (user == null) return

    name.value = user.name
    email.value = user.email
  }

  async function loginUser(emailInput: string, password: string) {
    try {
      const user = await Request.loginEnd(emailInput, password)
      if (user == null){
        error.value = 'Could not find user'
        return false
      }
      
      name.value = user.name
      email.value = user.email

      return true

    } catch (err: any) {
      error.value = err.message || 'Could not find user'
    }
  }

  async function logoutUser() {
    name.value = ""
    email.value = ""
    router.push('/login')
  }

  return {
    name,
    email,
    error,
    isLogged,
    getUser,
    loginUser,
    logoutUser
  }
},{
  persist: true
})

