import {
  Bell,
  Award,
  Laptop,
} from "lucide-react";

interface Activity {
  title: string;
  description: string;
  time: string;
  icon: typeof Laptop;
  color: string;
}

interface RecentActivitiesProps {
  activities: Activity[];
}

export default function RecentActivities({ activities }: RecentActivitiesProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-8">

      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900">
          Recent Activities
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          Latest updates from your account
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">

        {activities.map((activity, index) => {
          const Icon = activity.icon;

          return (
            <div
              key={index}
              className="relative flex gap-5 pb-8"
            >

              {/* Vertical Line */}
              {index !== activities.length - 1 && (
                <div className="absolute left-6 top-14 w-[2px] h-full bg-slate-200" />
              )}

              {/* Icon */}
              <div
                className={`
                  w-12 h-12 rounded-2xl flex items-center justify-center
                  ${activity.color}
                `}
              >
                <Icon size={20} />
              </div>

              {/* Content */}
              <div className="flex-1">

                <div className="flex items-center justify-between">

                  <h3 className="font-semibold text-slate-900">
                    {activity.title}
                  </h3>

                  <span className="text-xs text-slate-400">
                    {activity.time}
                  </span>

                </div>

                <p className="text-sm text-slate-500 mt-2 leading-6">
                  {activity.description}
                </p>

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}