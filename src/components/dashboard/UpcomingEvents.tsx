import Link from "next/link";
import { Calendar, ArrowUpRight } from "lucide-react";

interface UpcomingEvent {
  id: string;
  title: string;
  date: string;
  category: string;
  status: "registered" | "pending";
}

interface UpcomingEventsProps {
  events: UpcomingEvent[];
}

export default function UpcomingEvents({ events }: UpcomingEventsProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-8">

      {/* Header */}
      <div className="flex items-center justify-between mb-8">

        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Upcoming Events
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            Your next scheduled activities
          </p>
        </div>

        <Link
          href="/events"
          className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition"
        >
          View All
        </Link>

      </div>

      {/* Events */}
      <div className="space-y-4">

        {events.map((event) => (

          <div
            key={event.id}
            className="
            group
            border border-slate-200
            rounded-2xl
            px-6 py-5
            hover:border-slate-300
            hover:shadow-md
            transition-all duration-300
            "
          >

            <div className="flex items-start justify-between">

              <div>

                <h3 className="font-semibold text-slate-900 text-lg group-hover:text-blue-600 transition">

                  {event.title}

                </h3>

                <div className="flex items-center gap-2 text-slate-500 text-sm mt-3">

                  <Calendar size={15} />

                  {event.date}

                </div>

              </div>

              <ArrowUpRight
                size={18}
                className="text-slate-400 group-hover:text-blue-600 transition"
              />

            </div>

            <div className="flex items-center justify-between mt-5">

              <span className="
                px-3 py-1
                rounded-full
                text-xs
                font-medium
                bg-slate-100
                text-slate-700
              ">
                {event.category}
              </span>

              {event.status === "registered" ? (
                <span className="
                  px-3 py-1
                  rounded-full
                  bg-green-50
                  text-green-700
                  text-xs
                  font-semibold
                ">
                  Registered
                </span>
              ) : (
                <span className="
                  px-3 py-1
                  rounded-full
                  bg-orange-50
                  text-orange-700
                  text-xs
                  font-semibold
                ">
                  Pending
                </span>
              )}

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}