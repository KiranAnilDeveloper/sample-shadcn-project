

import { Ellipsis } from "lucide-react";
import { AppointmentStatus } from "../dashboard/appointment-status";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { RecentPatient } from "@/types";
import { recentPatients } from "@/data/mock/patients";


type PatientHeaderCardProps = {

    id : string
}

export function PatientHeaderCard( {id} : PatientHeaderCardProps){

    const recentPatient  = recentPatients.find(patient => patient.id === id)

     if (!recentPatient) {
    return <div>Patient not found</div>
  }

    return (

        <Card className="p-6">

            <div className="flex items-center">
                <Avatar className="h-[56px] w-[56px]">
                <AvatarFallback>
                    {recentPatient.initials}
                </AvatarFallback>
                </Avatar>
                <div className="ml-4">
                    <h2 className="font-semibold text-xl">{recentPatient.name}</h2>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span>{recentPatient.id}</span>
                        <span className="mx-3">·</span>
                        <span>{recentPatient.gender}</span>
                        <span className="mx-3">·</span>
                        <span>{recentPatient.age} years</span>
                        <span className="mx-3">·</span>
                        <span>Blood Group: {recentPatient.bloodGroup}</span>
                    </div>

                </div>
                <div className="ml-auto flex items-center gap-3">
                    <AppointmentStatus status="Stable"></AppointmentStatus>
                    <Button> Edit Patient </Button>
                    <Button variant="outline" size="icon" className="rounded-lg"> <Ellipsis /> </Button>
                    
                </div>

            </div>

        </Card>

    );


}