import { Badge } from "@/components/ui/badge";

export function AppointmentStatus({ status }: { status: string }) {
  
    let color = "";

    if (status === "Confirmed") {
    color = "bg-green-100 text-green-700";
  } else if (status === "Waiting") {
    color = "bg-yellow-100 text-yellow-700";
  } else if (status === "Completed") {
    color = "bg-blue-100 text-blue-700";
  } else if (status === "Cancelled") {
    color = "bg-red-100 text-red-700";
  }

  return (
    <Badge className={color}>
      {status}
    </Badge>
  );
}