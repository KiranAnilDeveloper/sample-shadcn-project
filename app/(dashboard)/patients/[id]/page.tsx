import { AppointmentStatus } from "@/components/dashboard/appointment-status";
import { DataTable } from "@/components/dashboard/datatable";
import { PatientHeaderCard } from "@/components/patient/patient-header-card";
import { PatientInfoCard } from "@/components/patient/patient-info-card";
import { PatientVitalsCard } from "@/components/patient/patient-vitals-card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { Appointment } from "@/types";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import {appointments} from "@/data/mock/appointments"

type Column<T> = {
  header: string;
  accessor: (row: T) => React.ReactNode;
  className?: string;
};

  const avatarColors = [
  "bg-[#dcecf8] text-[#5b9bc2]",
  "bg-[#e8f6f3] text-[#5fb8a8]",
  "bg-[#f0eaf8] text-[#9a83c4]",
  "bg-[#fde8e7] text-[#d97973]",
];

type PatientsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

 const appointmentColumns: Column<Appointment>[] = [

  {
    header: "TIME",
    accessor: (appointment) => appointment.time,
    className: "text-[#687777]",
  },
  {
    header: "TYPE",
    accessor: (appointment) => appointment.type,
    className: "text-[#687777]",
  },
  {
    header: "STATUS",
    accessor: (appointment) => (
      <AppointmentStatus status={appointment.status} />
    ),
  },
];


export default async function PatientsPage( props : PatientsPageProps) {

    const { id } = await props.params;
   // const selectionColor = "data-active:text-blue-600 data-active:after:bg-blue-600";
    const selectionColor = "data-active:text-[#5fb8a8] data-active:after:bg-[#5fb8a8]";
    const paddingForTab = "px-5";

    const recentAppointments = appointments.filter(appointment => appointment.patientId === id)

  return (
    <div>

      <Link href={"/"} className="inline-flex items-center text-[13px] text-[#5fb8a8] mb-4" >
             <ArrowLeft size={16} /> <span className="ml-1">Back to Patients</span>
      </Link>

      <PatientHeaderCard id={id}></PatientHeaderCard>


      <div className="mt-6">
          <Tabs defaultValue="overview">
            <div className="w-full border-b-1">
              <TabsList variant="line" className="rounded-none bg-transparent">
              <TabsTrigger value="OV" className={cn(paddingForTab,selectionColor)} >Overview</TabsTrigger>
              <TabsTrigger className={cn(paddingForTab,selectionColor)} value="MH">Medical History</TabsTrigger>
              <TabsTrigger className={cn(paddingForTab,selectionColor)} value="APP">Appointments</TabsTrigger>
              <TabsTrigger className={cn(paddingForTab,selectionColor)} value="DOC">Documents</TabsTrigger>
            </TabsList>
            </div>            
             <TabsContent value="OV">
              <div className="flex flex-row gap-5">
                  <div className="flex-1">
                    <PatientInfoCard id={id}></PatientInfoCard>
                  </div>
                  <div className="flex-1">
                    <PatientVitalsCard id={id}></PatientVitalsCard>
                  </div>
              </div>     
              <div className="mt-4">    
                  <DataTable viewAllHref="" showActionButton={false} actionBasePath="/patients" actionIdKey="id" data={recentAppointments} columns={appointmentColumns} title="Recent Appointments"></DataTable>
              </div>         
            </TabsContent>

            <TabsContent value="MH">
              <div>Medical History</div>
            </TabsContent>

            <TabsContent value="APP">
              <div>Appointents</div>
            </TabsContent>

            <TabsContent value="DOC">
              <div>Documents</div>
            </TabsContent>
          </Tabs>
      </div>

      
    </div>
  );
}
