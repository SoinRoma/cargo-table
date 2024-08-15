import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import {baseReducer} from "./reducers/baseReducer"
import {tableReducer} from "./reducers/tableReducer.js"
import {modalReducer} from "./reducers/modalReducer.js"

const rootReducer = combineReducers({
  baseReducer,
  modalReducer,
  tableReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
