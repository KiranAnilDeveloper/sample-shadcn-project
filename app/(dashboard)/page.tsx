import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, CalendarCheck, CheckSquare, TriangleAlert, Plus, InfoIcon } from "lucide-react";
import { Table, TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Alert, AlertTitle, AlertDescription, AlertAction } from "@/components/ui/alert";
import { appointments } from "@/data/mock/appointments";
import { clinicalAlerts } from "@/data/mock/alerts";
import { Appointment, RecentPatient } from "@/types";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { DataTable } from "@/components/dashboard/datatable";
import { recentPatients } from "@/data/mock/patients";
import { AppointmentStatus } from "@/components/dashboard/appointment-status";
import { ClinicalAlertsCard } from "@/components/dashboard/clinical-alerts-card";

export default function DashboardPage() {

  type Column<T> = {
  header: string;
  accessor: (row: T) => React.ReactNode;
  className?: string;
};

console.log(appointments)

  const avatarColors = [
  "bg-[#dcecf8] text-[#5b9bc2]",
  "bg-[#e8f6f3] text-[#5fb8a8]",
  "bg-[#f0eaf8] text-[#9a83c4]",
  "bg-[#fde8e7] text-[#d97973]",
];

  const patientColumns: Column<RecentPatient>[] = [
  {
    header: "PATIENT",
    accessor: (patient) => { 
      
    const color =
    avatarColors[patient.initials.charCodeAt(0) % avatarColors.length];
      
      return (
      <div className="flex items-center gap-2">
        <Avatar className="h-7 w-7">
          <AvatarFallback className={color}>
            {patient.initials}
          </AvatarFallback>
        </Avatar>

        {patient.name}
      </div>
    )},
  },
  {
    header: "ID",
    accessor: (patient) => patient.id,
    className : "text-[#8a9696]"
  },
  {
    header: "AGE",
    accessor: (patient) => patient.age,
    className : "text-[#687777]"
  },
  {
    header: "GENDER",
    accessor: (patient) => patient.gender,
    className : "text-[#687777]"
  },
  {
    header: "LAST VISIT",
    accessor: (patient) => patient.lastVisit,
    className : "text-[#687777]"
  },
  {
    header: "STATUS",
    accessor: (patient) => (
      // <PatientStatus status={patient.status} />
      <AppointmentStatus status={patient.status}></AppointmentStatus>
    ),
  },
];

  const appointmentColumns: Column<Appointment>[] = [
  {
    header: "PATIENT",
    accessor: (appointment) => {
      const color =
      avatarColors[appointment.initials.charCodeAt(0) % avatarColors.length];
      
      return(
      <div className="flex items-center gap-2">
        <Avatar className="h-7 w-7">
          <AvatarFallback className={color}>
            {appointment.initials}
          </AvatarFallback>
        </Avatar>

        {appointment.patient}
      </div>
    )},
  },
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



  return (
    <div>
      {/* Welcome Section */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Good morning, Dr. Sarah</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Here&apos;s your clinical overview for today.
          </p>
        </div>
        <Button className="gap-1.5">
          <Plus className="h-4 w-4" />
          New Patient
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="mb-6 grid grid-cols-4 gap-4">
        <StatsCard
          title="Total Patients"
          value="1,248"
          subtitle="+12 this month"
          icon={<Users className="h-[18px] w-[18px] text-primary" />}
          iconBg="bg-accent"
          subtitleColor="text-primary"
        />
        <StatsCard
          title="Today's Appointments"
          value="24"
          subtitle="8 remaining"
          icon={<CalendarCheck className="h-[18px] w-[18px] text-secondary-foreground" />}
          iconBg="bg-secondary"
          subtitleColor="text-secondary-foreground"
        />
        <StatsCard
          title="Follow-ups"
          value="12"
          subtitle="5 due today"
          icon={<CheckSquare className="h-[18px] w-[18px] text-[#9A83C4]" />}
          iconBg="bg-[#F0EAF8]"
          subtitleColor="text-[#9A83C4]"
        />
        <StatsCard
          title="Critical Alerts"
          value="3"
          subtitle="Requires attention"
          icon={<TriangleAlert className="h-[18px] w-[18px] text-destructive" />}
          iconBg="bg-[#FDE8E7]"
          subtitleColor="text-destructive"
        />
      </div>


      {/* TODO: Interns add the following sections:
          - Today's Appointments table  (shadcn Table + Badge + Avatar)
          - Clinical Alerts card        (Card with pastel backgrounds)
          - Recent Patients table       (shadcn Table + Badge)
      */}

      <div className="flex gap-5">
        <div className="flex-1 min-w-0">
          {/* <AppointmentsCard></AppointmentsCard> */}
          <DataTable  viewAllHref="" actionBasePath="/patients" actionIdKey="patientId" data={appointments} columns={appointmentColumns} title="Today's Appointments" ></DataTable>

        </div>
        <div className="w-1/5 min-w-70">
          <ClinicalAlertsCard></ClinicalAlertsCard>
        </div>
      </div>

      <div className="mt-6">
          <DataTable viewAllHref="" actionBasePath="/patients" actionIdKey="id" data={recentPatients} columns={patientColumns} title="Recent Patients"></DataTable>
      </div>
    </div>
  );
}

// ============================================
// REUSABLE COMPONENT — StatsCard
// ============================================
// Study this pattern, then build the remaining sections.

function StatsCard({
  title,
  value,
  subtitle,
  icon,
  iconBg,
  subtitleColor,
}: {
  title: string;
  value: string;
  subtitle: string;
  icon: React.ReactNode;
  iconBg: string;
  subtitleColor: string;
}) {
  return (
    <Card>
      <CardContent className="p-5">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[13px] font-medium text-muted-foreground">
            {title}
          </span>
          <div
            className={`flex h-9 w-9 items-center justify-center rounded-lg ${iconBg}`}
          >
            {icon}
          </div>
        </div>
        <div className="text-[28px] font-semibold">{value}</div>
        <div className={`mt-1 text-xs ${subtitleColor}`}>{subtitle}</div>
      </CardContent>
    </Card>
  );
}
