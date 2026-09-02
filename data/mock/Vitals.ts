import { Vital } from "@/types";
import { recentPatients } from "./patients";

const randomBetween = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateBloodPressure = () => {
  const systolic = randomBetween(105, 145);
  const diastolic = randomBetween(65, 95);

  return `${systolic}/${diastolic}`;
};

const generateHeartRate = () => {
  return String(randomBetween(58, 105));
};

const generateTemperature = () => {
  // Normal-ish human body temperature in Fahrenheit
  return (97.2 + Math.random() * 3.2).toFixed(1);
};

const generateSpO2 = () => {
  return `${randomBetween(94, 100)}%`;
};

const getVitalStatus = (
  heartRate: number,
  temperature: number,
  spo2: number
): Vital["status"] => {
  if (
    heartRate < 60 ||
    heartRate > 100 ||
    temperature < 97 ||
    temperature > 100.4 ||
    spo2 < 95
  ) {
    return "Abnormal";
  }

  return "Normal";
};

export const Vitals: Vital[] = Array.from(
  { length: 500 },
  (_, index) => {
    // Use the same patients generated in recentPatients
    const patient = recentPatients[index % recentPatients.length];

    const heartRate = Number(generateHeartRate());
    const temperature = Number(generateTemperature());
    const spo2 = Number(generateSpO2().replace("%", ""));

    return {
      id: String(index + 1),

      // Connect vital to an actual patient
      patientId: patient.id,

      bloodPressure: generateBloodPressure(),

      blodPressureUnit: "mmHg",

      heartRate: String(heartRate),

      heartRateUnit: "bpm",

      temperature: temperature.toFixed(1),

      temperatureUnit: "F",

      spo2: `${spo2}%`,

      spo2Unit: "Oxygen",

      status: getVitalStatus(
        heartRate,
        temperature,
        spo2
      ),
    };
  }
);