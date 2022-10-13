import { useState } from 'react'

export const useForm = <T extends Object>(form: T) => {
  const [state, setState] = useState(form)

  const onChange = (value: string, campo: keyof T) => {
    setState({
      ...state,
      [campo]: value, // campo equivale al argumento que se le pase en cada caso
    })
  }

  return {
    form: state,
    onChange,
  }
}

/* 
  NOTAS:
  - campo: keyof T -> Con esto nos aseguramos de que no ponemos mal el nombre
  de alguna propiedad del objeto form.
*/
