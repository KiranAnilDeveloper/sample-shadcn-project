import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export function DataTablePagination({ table }: { table: any }) {
  const currentPage = table.state.pagination.pageIndex;     //table.getState().pagination.pageIndex   
  const pageCount = table.getPageCount()

  const pages = [currentPage - 1, currentPage, currentPage + 1]
  .filter((page) => page >= 0 && page < pageCount)

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault()
              table.previousPage()
            }}
            aria-disabled={!table.getCanPreviousPage()}
            className={
              !table.getCanPreviousPage()
                ? "pointer-events-none opacity-50"
                : ""
            }
          />
        </PaginationItem>

        {/* {Array.from({ length: pageCount }, (_, index) => (
          <PaginationItem key={index}>
            <PaginationLink
              href="#"
              isActive={currentPage === index}
              onClick={(e) => {
                e.preventDefault()
                table.setPageIndex(index)
              }}
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))} */}

         {pages.map((page) => (
        <PaginationItem key={page}>
          <PaginationLink
            href="#"
            isActive={currentPage === page}
            onClick={(e) => {
              e.preventDefault()
              table.setPageIndex(page)
            }}
          >
            {page + 1}
          </PaginationLink>
        </PaginationItem>
      ))}

        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault()
              table.nextPage()
            }}
            aria-disabled={!table.getCanNextPage()}
            className={
              !table.getCanNextPage()
                ? "pointer-events-none opacity-50"
                : ""
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
