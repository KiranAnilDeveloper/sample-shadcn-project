"use client"
 
import { createColumnHelper } from "@tanstack/react-table"
 
import { type DataTableFeatures } from "./data-table-features"
import { RecentPatient } from "@/types"
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AppointmentStatus } from "../appointment-status";

  const avatarColors = [
  "bg-[#dcecf8] text-[#5b9bc2]",
  "bg-[#e8f6f3] text-[#5fb8a8]",
  "bg-[#f0eaf8] text-[#9a83c4]",
  "bg-[#fde8e7] text-[#d97973]",
];

  const columnHelper = createColumnHelper<DataTableFeatures, RecentPatient>()

  export const patientColumns = columnHelper.columns([
  columnHelper.accessor("initials", {
    header: "PATIENT",
    filterFn: (row, columnId, filterValue) => {
    const patient = row.original

    const search = String(filterValue).toLowerCase().trim()

    return (
      patient.initials.toLowerCase().includes(search) ||
      patient.name.toLowerCase().includes(search)||
      patient.id.toLowerCase().includes(search)
    )
  },
    cell: ({ row }) => {
      const patient = row.original

       const color =
        avatarColors[
          patient.initials.charCodeAt(0) % avatarColors.length
        ] 

      return (
        <div className="flex items-center gap-2">
          <Avatar className="h-7 w-7">
            <AvatarFallback  className={color}>
              {patient.initials}
            </AvatarFallback>
          </Avatar>

          {patient.name}
        </div>
      )
    },
  }),

  columnHelper.accessor("id", {
    header: "ID",
    cell: ({ getValue }) => (
      <span className="text-[#8a9696]">
        {getValue()}
      </span>
    ),
  }),

  columnHelper.accessor("age", {
    header: "AGE",
    cell: ({ getValue }) => (
      <span className="text-[#687777]">
        {getValue()}
      </span>
    ),
  }),

  columnHelper.accessor("gender", {
    header: "GENDER",
    cell: ({ getValue }) => (
      <span className="text-[#687777]">
        {getValue()}
      </span>
    ),
  }),

  columnHelper.accessor("lastVisit", {
    header: "LAST VISIT",
    cell: ({ getValue }) => (
      <span className="text-[#687777]">
        {getValue()}
      </span>
    ),
  }),

  columnHelper.accessor("status", {
    header: "STATUS",
      filterFn: (row, columnId, filterValue) => {
    if (!filterValue) return true

    return row.original.status === filterValue
  },
    cell: ({ getValue }) => (
      <AppointmentStatus status={getValue()} />
    ),
  }),
])