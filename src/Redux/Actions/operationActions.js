  import axios from 'axios'
  import {
    Alert
  } from 'react-native';

   
    export const saveExpression = (id, operation) => {  
      return async (dispatch, getState) => {

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

       /* const expresionDeleteId = await axios.delete(`https://private-58b18-calculatorapi5.apiary-mock.com/operation, ${id}`) */
   /*     Alert.alert("Se ha borrado la expresion id",id) */
  
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

        dispatch({  
      type: 'DELETE_EXPRESSION',
    }); 
  }    
}
  

    


