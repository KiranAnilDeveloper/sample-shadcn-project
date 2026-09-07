export type NotificationType =
  | "critical"
  | "follow-up"
  | "lab"
  | "patient";

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
}

export const mockNotifications: Notification[] = [
  {
    id: "1",
    type: "critical",
    title: "Critical BP reading",
    message: "John Smith's blood pressure requires review.",
    timestamp: "10 minutes ago",
    read: false,
  },
  {
    id: "2",
    type: "follow-up",
    title: "Overdue follow-up",
    message: "Maria Thomas's follow-up appointment is overdue.",
    timestamp: "2 hours ago",
    read: false,
  },
  {
    id: "3",
    type: "lab",
    title: "Lab results ready",
    message: "Robert Lee's lab results are ready for review.",
    timestamp: "3 hours ago",
    read: false,
  },
  {
    id: "4",
    type: "patient",
    title: "New patient registered",
    message: "Sophia Martinez was added to your list.",
    timestamp: "Yesterday",
    read: true,
  },
];