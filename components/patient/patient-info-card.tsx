import { cn } from "@/lib/utils";
import { Card, CardHeader } from "../ui/card";
import { recentPatients } from "@/data/mock/patients";

type PatientInfoCardProps = {
    id : string;
}


export function PatientInfoCard({id} : PatientInfoCardProps ){

    const marginTop = "mt-3";
    const marginBottom = "mb-3";
    const labelClass = "text-muted-foreground text-xs"

    const patient = recentPatients.find(patient  => patient.id === id);

    if(!patient){
        return (<div>Patient not found</div>)
    }

    return (

        <Card className="gap-0 h-100 py-4 px-5 mt-5">

            <div className="mb-4 text-base font-semibold">
                Patient Information
            </div>
        <div className=" flex flex-row">
            <div className=" flex-1">
            <div className="flex flex-col">
                <span className={labelClass}>
                    Full Name
                </span>
                <span>
                    {patient.name}
                </span>
            </div>
            <div className= {cn("flex flex-col",marginTop)}>                                
                <span className={labelClass}>
                    gender
                </span>
                <span>
                    {patient.gender}
                </span>
            </div>
            <div className= {cn("flex flex-col",marginTop)}>
                <span className={labelClass}>
                    Phone
                </span>
                <span>
                    {patient.phone}
                </span>
            </div>
            <div className={cn("flex flex-col",marginTop)}>
                <span className={labelClass}>
                    Address
                </span>
                <span>
                    {patient.address}
                </span>
            </div>
        </div>

        <div className=" flex-1">
            <div className="flex flex-col">
                <span className={labelClass}>
                    Date of birth
                </span>
                <span>
                    { patient.dob.toLocaleDateString('en-US') }
                </span>
            </div>
            <div className={cn("flex flex-col",marginTop)}>
                <span className={labelClass}>
                    Blood group
                </span>
                <span>
                    {patient.bloodGroup}
                </span>
            </div>
            <div className={cn("flex flex-col",marginTop)}>
                <span className={labelClass}>
                    Email
                </span>
                <span>
                    {patient.email}
                </span>
            </div>
        </div>
        </div>
        
        <hr className={cn("border-border",marginBottom,marginTop)}   />

        <div className="mb-4 text-sm font-semibold">
                Emergency Contact
        </div>

        <div className=" flex flex-row">
            <div className=" flex-1">
            <div className="flex flex-col">
                <span className={labelClass}>
                    Name
                </span>
                <span>
                    {patient.emergencyContactName}
                </span>
            </div>
            <div className= {cn("flex flex-col",marginTop)}>                                
                <span className={labelClass}>
                    Phone 
                </span>
                <span>
                    {patient.emergencyContactPhone}
                </span>
            </div>
        </div>

        <div className=" flex-1">
            <div className="flex flex-col">
                <span className={labelClass}>
                    Relationship
                </span>
                <span>
                    {patient.emergencyContactRelationship}
                </span>
            </div>        
        </div>
        </div>
        </Card>


    );



}