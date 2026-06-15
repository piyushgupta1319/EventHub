'use client';

import { useRouter } from 'next/navigation';
import { Users, TrendingUp, Activity } from 'lucide-react';
import Sidebar from '@/components/Sidebar';
import DashboardStats from '@/components/DashboardStats';

export default function AdminUsersPage() {
  const router = useRouter();

  const sidebarItems = [
    { label: 'Dashboard', href: '/admin', icon: 'BarChart3' },
    { label: 'Events', href: '/admin/events', icon: 'Calendar' },
    { label: 'Users', href: '/admin/users', icon: 'Users', isActive: true },
    { label: 'Analytics', href: '/admin/analytics', icon: 'TrendingUp' },
    { label: 'Announcements', href: '/admin/announcements', icon: 'Bell' },
    { label: 'Participants', href: '/admin/participants', icon: 'Users' },
    { label: 'Reports', href: '/admin/reports', icon: 'FileText' },
    { label: 'Settings', href: '/admin/settings', icon: 'Settings' },
  ];

  const statCards = [
    { title: 'Total Users', value: '1,542', icon: Users, change: '+45', changeText: 'this month', color: 'blue' as const },
    { title: 'Active Today', value: '342', icon: Activity, change: '+12', changeText: 'from yesterday', color: 'green' as const },
    { title: 'New Users', value: '127', icon: TrendingUp, change: '+28', changeText: 'this month', color: 'purple' as const },
    { title: 'Last 7 Days', value: '89', icon: Users, change: '-5', changeText: 'from last week', color: 'orange' as const }
  ];

  return (
    <div className="flex min-h-screen">
      <Sidebar items={sidebarItems} onLogout={() => router.push('/')} />

      <div className="flex-1 bg-gradient-to-b from-slate-50 to-slate-100">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold mb-2">Manage Users</h1>
            <p className="text-blue-100">View and manage all registered users</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {statCards.map((stat) => (
              <DashboardStats key={stat.title} {...stat} />
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="text-6xl mb-4">👥</div>
            <p className="text-gray-600">User management interface ready for database connection</p>
          </div>
        </div>
      </div>
    </div>
  );
}
