import { Appointment } from "@/types";

export const appointments: Appointment[] = [
  {
    id:"1",
    patient: "Emily Johnson",
    initials: "EJ",
    time: "09:30 AM",
    type: "Follow-up",
    status: "Confirmed",
    patientId:"PT-10245"
  },
  {
     id:"2",
    patient: "Michael Brown",
    initials: "MB",
    time: "10:15 AM",
    type: "Consultation",
    status: "Waiting",
    patientId:"PT-10312"
  },
  {
    id:"3",
    patient: "Olivia Davis",
    initials: "OD",
    time: "11:00 AM",
    type: "Check-up",
    status: "Confirmed",
    patientId:"PT-10198"
  },
  {
     id:"4",
    patient: "James Wilson",
    initials: "JW",
    time: "11:45 AM",
    type: "Follow-up",
    status: "Completed",
    patientId:"PT-10199"
  },
];
