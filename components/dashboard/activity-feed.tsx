"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { activityData } from "@/lib/data";
import { CheckIcon, ClockIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

export function ActivityFeed() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest actions and updates</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] sm:h-[400px] pr-4">
          <div className="relative">
            <div className="absolute bottom-0 left-[9px] top-2 w-[2px] bg-muted"></div>
            <div className="space-y-6">
              {activityData.map((activity) => (
                <div key={activity.id} className="flex gap-4">
                  <div className="relative z-10 flex h-5 w-5 items-center justify-center rounded-full border border-muted bg-background">
                    {activity.status === "completed" ? (
                      <CheckIcon className="h-3 w-3 text-green-500" />
                    ) : activity.status === "failed" ? (
                      <XCircleIcon className="h-3 w-3 text-red-500" />
                    ) : activity.status === "pending" ? (
                      <ClockIcon className="h-3 w-3 text-yellow-500" />
                    ) : (
                      <div className="h-2 w-2 rounded-full bg-muted-foreground" />
                    )}
                  </div>
                  <div className="flex-1 pt-0.5">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                      <img
                        src={activity.user.avatar}
                        alt={activity.user.name}
                        className="h-6 w-6 rounded-full object-cover"
                      />
                      <p className="text-xs sm:text-sm font-medium leading-none">
                        {activity.user.name}
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {activity.action}
                      </p>
                      <Badge variant="outline" className="text-xs">
                        {activity.target}
                      </Badge>
                    </div>
                    <p className="mt-1.5 text-xs text-muted-foreground">
                      {activity.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}