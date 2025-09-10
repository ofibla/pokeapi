import { computed } from 'vue'

export function useValidForm(formInput: any) {


  const errors = computed(() => {
    const errs: string[] = []
    const form = formInput.value

    const regExOnlyLetters = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü ]+$/
    const regExDni = /^[0-9]{8}[A-Za-z]$/
    const regExEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!form.name || !form.lastName || !form.dni || !form.email) errs.push('All fields are required')
    
    if (!regExOnlyLetters.test(form.name)) errs.push("The name can't have numbers")
    if (!regExOnlyLetters.test(form.lastName)) errs.push("The last name can't have numbers")

    if (!regExDni.test(form.dni)) errs.push('The DNI must be valid')

    if (!regExEmail.test(form.email)) errs.push('The Email must be valid')

    return errs
  })

  const isValid = computed(() => errors.value.length === 0)

  return {
    errors,
    isValid,
  }
}