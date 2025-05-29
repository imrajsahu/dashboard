"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, FileText, Users, Calendar, MessageSquare, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface QuickActionProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  className?: string;
}

function QuickAction({ icon, label, onClick, className }: QuickActionProps) {
  return (
    <Button
      variant="outline"
      className={cn(
        "h-auto flex-col gap-1 p-3 hover:bg-muted/50",
        className
      )}
      onClick={onClick}
    >
      <div className="h-8 w-8 flex items-center justify-center">{icon}</div>
      <span className="text-xs font-medium">{label}</span>
    </Button>
  );
}

export function QuickActions() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-2">
          <QuickAction
            icon={<Plus className="h-5 w-5 text-blue-500" />}
            label="New Project"
            className="hover:border-blue-200 hover:bg-blue-50 dark:hover:bg-blue-950/30"
          />
          <QuickAction
            icon={<FileText className="h-5 w-5 text-teal-500" />}
            label="Create Doc"
            className="hover:border-teal-200 hover:bg-teal-50 dark:hover:bg-teal-950/30"
          />
          <QuickAction
            icon={<Users className="h-5 w-5 text-violet-500" />}
            label="Add User"
            className="hover:border-violet-200 hover:bg-violet-50 dark:hover:bg-violet-950/30"
          />
          <QuickAction
            icon={<Calendar className="h-5 w-5 text-orange-500" />}
            label="Schedule"
            className="hover:border-orange-200 hover:bg-orange-50 dark:hover:bg-orange-950/30"
          />
          <QuickAction
            icon={<MessageSquare className="h-5 w-5 text-pink-500" />}
            label="Message"
            className="hover:border-pink-200 hover:bg-pink-50 dark:hover:bg-pink-950/30"
          />
        </div>
      </CardContent>
    </Card>
  );
}