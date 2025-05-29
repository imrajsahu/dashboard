import { Activity, ChartData, DashboardStat, NavigationItem, Notification, TaskItem } from './types';

export const navigationItems: NavigationItem[] = [
  {
    title: 'Dashboard',
    href: '/',
    icon: 'Squares2X2Icon',
    active: true,
  },
  {
    title: 'Analytics',
    href: '/analytics',
    icon: 'ChartBarIcon',
  },
  {
    title: 'Customers',
    href: '/customers',
    icon: 'UsersIcon',
  },
  {
    title: 'Projects',
    href: '/projects',
    icon: 'FolderIcon',
  },
  {
    title: 'Tasks',
    href: '/tasks',
    icon: 'CheckCircleIcon',
  },
  {
    title: 'Calendar',
    href: '/calendar',
    icon: 'CalendarIcon',
  },
  {
    title: 'Messages',
    href: '/messages',
    icon: 'ChatBubbleLeftIcon',
  },
  {
    title: 'Settings',
    href: '/settings',
    icon: 'Cog6ToothIcon',
    submenu: [
      {
        title: 'Account',
        href: '/settings/account',
        icon: 'UserIcon',
      },
      {
        title: 'Notifications',
        href: '/settings/notifications',
        icon: 'BellIcon',
      },
      {
        title: 'Security',
        href: '/settings/security',
        icon: 'ShieldCheckIcon',
      },
    ],
  },
];

export const dashboardStats: DashboardStat[] = [
  {
    title: 'Total Revenue',
    value: '$45,231.89',
    change: 20.1,
    icon: 'dollar-sign',
  },
  {
    title: 'New Customers',
    value: 3891,
    change: 10.5,
    icon: 'user-plus',
  },
  {
    title: 'Active Projects',
    value: 42,
    change: -5.2,
    icon: 'briefcase',
  },
  {
    title: 'Satisfaction',
    value: '95%',
    change: 2.3,
    icon: 'smile',
  },
];

export const revenueData: ChartData[] = [
  { name: 'Jan', value1: 4000, value2: 2400 },
  { name: 'Feb', value1: 3000, value2: 1398 },
  { name: 'Mar', value1: 5000, value2: 3800 },
  { name: 'Apr', value1: 8000, value2: 6000 },
  { name: 'May', value1: 6000, value2: 4500 },
  { name: 'Jun', value1: 9000, value2: 7000 },
  { name: 'Jul', value1: 8400, value2: 6300 },
];

export const activityData: Activity[] = [
  {
    id: '1',
    user: {
      name: 'Alex Morgan',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    action: 'completed task',
    target: 'Q2 Marketing Strategy',
    date: '20 minutes ago',
    status: 'completed',
  },
  {
    id: '2',
    user: {
      name: 'Ryan Lee',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    action: 'commented on',
    target: 'Customer Feedback Survey',
    date: '1 hour ago',
  },
  {
    id: '3',
    user: {
      name: 'Sarah Wilson',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    action: 'created project',
    target: 'Website Redesign',
    date: '2 hours ago',
    status: 'completed',
  },
  {
    id: '4',
    user: {
      name: 'David Chen',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    action: 'assigned task',
    target: 'Data Migration Plan',
    date: 'Yesterday at 4:30 PM',
    status: 'pending',
  },
  {
    id: '5',
    user: {
      name: 'Jessica Taylor',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    action: 'deployed',
    target: 'API Updates v2.3',
    date: 'Yesterday at 2:15 PM',
    status: 'failed',
  },
];

export const tasks: TaskItem[] = [
  {
    id: '1',
    title: 'Review Q2 performance metrics',
    dueDate: '2025-07-15',
    priority: 'high',
    status: 'todo',
    assignee: {
      name: 'Alex Morgan',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
  },
  {
    id: '2',
    title: 'Prepare client presentation',
    dueDate: '2025-07-12',
    priority: 'medium',
    status: 'in-progress',
    assignee: {
      name: 'Sarah Wilson',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
  },
  {
    id: '3',
    title: 'Update documentation',
    dueDate: '2025-07-10',
    priority: 'low',
    status: 'completed',
    assignee: {
      name: 'Ryan Lee',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
  },
  {
    id: '4',
    title: 'Team weekly sync',
    dueDate: '2025-07-09',
    priority: 'medium',
    status: 'todo',
    assignee: {
      name: 'Jessica Taylor',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
  },
];

export const notifications: Notification[] = [
  {
    id: '1',
    title: 'New message received',
    description: 'You have a new message from Alex Morgan',
    time: '10 minutes ago',
    read: false,
    type: 'info',
  },
  {
    id: '2',
    title: 'Meeting reminder',
    description: 'Your meeting with the design team starts in 30 minutes',
    time: '25 minutes ago',
    read: false,
    type: 'warning',
  },
  {
    id: '3',
    title: 'Task completed',
    description: 'Sarah Wilson completed the Website Redesign task',
    time: '1 hour ago',
    read: true,
    type: 'success',
  },
  {
    id: '4',
    title: 'System update',
    description: 'System update scheduled for tonight at 2:00 AM',
    time: '5 hours ago',
    read: true,
    type: 'info',
  },
  {
    id: '5',
    title: 'Project deadline approaching',
    description: 'The Marketing Campaign project is due in 2 days',
    time: 'Yesterday',
    read: true,
    type: 'error',
  },
];

export const userData = {
  name: 'Sophie Anderson',
  email: 'sophie.anderson@example.com',
  role: 'Product Manager',
  avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
  status: 'online',
};