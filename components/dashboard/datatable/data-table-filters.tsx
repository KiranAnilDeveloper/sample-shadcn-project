import { RowData, Table } from "@tanstack/react-table"
import { DataTableFeatures } from "./data-table-features"
import { Input } from "@/components/ui/input"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"


type TextFilter<TData> = {
  type: "text"
  columnId: keyof TData & string
  placeholder?: string
}

type ToggleFilter<TData> = {
  type: "toggle"
  columnId: keyof TData & string
  options: {
    label: string
    value: string
  }[]
}

export type DataTableFilter<TData> =
  | TextFilter<TData>
  | ToggleFilter<TData>

interface DataTableFiltersProps<TData extends RowData> {
  table: Table<DataTableFeatures, TData>
  filters: DataTableFilter<TData>[]
}


export function DataTableFilters<TData extends RowData>({
  table,
  filters,
}: DataTableFiltersProps<TData>) {
  return (
    <div className="flex items-center gap-3 py-4">
      {filters.map((filter) => {
        const column = table.getColumn(filter.columnId)

        if (!column) return null

        if (filter.type === "text") {
          return (
            <Input
              key={filter.columnId}
              placeholder={filter.placeholder ?? "Filter..."}
              value={(column.getFilterValue() as string) ?? ""}
              onChange={(event) =>
                column.setFilterValue(event.target.value)
              }
              className="max-w-sm"
            />
          )
        }

        // Toggle filter
        if (filter.type === "toggle") {
          const filterValue =
            (column.getFilterValue() as string) ?? ""

          const selectedValue = filterValue
            ? [filterValue]
            : []

          return (
            <ToggleGroup
              key={filter.columnId}
              variant="outline"
              value={selectedValue}
              onValueChange={(values) => {
                const value = values[0]

                column.setFilterValue(value || undefined)
              }}
            >
              {filter.options.map((option) => (
                <ToggleGroupItem
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          )
        }

        return null
      })}
    </div>
  )
}