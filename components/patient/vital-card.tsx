import { Vital } from "@/types";
import { Card } from "../ui/card";
import { Vitals } from "@/data/mock/Vitals";

type VitalType = "BP" | "HR" | "TEMP" | "SPO2";

type VitalCardProps ={

    patientId : string;
    vitalType : VitalType;

}


export function VitalCard( {patientId,vitalType} : VitalCardProps){

    const vital = Vitals.find(vital => vital.patientId === patientId );

    if(!vital){

        return (<div> No vitals found </div>)
    }

    let label: string;
    let value: string | number;
    let unit: string;

      switch (vitalType) {
        case "BP":
            label = "Blood Pressure";
            value = vital.bloodPressure;
            unit = vital.blodPressureUnit;
            break;

        case "HR":
            label = "Heart Rate";
            value = vital.heartRate;
            unit = vital.heartRateUnit;
            break;

        case "TEMP":
            label = "Temperature";
            value = vital.temperature;
            unit = vital.temperatureUnit;
            break;

        case "SPO2":
            label = "SpO₂";
            value = vital.spo2;
            unit = vital.spo2Unit;
            break;

        default:
            return <div>Invalid vital type</div>;
    }

    return(  

        <Card className="p-4 bg-[#e5f5ea] dark:bg-[#17251d]  **:dark:text-white rounded-md border-0">
            <div>
                <div className="text-xs font-normal text-emerald-800">
                    {label}
                </div>

                <div className="mt-1 text-2xl font-medium leading-none text-gray-900">
                    {value}
                </div>

                <div className="mt-1 text-xs text-gray-500">
                    {unit}
                </div>

                <span className="mt-1 inline-flex rounded-full bg-white px-2 py-0.5 text-xs font-medium text-emerald-700">
                    {vital.status}
                </span>
            </div>
        </Card>

    );
}