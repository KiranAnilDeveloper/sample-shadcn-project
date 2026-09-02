import { RecentPatient } from "@/types";
import { DataTableFilter } from "./data-table-filters";

export const patientFilters: DataTableFilter<RecentPatient>[] = [
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
        label: "Stable",
        value: "Stable",
      },
      {
        label: "Critical",
        value: "Critical",
      },
      {
        label: "Follow-up",
        value: "Follow-up",
      },
    ],
  },
]