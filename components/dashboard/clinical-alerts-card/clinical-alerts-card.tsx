import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ClinicalAlertsItemCard } from "../clinical-alerts-item-card/clinical-alerts-item-card";
import { clinicalAlerts } from "@/data/mock/alerts";



export function ClinicalAlertsCard() { 

    return (

        <Card className="gap-0 h-100">

            <CardHeader>
                Clinical Alerts
            </CardHeader>

            {
                clinicalAlerts.map((alert, index) => (
                <ClinicalAlertsItemCard
                key={`${alert.patient}-${index}`}
                alert={alert}
                />
                ))
            }

        </Card>


    );


}

