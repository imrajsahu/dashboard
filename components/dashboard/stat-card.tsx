"use client";

import { Card, CardContent } from "@/components/ui/card";
import { DashboardStat } from "@/lib/types";
import { cn } from "@/lib/utils";
import { ArrowDown, ArrowUp } from "lucide-react";
import * as Icons from "lucide-react";
import { DivideIcon as LucideIcon } from "lucide-react";

interface StatCardProps {
  stat: DashboardStat;
  className?: string;
}

export function StatCard({ stat, className }: StatCardProps) {
  const IconComponent = (Icons as Record<string, LucideIcon>)[stat.icon] || Icons.Activity;
  
  return (
    <Card className={cn("overflow-hidden transition-all duration-200 hover:shadow-md", className)}>
      <CardContent className="p-4 sm:p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </p>
            <h3 className="mt-1 text-xl sm:text-2xl font-bold tracking-tight">
              {stat.value}
            </h3>
          </div>
          <div className={cn(
            "flex h-12 w-12 items-center justify-center rounded-full",
            "bg-primary/10 text-primary"
          )}>
            <IconComponent className="h-6 w-6" />
          </div>
        </div>
        <div className="mt-4 flex items-center">
          {stat.change > 0 ? (
            <div className="flex items-center text-sm text-green-500">
              <ArrowUp className="mr-1 h-4 w-4" />
              <span>{Math.abs(stat.change)}%</span>
            </div>
          ) : (
            <div className="flex items-center text-sm text-red-500">
              <ArrowDown className="mr-1 h-4 w-4" />
              <span>{Math.abs(stat.change)}%</span>
            </div>
          )}
          <span className="ml-1 text-xs text-muted-foreground">vs. previous period</span>
        </div>
      </CardContent>
    </Card>
  );
}