import Link from "next/link";
import {
  Calendar,
  MapPin,
  CheckCircle,
} from "lucide-react";

import { getUserRegistrations, cancelRegistration } from "@/actions/registrationActions";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function MyEventsPage() {

  const session = await auth();

  if (!session?.user) {
    redirect('/auth/login');
  }

  const userId = session.user.id as string;

  const registrations = await getUserRegistrations(userId);

  return (
    <div className="min-h-screen bg-slate-100">

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Header */}

        <div className="bg-slate-900 rounded-3xl px-10 py-12 text-white shadow-xl mb-10">

          <h1 className="text-5xl font-bold mb-3">
            My Registrations
          </h1>

          <p className="text-slate-300 text-lg">
            Manage all your registered events.
          </p>

        </div>

        {/* Empty State */}

        {registrations.length === 0 ? (

          <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center shadow-md">

            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              No Registrations Found
            </h2>

            <p className="text-slate-500 mb-8">
              You haven't registered for any events yet.
            </p>

            <Link
              href="/events"
              className="
              inline-flex
              bg-blue-600
              hover:bg-blue-700
              text-white
              px-8
              py-3
              rounded-2xl
              font-semibold
              transition
              "
            >
              Browse Events
            </Link>

          </div>

        ) : (

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {registrations.map((registration) => (

              <div
                key={registration.id}
                className="
                bg-white
                rounded-3xl
                border
                border-slate-200
                shadow-md
                p-7
                hover:shadow-xl
                transition
                "
              >

                {/* Category Badge */}

                <span className="
                inline-flex
                bg-blue-50
                text-blue-700
                px-4
                py-2
                rounded-full
                text-sm
                font-medium
                mb-5
                ">
                  {registration.event.category}
                </span>

                {/* Title */}

                <h2 className="text-2xl font-bold text-slate-900 mb-5">

                  {registration.event.title}

                </h2>

                {/* Location */}

                <div className="flex items-center gap-3 text-slate-600 mb-4">

                  <MapPin
                    size={18}
                  />

                  {registration.event.location}

                </div>

                {/* Status */}

                <div className="flex items-center gap-3 text-green-600 font-medium mb-8">

                  <CheckCircle
                    size={18}
                  />

                  {registration.status}

                </div>

                {/* Buttons */}

                <div className="flex gap-3">

                  <Link
                    href={`/events/${registration.event.id}`}
                    className="
                    flex-1
                    text-center
                    bg-slate-900
                    hover:bg-black
                    text-white
                    py-3
                    rounded-2xl
                    font-medium
                    transition
                    "
                  >
                    View Event
                  </Link>

                  <form
                    action={async () => {
                      "use server";
                      await cancelRegistration(
                        registration.id
                      );
                    }}
                    className="flex-1"
                  >

                    <button
                      className="
                      w-full
                      border
                      border-red-200
                      text-red-600
                      hover:bg-red-50
                      py-3
                      rounded-2xl
                      font-medium
                      transition
                      "
                    >
                      Cancel
                    </button>

                  </form>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
}