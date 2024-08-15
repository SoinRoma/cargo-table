const GET_LIST = 'GET_LIST'
const GET_DETAIL = 'GET_DETAIL'

const defaultState = {
  tableList: [],
  detail: {}
}

export const tableReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_LIST:
      return {...state, tableList: action.payload}
    case GET_DETAIL:
      return {...state, detail: action.payload}
    default:
      return state
  }
}

export const getListAction = (payload) => ({type: GET_LIST, payload})
export const getDetailAction = (payload) => ({type: GET_DETAIL, payload})
