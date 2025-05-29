"use client";

import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { Search } from "./search";
import { NotificationsDropdown } from "./notifications-dropdown";
import { UserDropdown } from "./user-dropdown";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Sidebar } from "@/components/sidebar/sidebar";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getPageTitle = () => {
    if (pathname === "/") return "Dashboard";
    
    // Convert pathname to title
    return pathname
      .split("/")
      .filter(Boolean)
      .map((segment) => 
        segment.charAt(0).toUpperCase() + segment.slice(1)
      )
      .join(" • ");
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-background/50 backdrop-blur-md transition-all border-b",
        scrolled && "shadow-sm border-muted",
        className
      )}
    >
      <div className="container h-16">
        <div className="flex h-full items-center justify-between">
          <div className="flex items-center gap-3">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0 w-[240px] h-full">
                <Sidebar className="border-none shadow-none" />
              </SheetContent>
            </Sheet>
            <div>
              <h1 className="text-lg sm:text-xl font-semibold tracking-tight">{getPageTitle()}</h1>
              <p className="hidden sm:block text-sm text-muted-foreground">Welcome back to your dashboard</p>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <Search />
            <NotificationsDropdown />
            <ThemeToggle />
            <UserDropdown />
          </div>
        </div>
      </div>
    </header>
  );
}