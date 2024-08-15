import Skeleton from "react-loading-skeleton"

const TableSkeleton = ({col}) => {
  return (
    <>
      {Array(5).fill({}).map((rowEl, index) =>
        <tr key={index} >
          {Array(col).fill({}).map((cellEl, index) =>
            <td key={index}>
              <Skeleton height={20}/>
            </td>
          )}
        </tr>
      )}
    </>
  )
}
export default TableSkeleton