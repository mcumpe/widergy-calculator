import operationReducer from './operationReducer'

const {combineReducers} = require('redux')

const rootReducer = combineReducers({
    opRed: operationReducer,
})

export default rootReducer