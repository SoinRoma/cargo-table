import {useEffect, useState} from "react"
import TablePagination from "../components/Base/TablePagination.jsx"
import {useDispatch} from "react-redux"
import {changeCurrentPageAction} from "../store/reducers/baseReducer.js"
import BaseService from "../services/BaseService.js"
import TableList from "../components/Table/TableList.jsx"
import TableService from "../services/TableService.js"
import ModalDetail from "../components/Table/modals/ModalDetail.jsx"
import {table_socket} from "../api/api.js"

const TablePage = () => {
  const dispatch = useDispatch()
  const [fetchData, setFetchData] = useState(0)
  const [socket, setSocket] = useState({})

  const handlePageClick = (selectedPage) => {
    dispatch(changeCurrentPageAction(selectedPage.selected))
    TableService.getList(setFetchData)
  }

  useEffect(() => {
    TableService.getList(setFetchData)
    setSocket(new WebSocket(table_socket()))
    return () => {BaseService.refreshTableData()}
  }, [])

  useEffect(()=> {
      TableService.getNewItem(socket)
  }, [socket])

  return (
    <div className="page-container">
      <div className="table-wrapper not-btn">
        <div className="d-flex align-items-center justify-content-between mb-2">
          <h3>Dispatch</h3>
        </div>
        <TableList fetchData={fetchData}/>
        <TablePagination handlePageClick={handlePageClick}/>
      </div>
      <ModalDetail/>
    </div>
  )
}
export default TablePage