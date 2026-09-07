"use client"


import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Bell, Search } from "lucide-react";
import { ThemeSwitch } from "./themeswitch";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";
import { NotificationDrawwer } from "./notification-drawer";
import { SidebarTrigger } from "./ui/sidebar";

export function DashboardHeader() {

  const pathName = usePathname();
  const getPageName = () => {

    if(pathName === '/'){
      return ('Dashboard')
    }else if(pathName.startsWith('/patient')){
      return ('Patient Details')
    }else if(pathName.startsWith('/appointments')){
      return('Appointments')
    }else if(pathName.startsWith('/settings')){
      return('Settings')
    }
  }
  
  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b border-border bg-card px-3 sm:px-5 lg:px-7">
     {/*  hiding header text for small screens */}
      
      <div className="flex items-center gap-1.5 sm:gap-3">
        {/* Visible only on small screens */}
        <SidebarTrigger className="lg:hidden" />

        <h1 className="hidden sm:block text-lg font-semibold">{getPageName()}</h1>
      </div>

      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search patients..."
            className="h-9 w-[220px] bg-background pl-8 text-sm"
          />
        </div>

        {/* Notification Bell */}
        {/* <Button variant="outline" size="icon" className="relative h-9 w-9">
          <Bell className="h-[18px] w-[18px] text-muted-foreground" />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full border-2 border-card bg-destructive" />
        </Button> */}

        <NotificationDrawwer></NotificationDrawwer>

        {/* <ThemeSwitch></ThemeSwitch> */}
        <ThemeToggle></ThemeToggle>

        {/* User Avatar */}
        <Avatar className="h-9 w-9 cursor-pointer">
          <AvatarFallback className="bg-accent text-sm font-semibold text-accent-foreground">
            DS
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
