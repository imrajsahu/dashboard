"use client";

import { Card, CardContent } from "@/components/ui/card";
import { userData } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ArrowRightIcon, XMarkIcon } from "@heroicons/react/24/outline";

export function WelcomeBanner() {
  const [dismissed, setDismissed] = useState(false);
  
  if (dismissed) {
    return null;
  }

  return (
    <Card className="col-span-full overflow-hidden bg-gradient-to-r from-primary/10 via-primary/5 to-background border-primary/20">
      <CardContent className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 items-center p-4 sm:p-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Welcome back, {userData.name}!</h2>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 rounded-full" 
              onClick={() => setDismissed(true)}
            >
              <XMarkIcon className="h-4 w-4" />
              <span className="sr-only">Dismiss</span>
            </Button>
          </div>
          <p className="text-sm sm:text-base text-muted-foreground">
            Your dashboard has been updated. Explore the new features and improvements we've added to enhance your experience.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            <Button className="gap-2 group">
              Take a quick tour
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline">View what's new</Button>
          </div>
        </div>
        <div className="hidden lg:block relative">
          <img 
            src="https://images.pexels.com/photos/7413915/pexels-photo-7413915.jpeg?auto=compress&cs=tinysrgb&w=800" 
            alt="Dashboard illustration" 
            className="h-full w-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </CardContent>
    </Card>
  );
}