import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import {baseReducer} from "./reducers/baseReducer"
import {tableReducer} from "./reducers/tableReducer.js"

const rootReducer = combineReducers({
  baseReducer,
  tableReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
