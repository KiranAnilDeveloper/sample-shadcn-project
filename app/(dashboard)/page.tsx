import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, CalendarCheck, CheckSquare, TriangleAlert, Plus, InfoIcon } from "lucide-react";
import { Table, TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Alert, AlertTitle, AlertDescription, AlertAction } from "@/components/ui/alert";

export default function DashboardPage() {
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

      <div>
        table here
              <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      </div>


      <div className="flex">
        <div className="flex-1" >

        </div>
        <div className="flex-1">
          <Alert>
          <InfoIcon />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components and dependencies to your app using the cli.
          </AlertDescription>
          <AlertAction>
            <Button variant="outline">Enable</Button>
          </AlertAction>
          </Alert>
        </div>
        
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
