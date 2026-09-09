import { mockNotifications } from "@/data/mock/notifications";
import { Button } from "./ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "./ui/drawer";
import { NotificationItem } from "./notification-item-card";
import { Bell } from "lucide-react";

export function NotificationDrawwer(){

    const unreadCount = mockNotifications.filter(
    (notification) => !notification.read
  ).length


    return (
    <Drawer swipeDirection="right">
      <DrawerTrigger render={
        
        <Button variant="outline" size="icon" className="relative h-9 w-9">
          <Bell className="h-[18px] w-[18px] text-muted-foreground" />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full border-2 border-card bg-destructive" />
        </Button> 
        
        
        } />
      <DrawerContent className="w-full! sm:w-[320px]! rounded-none! right-0!">
        <div className="w-full overflow-hidden">
      {/* Header */}
      <div className="flex h-[58px] items-center justify-between border-b px-4">
        <div className="flex items-center gap-2">
          <h2 className="text-sm font-semibold">
            Notifications
          </h2>

          {unreadCount > 0 && (
            <span className="rounded-none bg-red-50 px-2 py-0.5 text-[10px] font-medium text-red-400">
              {unreadCount} new
            </span>
          )}
        </div>

<DrawerClose render={<button
          type="button"
          className="text-xl leading-none text-muted-foreground hover:text-foreground"
        >
          ×
        </button>} />
        
      </div>

      {/* Notification list */}
      <div>
        {mockNotifications.map((notification) => (
          <NotificationItem
            key={notification.id}
            type={notification.type}
            title={notification.title}
            message={notification.message}
            timestamp={notification.timestamp}
            read={notification.read}
          />
        ))}
      </div>
    </div>
      </DrawerContent>
    </Drawer>
  )


}