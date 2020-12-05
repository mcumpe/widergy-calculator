import {
    SAVE_OPERATION,
    DELETE_EXPRESSION,
    DELETE_ALL_EXPRESSIONS,
    EDIT_EXPRESSION,
    REMEMBER_USER_NAME,
  } from '../Actions/actionsType';


const initalState = {
    expression:[]
}

const operationReducer = (state = initalState, action) => {
    switch(action.type){
        case 'SAVE_OPERATION':
    
           return{
                ...state, 
                expression: [...state.expression,
                {
                    id: action.payload.id,
                    operation: action.payload.operation
                }
              ],
            };

            case 'EDIT_EXPRESSION':            
                
            let arrOriginal = [...state.expression]
              
                for(let i=0; i<arrOriginal.length; i++){
                    if(arrOriginal[i].id === action.payload.id){
                        arrOriginal[i].operation = action.payload.operation
                    }
                }
                return {
                  ...state,
                  expression: arrOriginal
            }

           case 'DELETE_ID_EXPRESSION':

           return {
                ...state,
                expression: state.expression.filter(ex => ex.id !== action.payload.id),
           }
              

           case 'DELETE_EXPRESSION':
               return {
                ...state, 
                expression: []
    };
        default:
            return state
    }
}

export default operationReducer 