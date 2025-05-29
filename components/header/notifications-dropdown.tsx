"use client";

import { Bell } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { notifications } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

export function NotificationsDropdown() {
  const [notifs, setNotifications] = useState(notifications);
  const unreadCount = notifs.filter(n => !n.read).length;

  const markAllAsRead = () => {
    setNotifications(notifs.map(n => ({ ...n, read: true })));
  };

  const getNotificationIcon = (type: string) => {
    switch(type) {
      case 'success':
        return "bg-green-500";
      case 'warning':
        return "bg-yellow-500";
      case 'error':
        return "bg-red-500";
      default:
        return "bg-blue-500";
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative h-9 w-9 rounded-full">
          <Bell className="h-[1.2rem] w-[1.2rem]" />
          {unreadCount > 0 && (
            <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-destructive px-1 text-xs font-medium text-white">
              {unreadCount}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80" align="end">
        <DropdownMenuLabel className="flex items-center justify-between">
          <span>Notifications</span>
          {unreadCount > 0 && (
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-auto p-0 text-xs font-medium text-muted-foreground"
              onClick={markAllAsRead}
            >
              Mark all as read
            </Button>
          )}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <ScrollArea className="h-[calc(var(--radix-dropdown-menu-content-available-height)-110px)] min-h-[250px]">
          <DropdownMenuGroup>
            {notifs.length > 0 ? (
              notifs.map((notification) => (
                <DropdownMenuItem key={notification.id} className="flex flex-col items-start p-4 focus:bg-accent/50">
                  <div className="flex w-full gap-2">
                    <div className={cn("mt-1 h-2 w-2 flex-shrink-0 rounded-full", getNotificationIcon(notification.type))}></div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <p className={cn(
                          "text-sm font-medium leading-none",
                          !notification.read ? "text-foreground" : "text-muted-foreground"
                        )}>
                          {notification.title}
                        </p>
                        <span className="text-xs text-muted-foreground">{notification.time}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{notification.description}</p>
                    </div>
                  </div>
                </DropdownMenuItem>
              ))
            ) : (
              <div className="flex h-40 items-center justify-center p-4">
                <p className="text-sm text-muted-foreground">No notifications</p>
              </div>
            )}
          </DropdownMenuGroup>
        </ScrollArea>
        <DropdownMenuSeparator />
        <div className="p-2">
          <Button variant="outline" className="w-full justify-center">View all notifications</Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}