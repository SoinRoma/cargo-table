const GET_LIST = 'GET_LIST'
const ADD_ITEM = 'ADD_ITEM'
const GET_DETAIL = 'GET_DETAIL'

const defaultState = {
  tableList: [],
  detail: {}
}

export const tableReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_LIST:
      return {...state, tableList: action.payload}
    case ADD_ITEM:
      return {...state, tableList: [action.payload, ...state.tableList]}
    case GET_DETAIL:
      return {...state, detail: action.payload}
    default:
      return state
  }
}

export const getListAction = (payload) => ({type: GET_LIST, payload})
export const addItemAction = (payload) => ({type: ADD_ITEM, payload})
export const getDetailAction = (payload) => ({type: GET_DETAIL, payload})
