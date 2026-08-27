import { Badge } from "@/components/ui/badge";

export function AppointmentStatus({ status }: { status: string }) {
  
    let color = "";

    if (status === "Confirmed") {
    color = "bg-[#e5f5ea] text-[#3f8056]";
  } else if (status === "Waiting") {
    color = "bg-[#fff2d9] text-[#8a6a2f]";
  } else if (status === "Completed") {
    color = "bg-[#dcecf8] text-[#5b9bc2]";
  } else if (status === "Cancelled") {
    color = "bg-red-100 text-red-700";
  }

  return (
    <Badge className={color}>
      {status}
    </Badge>
  );
}