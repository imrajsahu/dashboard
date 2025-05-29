"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

interface SearchResult {
  title: string;
  href: string;
  description?: string;
}

export function Search() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Mock search results
  const searchResults: SearchResult[] = [
    {
      title: "Dashboard Overview",
      href: "/",
      description: "Main dashboard with key metrics and widgets",
    },
    {
      title: "Analytics Reports",
      href: "/analytics",
      description: "Detailed analytics and performance reports",
    },
    {
      title: "Customer Management",
      href: "/customers",
      description: "View and manage customer accounts",
    },
    {
      title: "Project Tracking",
      href: "/projects",
      description: "Track project progress and resources",
    },
    {
      title: "Account Settings",
      href: "/settings/account",
      description: "Manage your account preferences",
    },
  ];

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  useEffect(() => {
    if (open) setOpen(false);
  }, [pathname]);

  return (
    <>
      <Button
        variant="outline"
        className={cn(
          "relative h-9 w-9 p-0 xl:h-10 xl:w-64 xl:justify-start xl:px-3 xl:py-2",
        )}
        onClick={() => setOpen(true)}
      >
        <MagnifyingGlassIcon className="h-4 w-4 xl:mr-2" aria-hidden="true" />
        <span className="hidden xl:inline-flex">Search...</span>
        <span className="sr-only">Search</span>
        <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-xs font-medium opacity-100 xl:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <DialogHeader>
          <DialogTitle>Search</DialogTitle>
        </DialogHeader>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            {searchResults.map((result) => (
              <CommandItem
                key={result.href}
                onSelect={() => {
                  setOpen(false);
                  router.push(result.href);
                }}
              >
                {result.title}
                {result.description && (
                  <div className="text-xs text-muted-foreground">
                    {result.description}
                  </div>
                )}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}