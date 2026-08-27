import { ClinicalAlert } from "@/types";

export const clinicalAlerts: ClinicalAlert[] = [
  {
    patient: "John Smith",
    initials: "JS",
    message: "Blood pressure reading requires review.",
    timeAgo: "10 minutes ago",
    type: "critical",
  },
  {
    patient: "Maria Thomas",
    initials: "MT",
    message: "Follow-up appointment overdue.",
    timeAgo: "2 hours ago",
    type: "warning",
  },
  {
    patient: "Robert Lee",
    initials: "RL",
    message: "Lab results ready for review.",
    timeAgo: "3 hours ago",
    type: "info",
  },
];
