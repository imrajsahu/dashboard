"use client";

import React, { useState } from "react";
import { navigationItems } from "@/lib/data";
import { SidebarItem } from "./sidebar-item";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  
  return (
    <aside
      className={cn(
        "flex flex-col border-r bg-card transition-all duration-300 h-full",
        collapsed ? "w-[72px]" : "w-[240px]",
        className
      )}
    >
      <div className="flex h-16 items-center px-2 sm:px-4">
        <Button 
          variant="ghost" 
          size="icon"
          className="h-8 w-8" 
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
        {!collapsed && (
          <div className="ml-2 flex items-center gap-2">
            <LayoutDashboard className="h-5 w-5" />
            <h1 className="text-lg font-bold">Dash<span className="text-primary">UI</span></h1>
          </div>
        )}
      </div>
      <Separator />
      <ScrollArea className="flex-1 py-2 overflow-y-auto">
        <div className="space-y-1 px-2">
          {navigationItems.map((item) => (
            <SidebarItem
              key={item.href}
              item={item}
              collapsed={collapsed}
            />
          ))}
        </div>
      </ScrollArea>
      <Separator />
      <div className={cn(
        "flex h-14 items-center",
        collapsed ? "justify-center px-2" : "px-4"
      )}>
        {collapsed ? (
          <Button variant="ghost\" className="p-2\" onClick={() => setCollapsed(!collapsed)}>
            <img 
              src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
              alt="User"
              className="h-8 w-8 rounded-full"
            />
          </Button>
        ) : (
          <div className="flex items-center gap-3">
            <img 
              src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
              alt="User"
              className="h-8 w-8 rounded-full"
            />
            <div className="flex flex-col">
              <span className="text-sm font-medium">Sophie A.</span>
              <span className="text-xs text-muted-foreground">Product Manager</span>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}