import { Alert } from "react-native"

export const required = value => { value ? undefined : 'Required' }
  
export const checkTel = value => {
if(value && isNaN(Number(value))){
        return "¡El telefono debe ser solo numeros!"
    }
 }
  
export const checkUser = value => {
  if (value && /[^a-zA-Z ]/i.test(value)){
    return '¡Solo se permiten letras!';
    }
}
  
export const telLength = value => value && value.length > 10 ? "El telefono debe tener 10 caracteres o menos" : undefined

export const checkFields = (value1, value2 , value3 ) => {
  if( value1 === '' || value2 === '' || value3 === ''){
        return false
    }else{
         return true
  }
}
  

  