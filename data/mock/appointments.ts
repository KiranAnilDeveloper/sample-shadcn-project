import { Appointment } from "@/types";
import { recentPatients } from "./patients";

const appointmentTypes: Appointment["type"][] = [
  "Follow-up",
  "Consultation",
  "Check-up",
];

const statuses: Appointment["status"][] = [
  "Confirmed",
  "Waiting",
  "Completed",
];

const generateTime = (index: number) => {
  // Appointments between 8:30 AM and 5:30 PM
  const startMinutes = 8 * 60 + 30;
  const interval = 30;

  const totalMinutes = startMinutes + (index % 19) * interval;

  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  const period = hours >= 12 ? "PM" : "AM";
  const displayHour = hours % 12 || 12;

  return `${displayHour}:${minutes
    .toString()
    .padStart(2, "0")} ${period}`;
};

export const appointments: Appointment[] = Array.from(
  { length: 100 },
  (_, index) => {
    // Reuse patients generated in recentPatients
    const patient = recentPatients[index % recentPatients.length];

    return {
      id: String(index + 1),

      patient: patient.name,

      initials: patient.initials,

      time: generateTime(index),

      type:
        appointmentTypes[
          Math.floor(Math.random() * appointmentTypes.length)
        ],

      status:
        statuses[
          Math.floor(Math.random() * statuses.length)
        ],

      // Important: appointment points to the actual patient
      patientId: patient.id,
    };
  }
);