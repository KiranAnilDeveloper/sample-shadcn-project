import { Card } from "../ui/card";
import { VitalCard } from "./vital-card";

type PatientVitalsCardProp = {

    id : string;
}



export function PatientVitalsCard({id}: PatientVitalsCardProp){    


    return (

        <Card className="gap-0 h-100 py-4 px-5 mt-5">

            <div className="mb-4 text-base font-semibold">
                Current Vitals
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <VitalCard patientId={id} vitalType="BP"></VitalCard>
                <VitalCard patientId={id} vitalType="HR"></VitalCard>
                <VitalCard patientId={id} vitalType="TEMP"></VitalCard>
                <VitalCard patientId={id} vitalType="SPO2"></VitalCard>
            </div>
            

        </Card>

    );



}