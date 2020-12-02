   
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
    
    ty
 
    export const deleteExpression = (operation) => ({  
        
      type: 'DELETE_EXPRESSION',
  }); 



