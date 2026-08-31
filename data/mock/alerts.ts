import { ClinicalAlert } from "@/types";

export const clinicalAlerts: ClinicalAlert[] = [
  {
    id:"1",
    patient: "John Smith",
    initials: "JS",
    message: "Blood pressure reading requires review.",
    timeAgo: "10 minutes ago",
    type: "critical",
  },
  {
    id:"2",
    patient: "Maria Thomas",
    initials: "MT",
    message: "Follow-up appointment overdue.",
    timeAgo: "2 hours ago",
    type: "warning",
  },
  {
    id:"3",
    patient: "Robert Lee",
    initials: "RL",
    message: "Lab results ready for review.",
    timeAgo: "3 hours ago",
    type: "info",
  },
];
