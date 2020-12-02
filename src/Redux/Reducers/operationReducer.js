import {
    SAVE_OPERATION,
    DELETE_EXPRESSION,
    DELETE_ALL_EXPRESSIONS,
    EDIT_EXPRESSION,
    REMEMBER_USER_NAME,
  } from '../Actions/actionsType';


const initalState = {
    expression:[], 
}

const operationReducer = (state = initalState, action) => {
    switch(action.type){
        case 'SAVE_OPERATION':
            return {
                ...state, 
                expression: [...state.expression,
                {
                    id: action.payload.id,
                    operation: action.payload.operation
                }
              ],
            };


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