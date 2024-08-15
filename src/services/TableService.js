import {store} from "../store/ReduxStore.js"
import {getListAction} from "../store/reducers/tableReducer.js"
import axios from "axios"
import {changePageCountAction} from "../store/reducers/baseReducer.js"
import {get_list} from "../api/api.js";

class TableService {

  dispatch(action) {
    store.dispatch(action)
  }

  async getList(setFetchData) {
    const page = store.getState().baseReducer.currentPage + 1
    const {data} = await axios.get(get_list(page))
    if (data.results.length > 0) setFetchData(1)
    if (data.results.length === 0) setFetchData(2)
    this.dispatch(getListAction(data.results))
    this.dispatch(changePageCountAction(Math.ceil(data.count / 25)))
  }

}

export default new TableService()
