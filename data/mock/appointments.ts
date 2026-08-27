import { Appointment } from "@/types";

export const appointments: Appointment[] = [
  {
    patient: "Emily Johnson",
    initials: "EJ",
    time: "09:30 AM",
    type: "Follow-up",
    status: "Confirmed",
  },
  {
    patient: "Michael Brown",
    initials: "MB",
    time: "10:15 AM",
    type: "Consultation",
    status: "Waiting",
  },
  {
    patient: "Olivia Davis",
    initials: "OD",
    time: "11:00 AM",
    type: "Check-up",
    status: "Confirmed",
  },
  {
    patient: "James Wilson",
    initials: "JW",
    time: "11:45 AM",
    type: "Follow-up",
    status: "Completed",
  },
];
