import DashboardHero from "@/components/dashboard/DashboardHero";
import StatsSection from "@/components/dashboard/StatsSection";
import QuickActions from "@/components/dashboard/QuickActions";
import UpcomingEvents from "@/components/dashboard/UpcomingEvents";
import RecentActivities from "@/components/dashboard/RecentActivities";
import EventCategories from "@/components/dashboard/EventCategories";
import ParticipationStats from "@/components/dashboard/ParticipationStats";
import EngagementOverview from "@/components/dashboard/EngagementOverview";
import { Bell, Laptop } from "lucide-react";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

function formatDate(date: Date) {
  return date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default async function DashboardPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/auth/login");
  }
  const userId = session.user.id as string;
  const now = new Date();

  const [totalEvents, registeredEvents, pendingNotifications, certificates, upcomingRegs] = await Promise.all([
    prisma.event.count(),
    prisma.registration.count({ where: { userId } }),
    prisma.registration.count({ where: { userId, status: "pending" } }),
    prisma.registration.count({
      where: {
        userId,
        event: {
          eventDate: { lt: now },
        },
      },
    }),
    prisma.registration.findMany({
      where: {
        userId,
        event: {
          eventDate: { gte: now },
        },
      },
      include: {
        event: true,
      },
      orderBy: {
        registeredAt: "desc",
      },
      take: 3,
    }),
  ]);

  // Category counts
  const categoryGroups = await prisma.event.groupBy({
    by: ["category"],
    _count: { _all: true },
  });

  const categories = categoryGroups.map((g) => ({
    name: g.category,
    value: g._count._all,
  }));

  // Participation metrics (platform-wide)
  const [totalRegistrationsAll, confirmedRegistrations, completedEvents] = await Promise.all([
    prisma.registration.count(),
    prisma.registration.count({ where: { status: "confirmed" } }),
    prisma.event.count({ where: { eventDate: { lt: now } } }),
  ]);

  const attendanceRate = totalRegistrationsAll === 0 ? 0 : Math.round((confirmedRegistrations / totalRegistrationsAll) * 100);
  const eventCompletion = totalEvents === 0 ? 0 : Math.round((completedEvents / totalEvents) * 100);

  // Engagement metrics for the current user
  const recentRegs = await prisma.registration.findMany({
    where: { userId, registeredAt: { gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) } },
    orderBy: { registeredAt: "desc" },
  });

  const activityStreak = Math.min(recentRegs.length, 30);

  // Average feedback rating (platform)
  const ratingAgg = await prisma.feedback.aggregate({ _avg: { rating: true } });
  const userRating = ratingAgg._avg.rating ? Number(ratingAgg._avg.rating) : 0;

  const upcomingEvents = upcomingRegs.map((registration) => ({
    id: registration.event.id,
    title: registration.event.title,
    date: formatDate(registration.event.eventDate),
    category: registration.event.category,
    status:
      registration.status === "pending"
        ? ("pending" as const)
        : ("registered" as const),
  }));

  const activities = upcomingRegs.map((registration) => ({
    title: `Registered for ${registration.event.title}`,
    description: `Your seat is confirmed for ${registration.event.title}.`,
    time: formatDate(registration.registeredAt),
    icon: Laptop,
    color: "bg-blue-50 text-blue-600",
  }));

  if (activities.length === 0) {
    activities.push({
      title: "No recent activity yet",
      description: "Register for an event to see activity updates here.",
      time: "Just now",
      icon: Bell,
      color: "bg-slate-100 text-slate-600",
    });
  }

  return (
    <div className="min-h-screen bg-slate-100">

      <div className="max-w-7xl mx-auto px-6 py-10 space-y-10">

        <DashboardHero
          userName={session.user.name ?? undefined}
          totalEvents={totalEvents}
          registeredEvents={registeredEvents}
          alerts={pendingNotifications}
          certificates={certificates}
        />

        <StatsSection
          totalEvents={totalEvents}
          registeredEvents={registeredEvents}
          notifications={pendingNotifications}
          certificates={certificates}
        />

        <QuickActions />

        <div className="grid lg:grid-cols-2 gap-10">

          <UpcomingEvents events={upcomingEvents} />

          <RecentActivities activities={activities} />

        </div>

        <div className="grid lg:grid-cols-3 gap-10">

          <EventCategories categories={categories} />

          <ParticipationStats attendanceRate={attendanceRate} eventCompletion={eventCompletion} />

          <EngagementOverview activityStreak={activityStreak} certificatesEarned={certificates} userRating={userRating} />

        </div>

      </div>

    </div>
  );
}