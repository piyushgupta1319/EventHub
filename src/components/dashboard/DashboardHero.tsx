import {
  CalendarDays,
  Bell,
  Trophy,
} from "lucide-react";

interface DashboardHeroProps {
  userName?: string;
  totalEvents?: number;
  registeredEvents?: number;
  alerts?: number;
  certificates?: number;
}

export default function DashboardHero({
  userName,
  totalEvents = 0,
  registeredEvents = 0,
  alerts = 0,
  certificates = 0,
}: DashboardHeroProps) {
  return (
    <section className="bg-white border border-slate-200 rounded-3xl shadow-sm p-10">

      <div className="flex flex-col lg:flex-row justify-between gap-10">

        {/* Left Side */}
        <div>

          <span className="
            inline-flex
            items-center
            gap-2
            px-4
            py-2
            rounded-full
            bg-blue-50
            text-blue-700
            text-sm
            font-semibold
          ">
            Dashboard
          </span>

          <h1 className="
            mt-6
            text-5xl
            font-bold
            text-slate-900
            leading-tight
          ">
            Welcome back,
            <br />
            {userName ?? "User"} 👋
          </h1>

          <p className="
            mt-5
            text-lg
            text-slate-500
            max-w-2xl
            leading-8
          ">
            Manage your events, registrations, notifications and
            certificates from one place.
          </p>

        </div>

        {/* Right Side Stats */}
        <div className="grid grid-cols-3 gap-5 min-w-fit">

          <div className="
            bg-slate-50
            rounded-3xl
            p-6
            border
            border-slate-200
            text-center
          ">
            <CalendarDays
              size={26}
              className="mx-auto text-blue-600 mb-3"
            />

            <h3 className="text-3xl font-bold text-slate-900">
              {totalEvents}
            </h3>

            <p className="text-sm text-slate-500 mt-1">
              Events
            </p>
          </div>

          <div className="
            bg-slate-50
            rounded-3xl
            p-6
            border
            border-slate-200
            text-center
          ">
            <Bell
              size={26}
              className="mx-auto text-orange-600 mb-3"
            />

            <h3 className="text-3xl font-bold text-slate-900">
              {alerts}
            </h3>

            <p className="text-sm text-slate-500 mt-1">
              Alerts
            </p>
          </div>

          <div className="
            bg-slate-50
            rounded-3xl
            p-6
            border
            border-slate-200
            text-center
          ">
            <Trophy
              size={26}
              className="mx-auto text-purple-600 mb-3"
            />

            <h3 className="text-3xl font-bold text-slate-900">
              {certificates}
            </h3>

            <p className="text-sm text-slate-500 mt-1">
              Certificates
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}