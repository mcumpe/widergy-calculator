import axios from 'axios'
import { Alert } from 'react-native'


export const bringExpressions = () => {  
  return async(dispatch, getState) => {
		const respuesta = await axios.get(`https://private-4de685-martincumpe.apiary-mock.com/operation`)
   
   }
}





export const saveExpression = (id, operation) => {  
      return async (dispatch, getState) => {
        const response = await axios.post(`https://private-4de685-martincumpe.apiary-mock.com/operation`,{id:id, operation:operation})
        const info = response.data
        if(info != null){
      
        Alert.alert(
          '¡El metodo POST se ejecuto correctamente!',
          '¡La operacion se registro con EXITO!',
          [
             {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel'
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') }
          ],
          { cancelable: false }
        );    
      }

      dispatch({  
          type: 'SAVE_OPERATION',
            
            payload:{
              id:id,
              operation:operation
       }
    }); 
  }
}
   
    export const editExpression = (id, operation) => {  
      return async (dispatch, getState) => {
       
        dispatch({  
        type: 'EDIT_EXPRESSION',
      
      payload:{
        id:id,
        operation:operation
        
        }
      })
    }
  }; 


  export const deleteIdExpression = (id) => {  
    return async (dispatch, getState) => {
      const response = await axios.delete(`https://private-58b18-calculatorapi5.apiary-mock.com/questions`,{id:id})
      const info = response.data
      if(info != null){
        Alert.alert(
          '¡El metodo_ID se ejecuto correctamente!',
          '¡La operacion se registro con EXITO!',
          [
             {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel'
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') }
          ],
          { cancelable: false }
      );
    }
      dispatch({  
    type: 'DELETE_ID_EXPRESSION',
    payload:{
      id:id
      }
    }); 
  }
}



    export const deleteExpression = (operation) => {
      return async (dispatch, getState) => {
      const response = await axios.delete(`https://private-58b18-calculatorapi5.apiary-mock.com/questions`,{id:id})
      const info = response.data
      if(info != null){
        Alert.alert(
          '¡El metodo DELETE se ejecuto correctamente!',
          '¡La operacion se registro con EXITO!',
          [
             {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel'
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') }
          ],
          { cancelable: false }
      );
    
        dispatch({  
      type: 'DELETE_EXPRESSION',
    }); 
    }  
  }    
}
    




  
 
    


