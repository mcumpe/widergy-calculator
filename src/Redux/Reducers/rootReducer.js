import operationReducer from './operationReducer'
import { reducer as formReducer } from 'redux-form'

const {combineReducers} = require('redux')

const rootReducer = combineReducers({
    opRed: operationReducer, 
    form: formReducer,
    
})

export default rootReducer