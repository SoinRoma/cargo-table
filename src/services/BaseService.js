import {store} from "../store/ReduxStore.js"
import {
  changeCurrentPageAction,
  changePageCountAction,
  changeSearchAction,
} from "../store/reducers/baseReducer.js"

class BaseService {

  dispatch(action) {
    store.dispatch(action)
  }

  refreshTableData() {
    this.dispatch(changeCurrentPageAction(0))
    this.dispatch(changePageCountAction(0))
    this.dispatch(changeSearchAction(''))
  }

}

export default new BaseService()
