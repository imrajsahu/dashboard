"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { NavigationItem } from "@/lib/types";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";
import * as Icons from "@heroicons/react/24/outline";

interface SidebarItemProps {
  item: NavigationItem;
  collapsed: boolean;
}

export function SidebarItem({ item, collapsed }: SidebarItemProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = item.href === pathname || pathname.startsWith(item.href);

  const IconComponent = (Icons as any)[item.icon] || Icons.CircleStackIcon;
  
  if (item.submenu) {
    return (
      <Collapsible
        open={collapsed ? false : open}
        onOpenChange={collapsed ? undefined : setOpen}
        className="w-full"
      >
        <CollapsibleTrigger asChild>
          <Button
            variant="ghost"
            className={cn(
              "w-full justify-start gap-2 px-3 py-2",
              open && "bg-muted",
              collapsed && "justify-center px-0"
            )}
          >
            <IconComponent size={20} />
            {!collapsed && <span>{item.title}</span>}
            {!collapsed && (
              <ChevronDownIcon
                size={16}
                className={cn("ml-auto transition-transform", open && "rotate-180")}
              />
            )}
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="ml-4 mt-1">
          {!collapsed &&
            item.submenu.map((subItem) => {
              const SubIconComponent = (Icons as Record<string, LucideIcon>)[subItem.icon] || Icons.Circle;
              return (
                <Link
                  key={subItem.href}
                  href={subItem.href}
                  className="block"
                >
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-start gap-2 px-3 py-1.5 mb-1",
                      subItem.href === pathname && "bg-muted"
                    )}
                  >
                    <SubIconComponent size={16} />
                    <span>{subItem.title}</span>
                  </Button>
                </Link>
              );
            })}
        </CollapsibleContent>
      </Collapsible>
    );
  }

  return (
    <Link
      href={item.href}
      className={cn(
        "flex items-center rounded-md transition-colors",
        collapsed ? "justify-center px-0" : "justify-start px-3",
        isActive ? "bg-muted text-foreground" : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
      )}
    >
      <Button
        variant="ghost"
        className={cn(
          "w-full justify-start gap-2 py-2",
          collapsed && "justify-center px-0",
          isActive && "bg-muted"
        )}
      >
        <IconComponent size={20} />
        {!collapsed && <span>{item.title}</span>}
      </Button>
    </Link>
  );
}