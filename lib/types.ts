export interface NavigationItem {
  title: string;
  href: string;
  icon: string;
  active?: boolean;
  submenu?: NavigationItem[];
}

export interface DashboardStat {
  title: string;
  value: string | number;
  change: number;
  icon: string;
}

export interface Activity {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  action: string;
  target: string;
  date: string;
  status?: 'completed' | 'pending' | 'failed';
}

export interface ChartData {
  name: string;
  value1: number;
  value2?: number;
}

export interface TaskItem {
  id: string;
  title: string;
  dueDate: string;
  priority: 'low' | 'medium' | 'high';
  status: 'todo' | 'in-progress' | 'completed';
  assignee?: {
    name: string;
    avatar: string;
  };
}

export interface Notification {
  id: string;
  title: string;
  description: string;
  time: string;
  read: boolean;
  type: 'info' | 'warning' | 'success' | 'error';
}