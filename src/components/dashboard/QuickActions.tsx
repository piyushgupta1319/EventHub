import Link from 'next/link';
import { auth } from '@/auth';
import {
  CalendarDays,
  PlusCircle,
  ClipboardList,
  Award,
  ArrowUpRight,
} from 'lucide-react';

const actions = [
  {
    title: 'Browse Events',
    description: 'Explore upcoming events and activities',
    href: '/events',
    icon: CalendarDays,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'Create Event',
    description: 'Create and manage new events',
    href: '/events/create',
    icon: PlusCircle,
    color: 'bg-purple-50 text-purple-600',
    adminOnly: true,
  },
  {
    title: 'Registrations',
    description: 'Manage your registered events',
    href: '/dashboard/my-events',
    icon: ClipboardList,
    color: 'bg-green-50 text-green-600',
  },
  {
    title: 'Certificates',
    description: 'Access earned certificates',
    href: '/certificates',
    icon: Award,
    color: 'bg-orange-50 text-orange-600',
  },
];

export default async function QuickActions() {
  const session = await auth();
  const isAdmin = session?.user?.role?.toString().toUpperCase() === 'ADMIN';

  return (
    <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900">Quick Actions</h2>
        <p className="text-sm text-slate-500 mt-1">
          Shortcuts for your most frequently used actions
        </p>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        {actions
          .filter((item) => !item.adminOnly || isAdmin)
          .map((item, index) => {
            const Icon = item.icon;

            return (
              <Link
                key={index}
                href={item.href}
                className="
                  group
                  border border-slate-200
                  rounded-3xl
                  p-6
                  bg-white
                  hover:border-slate-300
                  hover:shadow-lg
                  transition-all duration-300
                "
              >
                <div className="flex items-center justify-between mb-8">
                  <div
                    className={`
                      h-14 w-14 rounded-2xl
                      flex items-center justify-center
                      ${item.color}
                    `}
                  >
                    <Icon size={26} />
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="
                      text-slate-400
                      group-hover:text-blue-600
                      transition
                    "
                  />
                </div>

                <h3 className="font-bold text-lg text-slate-900 mb-3 group-hover:text-blue-600 transition">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-500 leading-6">
                  {item.description}
                </p>
              </Link>
            );
          })}
      </div>
    </div>
  );
}
