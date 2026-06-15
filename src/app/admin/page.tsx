import { prisma } from "@/lib/prisma";
import {
  Calendar,
  Users,
  ClipboardList,
  Bell,
} from "lucide-react";
import DashboardStats from "@/components/DashboardStats";

export default async function AdminPage() {
  const totalEvents = await prisma.event.count();

  const totalUsers = await prisma.user.count();

  const totalRegistrations =
    await prisma.registration.count();

  const totalAnnouncements =
    await prisma.announcement.count();

  return (
    <div className="min-h-screen bg-slate-100 p-10">

      <h1 className="text-4xl font-bold mb-8">
        Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        <DashboardStats
          title="Events"
          value={totalEvents}
          icon={Calendar}
          color="blue"
        />

        <DashboardStats
          title="Users"
          value={totalUsers}
          icon={Users}
          color="green"
        />

        <DashboardStats
          title="Registrations"
          value={totalRegistrations}
          icon={ClipboardList}
          color="purple"
        />

        <DashboardStats
          title="Announcements"
          value={totalAnnouncements}
          icon={Bell}
          color="orange"
        />

      </div>
    </div>
  );
}