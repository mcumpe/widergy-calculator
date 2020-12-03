   
   import {
    SAVE_OPERATION,
    DELETE_EXPRESSION,
    DELETE_ALL_EXPRESSIONS,
    EDIT_EXPRESSION,
    REMEMBER_USER_NAME,
  } from '../Actions/actionsType';

   
    export const saveExpression = (id, operation) => ({  
      
        
      type: 'SAVE_OPERATION',
        
        payload:{
          id:id,
          operation:operation
        }
    }); 
    
    export const editExpression = (id, operation) => (console.log(id , " -- ", operation),{  
      
      type: 'EDIT_EXPRESSION',
      
      payload:{
        id:id,
        operation:operation
      }
  }); 

    
  export const deleteIdExpression = (id) => (console.log("Mi Id en actions",id),{  
        
    type: 'DELETE_ID_EXPRESSION',
    payload:{
      id:id
    }
}); 


 
    export const deleteExpression = (operation) => ({  
        
      type: 'DELETE_EXPRESSION',
  }); 



