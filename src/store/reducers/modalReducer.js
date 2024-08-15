const OPEN_MODAL = 'OPEN_MODAL'
const CHANGE_NAME_MODAL = 'CHANGE_NAME_MODAL'

const defaultState = {
  id: '',
  name_modal: ''
}

export const modalReducer = (state = defaultState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {...state, id: action.payload}
    case CHANGE_NAME_MODAL:
      return {...state, name_modal: action.payload}
    default:
      return state
  }
}

export const openModalAction = (payload) => ({type: OPEN_MODAL, payload})
export const changeModalNameAction = (payload) => ({type: CHANGE_NAME_MODAL, payload})


