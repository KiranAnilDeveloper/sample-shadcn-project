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
import { DataTableTanstack } from "@/components/dashboard/datatable/datatable-tanstack";
import { appointmentFilters } from "@/components/dashboard/datatable/appointment-filters";
import { appointmentsColumns } from "@/components/dashboard/datatable/appointments.-columns";
import { patientFilters } from "@/components/dashboard/datatable/patients-filters";
import { patientColumns } from "@/components/dashboard/datatable/patients-columns";

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
          {/* <DataTable  viewAllHref="" actionBasePath="/patientdetails" actionIdKey="patientId" data={appointments} columns={appointmentColumns} title="Today's Appointments" ></DataTable> */}

          <DataTableTanstack filters={appointmentFilters} viewAllHref="" actionBasePath="/appointmentdetails" actionIdKey="id" 
                    title="Recent Appointments" columns={appointmentsColumns} data={appointments} isPaginationrequired={false} isFilterRequired={false}
                    tableHeight="326px" />


        </div>
        <div className="w-1/5 min-w-70">
          <ClinicalAlertsCard></ClinicalAlertsCard>
        </div>
      </div>

      <div className="mt-6">
          <DataTableTanstack filters={patientFilters} viewAllHref="" actionBasePath="/patientdetails" actionIdKey="id" 
                    title="Recent Patients" columns={patientColumns} data={recentPatients} isPaginationrequired={false} isFilterRequired={false}
                    tableHeight="326px" /> 
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
