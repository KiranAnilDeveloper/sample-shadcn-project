"use client"

import {
  ColumnFiltersState,
  useTable,
  type ColumnDef,
  type RowData,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { features, type DataTableFeatures } from "./data-table-features"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Link from "next/link"
import { useEffect, useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Appointment } from "@/types"

interface DataTableProps<TData extends RowData> {
  columns: ColumnDef<DataTableFeatures, TData>[]
  data: TData[]

  title: string
  showActionButton?: boolean

  viewAllHref: string
  actionBasePath: string
  actionIdKey: keyof TData
  isFilterRequired?: boolean
  tableHeight?: string
}

export function DataTableResearch<TData extends RowData>({
  columns,
  data,
  title,
  showActionButton = true,
  viewAllHref,
  actionBasePath,
  actionIdKey,
  isFilterRequired = true,
  tableHeight,
}: DataTableProps<TData>) {

  const [search,setSearch] = useState("")

  //const appointmentData = data as unknown as Appointment[];

  //const filteredData = appointmentData.filter((apponitment) => apponitment.patient === "search")

//const filterKey : keyof TData
//memo
  const filteredData = useMemo(() => {
    console.log("Filtering")

    if(search === "") 
      return data 
    
    return data.filter((appointment) =>  {
         return (appointment as Appointment).patient.toLowerCase().includes(search.toLowerCase())
    });
  },[data,search])
//

  //use filtered data
  //this is after initial setup 10 pagination is added  so instead use one before pagination by feature
 

  //const filteredRows = filteredData; //table.getFilteredRowModel().rows;

  const [page,setPage] = useState(1)
  const pageSize= 5;

  const totalPages = Math.ceil(filteredData.length / pageSize);

  const start = (page - 1) * pageSize; 
  const end = start + pageSize;

  const paginatedRows = filteredData.slice(start,end);

    const table = useTable({
    features,
    data : paginatedRows,
    columns,
  })

  console.log("page",page);
  console.log("total pages", totalPages);

  console.log("data:", data.length)
  console.log("filteredData:", filteredData.length)
  console.log("totalPages:", totalPages)

  useEffect(() => {
  setPage(1)
}, [search])

  const getVisiblePages = () => {
/*   if (totalPages <= 3) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  if (page === 1) {
    return [1, 2, 3];
  }

  if (page === totalPages) {
    return [totalPages - 2, totalPages - 1, totalPages];
  } */

  return [page - 1, page, page + 1];
};

  return (
    <div>
      {/* {isFilterRequired && filters.length > 0 && (
        <DataTableFilters
          table={table}
          filters={filters}
        />
      )} */}

      <Input type="text" value={search} onChange={(e) => setSearch(e.target.value)}>
        
      </Input>

      <Card className="gap-0">

        {/* Header */}
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="text-base font-medium">
              {title}
            </div>

            <Link
              href={viewAllHref}
              className="flex items-center text-[13px] text-[#5fb8a8]"
            >
              View all
            </Link>
          </div>
        </CardHeader>

        {/* Table */}
        <CardContent className="p-0">
          <div
            className={tableHeight ? "overflow-y-auto" : undefined}
            style={
              tableHeight
                ? { maxHeight: tableHeight }
                : undefined
            }
          >
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow
                    key={headerGroup.id}
                    className="text-xs"
                  >
                    {headerGroup.headers.map((header) => (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : (
                            <table.FlexRender
                              header={header}
                            />
                          )}
                      </TableHead>
                    ))}

                    {showActionButton && (
                      <TableHead className="text-right">
                        ACTION
                      </TableHead>
                    )}
                  </TableRow>
                ))}
              </TableHeader>

              <TableBody>
                {  table.getRowModel().rows.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow key={row.id}>
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                          <table.FlexRender
                            cell={cell}
                          />
                        </TableCell>
                      ))}

                      {showActionButton && (
                        <TableCell className="text-right">
                          <Link
                            href={`${actionBasePath}/${row.original[actionIdKey]}`}
                            className="text-sm text-[#5fb8a8]"
                          >
                            View
                          </Link>
                        </TableCell>
                      )}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={
                        columns.length +
                        (showActionButton ? 1 : 0)
                      }
                      className="h-24 text-center"
                    >
                      No results.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          <div className="flex items-center justify-end gap-2 p-4">
          <Button
            variant="outline"
            onClick={() => setPage((prev) => prev - 1)}
            disabled={page === 1}
          >
            Previous
          </Button>
{/* 
          <span className="text-sm">
            Page {page} of {totalPages}
          </span> */}

          {getVisiblePages().map((pageNumber) => (
          <Button
            key={pageNumber}
            variant={pageNumber === page ? "default" : "outline"}
            onClick={() => setPage(pageNumber)}
          >
            {pageNumber}
          </Button>
        ))}

          <Button
            variant="outline"
            onClick={() => setPage((prev) => prev + 1)}
            disabled={page >= totalPages}
          >
            Next
          </Button>
        </div>
        </CardContent>

      </Card>
    </div>
  )
}
