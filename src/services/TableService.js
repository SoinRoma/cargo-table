import {store} from "../store/ReduxStore.js"
import {addItemAction, getDetailAction, getListAction} from "../store/reducers/tableReducer.js"
import axios from "axios"
import {changePageCountAction} from "../store/reducers/baseReducer.js"
import {get_detail, get_list} from "../api/api.js";

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

  async getDetail(id) {
    const {data} = await axios.get(get_detail(id))
    this.dispatch(getDetailAction(data))
  }

  async getNewItem(socket) {
    socket.onmessage = async (e) => {
      const obj = JSON.parse(e.data)
      const data = JSON.parse(obj)
      this.dispatch(addItemAction(data))
      setTimeout(()=>{
        const el = document.getElementById(`row${data.id}`)
        el.addEventListener("animationend", e => {el.className = ""})
        el.className = "flash"
      }, 50)
    }
  }

}

export default new TableService()
