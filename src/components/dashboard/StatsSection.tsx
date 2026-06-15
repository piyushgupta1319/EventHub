import {
  Calendar,
  CheckCircle,
  Clock,
} from "lucide-react";

import DashboardStats from "../DashboardStats";
interface StatsSectionProps {
  totalEvents: number;
  registeredEvents: number;
  notifications: number;
  certificates: number;
}

export default function StatsSection({
  totalEvents,
  registeredEvents,
  notifications,
  certificates,
}: StatsSectionProps) {
  const STAT_CARDS = [
    {
      title: "Total Events",
      value: totalEvents,
      icon: Calendar,
      change: 5,
      changeText: "this month",
      color: "blue" as const,
    },
    {
      title: "Registered Events",
      value: registeredEvents,
      icon: CheckCircle,
      change: undefined,
      changeText: "this week",
      color: "green" as const,
    },
    {
      title: "Notifications",
      value: notifications,
      icon: Clock,
      change: undefined,
      changeText: "pending",
      color: "orange" as const,
    },
    {
      title: "Certificates",
      value: certificates,
      icon: Calendar,
      change: undefined,
      changeText: "earned",
      color: "purple" as const,
    },
  ];

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {STAT_CARDS.map((stat) => (
        <DashboardStats
          key={stat.title}
          title={stat.title}
          value={stat.value}
          icon={stat.icon}
          change={stat.change}
          changeText={stat.changeText}
          color={stat.color}
        />
      ))}
    </div>
  );
}