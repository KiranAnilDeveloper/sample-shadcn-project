import { Card, CardContent, CardHeader } from "@/components/ui/card";
import "./appointments-card.module.css"
import { Table, TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { appointments } from "@/data/mock/appointments";
import { AppointmentStatus } from "../appointment-status/appointment-status";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";


export function AppointmentsCard(){

return (  

    <Card className="gap-0 h-100">
        <CardHeader>
            <div className="flex justify-between">
                <div className="text-base font-medium"> Today's Appointments</div>
                <div className="flex items-center  text-[13px]  text-[#5fb8a8]">View all</div>
            </div>
        </CardHeader>
        <CardContent className="p-0">
            <div >
              <Table >
        {/* <TableCaption>A list of your recent appointments.</TableCaption> */}
        <TableHeader>
          <TableRow className="text-xs">
            <TableHead className="w-[100px]">PATIENT</TableHead>
            <TableHead>TIME</TableHead>
            <TableHead>TYPE</TableHead>
            <TableHead>STATUS</TableHead>
            <TableHead className="text-right">ACTION</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody >

        {

          appointments.map((appointment) => (

            <TableRow>
            <TableCell>
              {/* User Avatar */}
              <div className="flex items-center gap-2">
                <Avatar className="h-7 w-7 cursor-pointer">
                  <AvatarFallback className="bg-accent text-sm font-semibold text-accent-foreground">
                    {appointment.initials}
                  </AvatarFallback>
                </Avatar>              
              {appointment.patient}
              </div>
              
            </TableCell>
            <TableCell className="text-[#687777]">{appointment.time}</TableCell>
            <TableCell className="text-[#687777]">{appointment.type}</TableCell>

            <TableCell>

            <AppointmentStatus status={appointment.status}></AppointmentStatus>

            </TableCell>
            
            <TableCell className="text-right">View</TableCell>
          </TableRow>

          ))
        }

          
        </TableBody>
      </Table>
      </div>

        </CardContent>
        


    </Card>

)

}