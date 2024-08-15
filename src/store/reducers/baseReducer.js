const CHANGE_PAGE_COUNT = 'CHANGE_PAGE_COUNT'
const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE'
const CHANGE_SEARCH = 'CHANGE_SEARCH'

const defaultState = {
  pageCount: 0,
  currentPage: 0,
  searchTable: '',
}

export const baseReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_PAGE_COUNT:
      return {...state, pageCount: action.payload}
    case CHANGE_CURRENT_PAGE:
      return {...state, currentPage: action.payload}
    case CHANGE_SEARCH:
      return {...state, searchTable: action.payload}
    default:
      return state
  }
}

export const changePageCountAction = (payload) => ({type: CHANGE_PAGE_COUNT, payload})
export const changeCurrentPageAction = (payload) => ({type: CHANGE_CURRENT_PAGE, payload})
export const changeSearchAction = (payload) => ({type: CHANGE_SEARCH, payload})
