"use client";

"use client";

import React, { useState } from "react";
import { navigationItems } from "@/lib/data";
import { SidebarItem } from "./sidebar-item";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, LayoutDashboard, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [workspace, setWorkspace] = useState("personal");
  
  return (
    <aside
      className={cn(
        "flex flex-col border-r bg-card transition-all duration-300 h-full",
        collapsed ? "w-[72px]" : "w-[240px]",
        className
      )}
    > 
      <div className="flex h-16 items-center px-2 sm:px-4">
        <div className="flex w-full items-center justify-between">
          {!collapsed && (
            <div className="flex items-center gap-2">
              <LayoutDashboard className="h-5 w-5" />
              <h1 className="text-lg font-bold">Dash<span className="text-primary">UI</span></h1>
            </div>
          )}
          <Button 
            variant="ghost" 
            size="icon"
            className="h-8 w-8" 
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        </div>
      </div>
      <Separator />

      {/* Workspace Selector */}
      {!collapsed && (
        <>
          <div className="p-4">
            <Select value={workspace} onValueChange={setWorkspace}>
              <SelectTrigger>
                <div className="flex items-center gap-2">
                  <Building2 className="h-4 w-4" />
                  <SelectValue placeholder="Select workspace" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="personal">Personal Workspace</SelectItem>
                <SelectItem value="team">Team Workspace</SelectItem>
                <SelectItem value="project">Project Workspace</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Separator />
        </>
      )}
      
      {/* Onboarding Section */}
      {!collapsed && (
      <>
      <div className="p-4">
        <div className="rounded-lg bg-primary/10 p-4">
          <h3 className="text-sm font-medium">Welcome to DashUI!</h3>
          <p className="mt-1 text-xs text-muted-foreground">Complete your profile to get started</p>
          <div className="mt-3">
            <Button size="sm" className="w-full">Complete Setup</Button>
          </div>
        </div>
      </div>
      <Separator />
      </>
      )}
      
      {/* Navigation Items */}
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
      
      {/* Footer with Profile */}
      <div className={cn(
        "flex h-14 items-center justify-between",
        collapsed ? "px-2" : "px-4"
      )}>
        {collapsed ? ( 
          <Button variant="ghost\" className=\"p-2\" onClick={() => setCollapsed(!collapsed)}>
            <img 
              src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
              alt="User"
              className="h-8 w-8 rounded-full"
            />
          </Button>
        ) : (
          <div className="flex items-center justify-between w-full">
            <Button variant="outline" size="icon" className="h-8 w-8">
              <img 
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
                alt="User"
                className="h-8 w-8 rounded-full"
              />
            </Button>
            <div className="flex flex-col">
              <span className="text-sm font-medium">Sophie A.</span>
              <span className="text-xs text-muted-foreground">Product Manager</span>
            </div>
            <ThemeToggle />
          </div>
        )}
      </div>
    </aside>
  );
}