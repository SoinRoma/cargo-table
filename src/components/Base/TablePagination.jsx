import ReactPaginate from "react-paginate"
import {useSelector} from "react-redux"

const TablePagination = ({handlePageClick}) => {
  const {pageCount, currentPage} = useSelector(state => state.baseReducer)

  return (
    <ReactPaginate
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      forcePage={currentPage}
      onPageChange={handlePageClick}
      previousLabel={"<"}
      nextLabel={">"}
      containerClassName={'table-pagination'}
      activeClassName={'active'}
    />
  )
}
export default TablePagination