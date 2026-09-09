import { CreditCardIcon, LogOutIcon, SettingsIcon, UserIcon } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback } from "./ui/avatar";

export function DropdownProfile(){


    return (

    <DropdownMenu>
      <DropdownMenuTrigger render={
            <div className="flex h-8 w-8 items-center justify-center sm:h-9 sm:w-9">
                <Avatar className="h-9 w-9 cursor-pointer">
                <AvatarFallback className="bg-accent text-sm font-semibold text-accent-foreground">
                    DS
                </AvatarFallback>
                </Avatar>
            </div>
        } 
        />
      <DropdownMenuContent className="w-max p-0">
              <div className="flex items-center  gap-3 px-4 py-4">
                      <Avatar className="h-10 w-10 shrink-0">
                        <AvatarFallback className="bg-accent text-sm font-semibold text-accent-foreground">
                          DS
                        </AvatarFallback>
                      </Avatar>
            
                      <div className="flex flex-col">
                        <span
                          className="truncate text-sm font-semibold text-slate-900" >
                          Dr. Sarah
                        </span>
                        <span
                          className="truncate text-xs text-slate-500" >
                          sarah@mdcity.com
                        </span>

                      </div>
                      
              </div>
              <DropdownMenuSeparator />
          
        <div className="p-1.5">
          <DropdownMenuItem className="h-10 cursor-pointer gap-3 rounded-md px-3">
          <UserIcon />
          My Profile
        </DropdownMenuItem>
        <DropdownMenuItem className="h-10 cursor-pointer gap-3 rounded-md px-3">
          <CreditCardIcon />
          Account Settings
        </DropdownMenuItem>
        <DropdownMenuItem className="h-10 cursor-pointer gap-3 rounded-md px-3">
          <SettingsIcon />
          Help & Support
        </DropdownMenuItem>

        <DropdownMenuSeparator />
        
        <DropdownMenuItem variant="destructive" className="h-10 cursor-pointer gap-3 rounded-md px-3">
          <LogOutIcon />
          Sign out
        </DropdownMenuItem>
        </div>
        
      </DropdownMenuContent>
    </DropdownMenu>

    );


}