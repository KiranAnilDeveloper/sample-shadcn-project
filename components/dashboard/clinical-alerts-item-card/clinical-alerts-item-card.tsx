import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ClinicalAlert } from "@/types";


    type ClinicalAlertsItemCardProps = {
        alert: ClinicalAlert;
    };

    const testColor = '#687777'

    const variants = {
  critical: {
    card: "bg-red-50 border-red-100",
    avatar: "text-[#a84f4a]",
  },
  warning: {
    card: "bg-amber-50 border-amber-100",
    avatar: "text[#8a6a2f]",
  },
  info: {
    card: "bg-teal-50 border-teal-100",
    avatar: "text-[#253333]",
  },
};

export function ClinicalAlertsItemCard({
  alert,
}: ClinicalAlertsItemCardProps) {
  const variant = variants[alert.type];

  return (
    <Card
      className={cn(
        "rounded-xl border p-3.5",
        variant.card
      )}
    >
      <CardContent className="p-0">
        <div className="flex items-center gap-2.5">
          <Avatar className="h-7 w-7 cursor-pointer">
            <AvatarFallback className="bg-accent text-sm font-semibold text-accent-foreground">
              {alert.initials}
            </AvatarFallback>
          </Avatar>

          <span
            className={cn("text-[13px] font-semibold",variant.avatar)}
          >
            {alert.patient}
          </span>
        </div>

        <p
          className={cn("mt-2 text-[13px]",variant.avatar)}
        >
          {alert.message}
        </p>

        <p
          className={cn("mt-1 text-[11px]",variant.avatar)}
        >
          {alert.timeAgo}
        </p>
      </CardContent>
    </Card>
  );
}