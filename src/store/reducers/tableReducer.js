const GET_LIST = 'GET_LIST'

const defaultState = {
  tableList: [],
}

export const tableReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_LIST:
      return {...state, tableList: action.payload}
    default:
      return state
  }
}

export const getListAction = (payload) => ({type: GET_LIST, payload})
