import { appointmentFilters } from "@/components/dashboard/datatable/appointment-filters";
import { appointmentsColumns } from "@/components/dashboard/datatable/appointments.-columns";
import { DataTableResearch } from "@/components/dashboard/datatable/datatable-research";
import { DataTableTanstack } from "@/components/dashboard/datatable/datatable-tanstack";
import { appointments } from "@/data/mock/appointments";

export default function AppointmentsPage() {
  return (
    <div>
          <div className="container mx-auto py-10">
          {/* <DataTableTanstack filters={appointmentFilters} viewAllHref="" actionBasePath="/appointmentdetails" actionIdKey="id" 
          title="Appointments" columns={appointmentsColumns} data={appointments} /> */}

          <DataTableResearch viewAllHref="" actionBasePath="/appointmentdetails" actionIdKey="id" 
          title="Appointments" columns={appointmentsColumns} data={appointments} />
                </div>
        </div>
  );
}
