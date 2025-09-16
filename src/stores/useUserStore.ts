import * as Request from '@/composables/UseRequestLogin'
import router from '@/router'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useUserStore = defineStore('users', () => {
  const name = ref('')
  const email = ref('')

  const errors = ref<string[]>([])

  const isLogged = computed(() => email.value !== '')

  function clearErrors() { errors.value = [] }

  async function getUser() {
    const user = await Request.getUserEnd()
    if (user == null) return

    name.value = user.name
    email.value = user.email
  }

  async function loginUser(emailInput: string, password: string) {
    clearErrors()
    try {
      const user = await Request.loginEnd(emailInput, password)
      if (user == null){
        errors.value.push('Could not find user')
        return false
      }
      
      name.value = user.name
      email.value = user.email

      return true

    } catch (err: any) {
      errors.value.push(err.message || 'Could not find user')
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
    errors,
    isLogged,
    getUser,
    loginUser,
    logoutUser
  }
},{
  persist: true
})

