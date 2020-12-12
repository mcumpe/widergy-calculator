import axios from 'axios'
import { Alert } from 'react-native'


export const sendForm = async (keyResponse) => {  
        const response = await axios.post('https://private-e75208-formresponse.apiary-mock.com/form_response', keyResponse);
        if(response != null){
          Alert.alert("¡Gracias por el mensaje!")
    }
  }; 
