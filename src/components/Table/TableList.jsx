import {flexRender, getCoreRowModel, getFilteredRowModel, getSortedRowModel, useReactTable} from "@tanstack/react-table"
import {useState} from "react"
import TableEmpty from "../Base/TableEmpty.jsx"
import TableSkeleton from "../Base/TableSkeleton.jsx"
import {useSelector} from "react-redux"
import moment from "moment"

const TableList = ({fetchData}) => {
  const [sorting, setSorting] = useState([])
  const {tableList} = useSelector(state => state.tableReducer)

  function htmlDecode(input) {
    const doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent;
  }

  const columns = [
    {
      accessorKey: 'received_date',
      header: 'Received',
      cell: ({cell, row}) => {
        return moment(row.original.created_at).format('h:m A')
      },
    },
    {
      accessorKey: 'pick_up_at',
      header: 'Pick-up At',
    },
    {
      accessorKey: 'deliver_to',
      header: 'Delivery',
    },
    {
      accessorKey: 'suggested_truck',
      header: 'Vehicle',
      size: 300,
    },
    {
      accessorKey: 'miles',
      header: 'Miles',
    },
    {
      accessorKey: 'match',
      header: 'Match',
    },
    {
      accessorKey: 'contact_name',
      header: 'Brokerage',
      size: 100,
      cell: ({cell, row}) => {
          return <span>({row.original.source_name.substring(0, 1)}) {htmlDecode(row.original.contact_name)}</span>
      },
    },
  ]

  const tableInstance = useReactTable({
    columns,
    data: tableList,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {sorting},
    defaultColumn: {minSize: 230},
    onSortingChange: setSorting
  })

  return (
    <div className="table-container">
      <table className="table-style">
        <thead>
        {tableInstance.getHeaderGroups().map(headerEl =>
          <tr key={headerEl.id}>
            {headerEl.headers.map(columnEl =>
              <th key={columnEl.id} onClick={columnEl.column.getToggleSortingHandler()}>
                {flexRender(columnEl.column.columnDef.header, columnEl.getContext())}
                {{
                  asc: <i className="ml-2 fa fa-sort-up"></i>,
                  desc: <i className="ml-2 fa fa-sort-down"></i>
                }[columnEl.column.getIsSorted() ?? null]}
              </th>
            )}
          </tr>
        )}
        </thead>
        <tbody>
        {tableInstance.getRowModel().rows.length > 0 && fetchData === 1 && tableInstance.getRowModel().rows.map(rowEl =>
          <tr key={rowEl.id} className="cu-p" id={`row${rowEl.original.id}`}>
            {rowEl.getVisibleCells().map(cellEl =>
              <td key={cellEl.id}>
                {flexRender(cellEl.column.columnDef.cell, cellEl.getContext())}
              </td>
            )}
          </tr>
        )}
        {fetchData === 0 && <TableSkeleton col={columns.length}/>}
        {fetchData === 2 && <TableEmpty/>}
        </tbody>
      </table>
    </div>
  )
}
export default TableList