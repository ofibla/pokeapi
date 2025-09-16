import { computed } from 'vue'

export function useValidForm(formInput: any) {

  const errors = computed(() => {
    const errs: string[] = []
    const form = formInput.value

    const regExOnlyLetters = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü ]+$/
    const regExDni = /^[0-9]{8}[A-Za-z]$/
    const regExEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const regExPass = /^.{7,}$/ //7 characters or more


    //All fields
    for (const input in form){
      if(input == null){
        errs.push("All fields must be completed")
      }
    }
    
    if( form.name && form.lastName ){
      //Name Surname
      if (!regExOnlyLetters.test(form.name)) errs.push("The name can't have numbers")
      if (!regExOnlyLetters.test(form.lastName)) errs.push("The last name can't have numbers")
    }
   
    if(form.dni){
      //Dni
      if (!regExDni.test(form.dni)) errs.push('The DNI must be valid')
    }
    
    if(form.email){
      //Email
      if (!regExEmail.test(form.email)) errs.push('The Email must be valid')
    }
    
    if(form.pass){
      //Password
      if (!regExPass.test(form.pass)) errs.push('The password must have 7 characters or more')
    }
    

    return errs
  })

  const isValid = computed(() => errors.value.length === 0)

  return {
    errors,
    isValid,
  }
}