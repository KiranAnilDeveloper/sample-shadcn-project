import { Appointment } from "@/types";
import { DataTableFilter } from "./data-table-filters";

export const appointmentFilters: DataTableFilter<Appointment>[] = [
  {
    type: "text",
    columnId: "initials",
    placeholder: "Filter Name...",
  },

  {
    type: "toggle",
    columnId: "status",
    options: [
      {
        label: "Confirmed",
        value: "Confirmed",
      },
      {
        label: "Waiting",
        value: "Waiting",
      },
      {
        label: "Completed",
        value: "Completed",
      },
    ],
  },
]