import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { clinicalAlerts } from "@/data/mock/alerts";
import { ClinicalAlertsItemCard } from "./clinical-alerts-item-card";



export function ClinicalAlertsCard() { 

    return (

        <Card className="gap-0 h-100 py-4 px-5">

            <div className="mb-4">
                Clinical Alerts
            </div>
            <CardContent>
                {
                    clinicalAlerts.map((alert, index) => (
                        <div className="mb-3">
                            <ClinicalAlertsItemCard
                                key={`${alert.patient}-${index}`}
                                alert={alert}
                            />
                        </div>
                ))
            }

            </CardContent>

        </Card>


    );


}

