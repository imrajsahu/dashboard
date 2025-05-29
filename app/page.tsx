import { Header } from '@/components/header/header';
import { Sidebar } from '@/components/sidebar/sidebar';
import { WelcomeBanner } from '@/components/dashboard/welcome-banner';
import { RevenueChart } from '@/components/dashboard/revenue-chart';
import { ActivityFeed } from '@/components/dashboard/activity-feed';
import { StatCard } from '@/components/dashboard/stat-card';
import { dashboardStats } from '@/lib/data';
import { TaskList } from '@/components/dashboard/task-list';
import { QuickActions } from '@/components/dashboard/quick-actions';
import { Toaster } from '@/components/ui/toaster';

export default function Dashboard() {
  return (
    <div className="flex h-[100dvh] bg-muted/10">
      <Sidebar className="hidden md:flex flex-shrink-0" />
      <div className="flex w-full flex-1 flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto">
          <div className="container py-4 sm:py-6 lg:py-8">
            <div className="grid gap-4 sm:gap-6 lg:gap-8">
              <WelcomeBanner />
              
              <div className="grid gap-3 sm:gap-4 grid-cols-2 lg:grid-cols-4">
                {dashboardStats.map((stat, index) => (
                  <StatCard key={index} stat={stat} />
                ))}
              </div>
              
              <div className="grid gap-3 sm:gap-4">
                <QuickActions />
              </div>
              
              <div className="grid gap-3 sm:gap-4">
                <RevenueChart />
              </div>
              
              <div className="grid gap-3 sm:gap-4 grid-cols-1 lg:grid-cols-3">
                <TaskList className="lg:col-span-2" />
                <ActivityFeed />
              </div>
            </div>
          </div>
        </main>
        <Toaster />
      </div>
    </div>
  );
}