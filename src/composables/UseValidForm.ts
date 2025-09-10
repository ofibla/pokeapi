import { computed } from 'vue'
import type { Ref } from 'vue'
import type { Trainer } from '@/interfaces/trainers.interface'

export function useValidForm(trainerForm: Ref<Trainer>) {
  function validEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  function validName(name: string, surname: string): boolean{
    
    if(re.test(name) && re.test(surname)) return true
    return false
  }

  const errors = computed(() => {
    const errs: string[] = []
    const form = trainerForm.value
    const regExNameSurname = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü ]+$/
    const regExDni = /^[0-9]{8}[A-Za-z]$/

    if (!form.name) errs.push('The name is required')
    if (!regExNameSurname.test(form.name)) errs.push("The name can't have numbers")
    if (!form.lastName) errs.push('The surname is required')
    if (!regExNameSurname.test(form.lastName)) errs.push("The last name can't have numbers")

    if (!form.dni) errs.push('The DNI is required')
    if (!regExDni.test(form.dni)) errs.push('The DNI must be valid')
    if (!form.email) {
      errs.push('The Email is required')
    } else if (!validEmail(form.email)) {
      errs.push('The Email must be valid')
    }

    return errs
  })

  const isValid = computed(() => errors.value.length === 0)

  return {
    errors,
    isValid,
  }
}