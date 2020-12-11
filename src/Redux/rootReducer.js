import operationReducer from './Operations/Reducers/operationReducer'
import userReducer from './User/Reducers/userReducer'
import { reducer as formReducer } from 'redux-form'

const {combineReducers} = require('redux')

const rootReducer = combineReducers({
    operation: operationReducer,
    user:userReducer, 
    form: formReducer,
})

export default rootReducer