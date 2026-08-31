

export type AppointmentStatus = "Confirmed" | "Waiting" | "Completed";



export type Appointment = {
  id:string;
  patient: string;
  initials: string;
  time: string;
  type: "Follow-up" | "Consultation" | "Check-up";
  status: AppointmentStatus;
  patientId : string;
};

export type AlertType = "critical" | "warning" | "info";

export type ClinicalAlert = {
  id:string;
  patient: string;
  initials: string;
  message: string;
  timeAgo: string;
  type: AlertType;
};

export type PatientStatus = "Stable" | "Follow-up";

export type RecentPatient = {
  name: string;
  initials: string;
  id: string;
  age: number;
  gender: "Female" | "Male";
  lastVisit: string;
  status: PatientStatus;
  bloodGroup : string;
  phone : string;
  address : string;
  dob: Date;
  email: string;
  emergencyContactName : string;
  emergencyContactPhone : string;
  emergencyContactRelationship : string;
};


export type Vital = {

  id:string;
  patientId : string;
  bloodPressure : string;
  blodPressureUnit : string;
  heartRate : string;
  heartRateUnit : string;
  temperature : string;
  temperatureUnit : string;
  spo2 : string;
  spo2Unit : string;
  status : string;

}
