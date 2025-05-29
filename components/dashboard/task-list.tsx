"use client";

import { tasks } from "@/lib/data";
import { TaskItem } from "@/lib/types";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Circle, Clock } from "lucide-react";

export function TaskList() {
  const [taskItems, setTaskItems] = useState<TaskItem[]>(tasks);

  const handleToggleStatus = (taskId: string) => {
    setTaskItems(
      taskItems.map((task) =>
        task.id === taskId
          ? {
              ...task,
              status:
                task.status === "completed"
                  ? "todo"
                  : task.status === "todo"
                  ? "in-progress"
                  : "completed",
            }
          : task
      )
    );
  };

  const statusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="h-4 w-4 text-green-500" />;
      case "in-progress":
        return <Clock className="h-4 w-4 text-yellow-500" />;
      default:
        return <Circle className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const priorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "text-red-500 border-red-200";
      case "medium":
        return "text-yellow-500 border-yellow-200";
      case "low":
        return "text-green-500 border-green-200";
      default:
        return "text-muted-foreground border-muted";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Tasks</CardTitle>
        <CardDescription>Manage your upcoming tasks</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all" className="space-y-3 sm:space-y-4">
          <TabsList className="w-full justify-start overflow-x-auto">
            <TabsTrigger value="all">All Tasks</TabsTrigger>
            <TabsTrigger value="todo">To Do</TabsTrigger>
            <TabsTrigger value="in-progress">In Progress</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="space-y-2 sm:space-y-3">
            {taskItems.map((task) => (
              <TaskCard 
                key={task.id} 
                task={task} 
                onClick={() => handleToggleStatus(task.id)} 
                statusIcon={statusIcon}
                priorityColor={priorityColor}
              />
            ))}
          </TabsContent>
          <TabsContent value="todo" className="space-y-2">
            {taskItems
              .filter((task) => task.status === "todo")
              .map((task) => (
                <TaskCard 
                  key={task.id} 
                  task={task} 
                  onClick={() => handleToggleStatus(task.id)} 
                  statusIcon={statusIcon}
                  priorityColor={priorityColor}
                />
              ))}
          </TabsContent>
          <TabsContent value="in-progress" className="space-y-2">
            {taskItems
              .filter((task) => task.status === "in-progress")
              .map((task) => (
                <TaskCard 
                  key={task.id} 
                  task={task} 
                  onClick={() => handleToggleStatus(task.id)} 
                  statusIcon={statusIcon}
                  priorityColor={priorityColor}
                />
              ))}
          </TabsContent>
          <TabsContent value="completed" className="space-y-2">
            {taskItems
              .filter((task) => task.status === "completed")
              .map((task) => (
                <TaskCard 
                  key={task.id} 
                  task={task} 
                  onClick={() => handleToggleStatus(task.id)} 
                  statusIcon={statusIcon}
                  priorityColor={priorityColor}
                />
              ))}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}

interface TaskCardProps {
  task: TaskItem;
  onClick: () => void;
  statusIcon: (status: string) => JSX.Element;
  priorityColor: (priority: string) => string;
}

function TaskCard({ task, onClick, statusIcon, priorityColor }: TaskCardProps) {
  return (
    <div
      className={cn(
        "flex cursor-pointer items-start justify-between rounded-md border p-3 transition-all hover:bg-accent",
        task.status === "completed" && "bg-muted/50"
      )}
      onClick={onClick}
    >
      <div className="flex gap-2 sm:gap-3">
        <div className="mt-0.5">{statusIcon(task.status)}</div>
        <div>
          <p
            className={cn(
              "text-xs sm:text-sm font-medium",
              task.status === "completed" && "text-muted-foreground line-through"
            )}
          >
            {task.title}
          </p>
          <div className="mt-1 flex flex-wrap items-center gap-1.5 sm:gap-2">
            <Badge
              variant="outline"
              className={cn("text-xs", priorityColor(task.priority))}
            >
              {task.priority}
            </Badge>
            <span className="text-[10px] sm:text-xs text-muted-foreground">
              Due {new Date(task.dueDate).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
      {task.assignee && (
        <img
          src={task.assignee.avatar}
          alt={task.assignee.name}
          className="h-8 w-8 rounded-full"
          title={task.assignee.name}
        />
      )}
    </div>
  );
}