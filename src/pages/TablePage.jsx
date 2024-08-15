import {useEffect, useState} from "react"
import TablePagination from "../components/Base/TablePagination.jsx"
import {useDispatch} from "react-redux"
import {changeCurrentPageAction} from "../store/reducers/baseReducer.js"
import BaseService from "../services/BaseService.js"
import TableList from "../components/Table/TableList.jsx"
import TableService from "../services/TableService.js"

const TablePage = () => {
  const dispatch = useDispatch()
  const [fetchData, setFetchData] = useState(0)

  const handlePageClick = (selectedPage) => {
    dispatch(changeCurrentPageAction(selectedPage.selected))
    TableService.getList(setFetchData)
  }

  useEffect(() => {
    TableService.getList(setFetchData)
    return () => {BaseService.refreshTableData()}
  }, [])

  return (
    <div className="page-container">
      <div className="table-wrapper not-btn">
        <div className="d-flex align-items-center justify-content-between mb-2">
          <h3>Dispatch</h3>
        </div>
        <TableList fetchData={fetchData}/>
        <TablePagination handlePageClick={handlePageClick}/>
      </div>
    </div>
  )
}
export default TablePage