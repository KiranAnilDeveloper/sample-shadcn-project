import {
  AlertTriangle,
  CalendarDays,
  ClipboardCheck,
  UserRound,
  type LucideIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { NotificationType } from "@/data/mock/notifications"

interface NotificationItemProps {
  title: string
  message: string
  timestamp: string
  type: NotificationType
  read: boolean
}

const notificationConfig = {
  critical: {
    icon: AlertTriangle,
    iconBg: "bg-red-50",
    iconColor: "text-red-400",
  },
  "follow-up": {
    icon: CalendarDays,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-500",
  },
  lab: {
    icon: ClipboardCheck,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-500",
  },
  patient: {
    icon: UserRound,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-400",
  },
}

export function NotificationItem({
  title,
  message,
  timestamp,
  type,
  read,
}: NotificationItemProps) {
  const config = notificationConfig[type]
  const Icon = config.icon

  return (
    <button
      type="button"
      className={cn(
        "flex w-full items-start gap-3 px-3 py-3 text-left",
        "f"
      )}
    >
      {/* Icon */}
      <div
        className={cn(
          "mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg",
          config.iconBg
        )}
      >
        <Icon
          className={cn("size-4", config.iconColor)}
          strokeWidth={1.8}
        />
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-2">
          <p className="text-[13px] font-medium leading-5 text-foreground">
            {title}
          </p>

          {/* Unread indicator */}
          {!read && (
            <span
              aria-label="Unread"
              className="mt-1.5 size-1.5 shrink-0 rounded-full bg-emerald-500"
            />
          )}
        </div>

        <p className="mt-0.5 text-[12px] leading-4 text-muted-foreground">
          {message}
        </p>

        <p className="mt-1.5 text-[10px] leading-3 text-muted-foreground/70">
          {timestamp}
        </p>
      </div>
    </button>
  )
}
