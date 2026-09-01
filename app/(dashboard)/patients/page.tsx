import { DataTableTanstack } from "@/components/dashboard/datatable/datatable-tanstack";
import { patientColumns } from "@/components/dashboard/datatable/columns"
import { recentPatients } from "@/data/mock/patients";


/* async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    }
  ]
} */



export default async function PatientsListPage() {

  //const data = await getData();

  return (
    <div>
      <div className="container mx-auto py-10">
      <DataTableTanstack viewAllHref="" actionBasePath="/patientdetails" actionIdKey="id" title="Patients" columns={patientColumns} data={recentPatients} />
            </div>
    </div>
  );
}
