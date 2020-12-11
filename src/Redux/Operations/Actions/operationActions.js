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




  
 
    


