"use client"

import { ColumnFiltersState, useTable, type ColumnDef, type RowData } from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { features, type DataTableFeatures } from "./data-table-features"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Link from "next/link"
import { DataTablePagination } from "./datatable-pagination"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

interface DataTableProps<TData extends RowData> {
  columns: ColumnDef<DataTableFeatures, TData>[]
  data: TData[]

  title: string
  showActionButton?: boolean

  viewAllHref: string
  actionBasePath: string
  actionIdKey: keyof TData
}

export function DataTableTanstack<TData extends RowData>({
  columns,
  data,
   title,
  showActionButton = true,
  viewAllHref,
  actionBasePath,
  actionIdKey,
}: DataTableProps<TData>) {

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [selectedStatus, setSelectedStatus] = useState<string[]>([])

  const table = useTable({
    features,
    data,
    columns,
    onColumnFiltersChange: setColumnFilters,
    state: {
      columnFilters
    }
  })

  // table.setPageSize(5);
  //  table.setPageIndex(1);

  //table.state.pagination.pageIndex

  //table.getPageCount

  return (

    <div>
      
     

<ToggleGroup
  value={selectedStatus}
  onValueChange={(values) => {
    setSelectedStatus(values)

    const status = values[0]

    table.getColumn("status")?.setFilterValue(status || undefined)
  }}
>
  <ToggleGroupItem value="Stable">
    Stable
  </ToggleGroupItem>

  <ToggleGroupItem value="Critical">
    Critical
  </ToggleGroupItem>

  <ToggleGroupItem value="Follow-up">
    Follow-up
  </ToggleGroupItem>
</ToggleGroup>
      
    <div className="flex items-center py-4">
        <Input
          placeholder="Filter Name..."
          value={(table.getColumn("initials")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("initials")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
    </div>

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
            {table.getRowModel().rows.length ? (
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
      </CardContent>

      {/* Pagination */}
      <DataTablePagination table={table}></DataTablePagination>
      {/* <div className="flex items-center justify-end gap-2 px-4 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            
            table.previousPage()
            console.log("previous page")

          }
          }
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div> */}  
    </Card>
    </div>
  )
}