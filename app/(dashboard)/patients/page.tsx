import { DataTableTanstack } from "@/components/dashboard/datatable/datatable-tanstack";
import { patientColumns } from "@/components/dashboard/datatable/patients-columns"
import { patientFilters } from "@/components/dashboard/datatable/patients-filters";
import { recentPatients } from "@/data/mock/patients";


export default async function PatientsListPage() {

  //const data = await getData();

  return (
    <div>
      <div className="container mx-auto py-10">
      <DataTableTanstack filters={patientFilters} viewAllHref="" actionBasePath="/patientdetails" actionIdKey="id" title="Patients" columns={patientColumns} data={recentPatients} />
            </div>
    </div>
  );
}
