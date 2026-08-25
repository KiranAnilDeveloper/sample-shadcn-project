import { Card, CardContent, CardHeader } from "@/components/ui/card";
import "./appointments-card.module.css"
import { Table, TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { appointments } from "@/data/mock/appointments";


export function AppointmentsCard(){

    const cellPadding = "px-[20px] py-[14px]";

return (  

    <Card>
        <CardHeader>
            <div className="flex justify-between">
                <div className="text-lg font-medium"> Today's Appointments</div>
                <div>View all</div>
            </div>

        </CardHeader>
        <CardContent className="p-0">
            <div >
              <Table >
        <TableCaption>A list of your recent appointments.</TableCaption>
        <TableHeader>
          <TableRow >
            <TableHead className="w-[100px]">Patient</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Type</TableHead>
            <TableHead className="text-right">Status</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody >

        {

          appointments.map((appointment) => (

            <TableRow>
            <TableCell>{appointment.patient}</TableCell>
            <TableCell>{appointment.time}</TableCell>
            <TableCell>{appointment.type}</TableCell>
            <TableCell className="text-right">{appointment.status}</TableCell>
            <TableCell className="text-right">{appointment.status}</TableCell>
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