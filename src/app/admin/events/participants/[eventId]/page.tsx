import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { Users, Mail, Calendar } from "lucide-react";

interface Props {
  params: Promise<{
    eventId: string;
  }>;
}

export default async function ParticipantsPage({
  params,
}: Props) {
  const { eventId } = await params;

  const event = await prisma.event.findUnique({
    where: {
      id: eventId,
    },
    include: {
      registrations: {
        include: {
          user: true,
        },
      },
    },
  });

  if (!event) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-100 py-12">

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="bg-slate-900 rounded-3xl p-10 text-white shadow-xl mb-10">

          <h1 className="text-5xl font-bold mb-4">
            {event.title}
          </h1>

          <div className="flex items-center gap-3 text-slate-300">

            <Users size={22} />

            <span className="text-xl">
              {event.registrations.length} Participants Registered
            </span>

          </div>

        </div>

        {/* Participants */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {event.registrations.map((registration) => (

            <div
              key={registration.id}
              className="
                bg-white
                rounded-3xl
                shadow-lg
                border
                border-slate-200
                p-8
                hover:shadow-2xl
                transition
              "
            >

              {/* Avatar */}

              <div className="w-16 h-16 rounded-full bg-slate-900 text-white flex items-center justify-center text-2xl font-bold mb-6">

                {registration.user.name[0]}

              </div>

              {/* Name */}

              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                {registration.user.name}
              </h2>

              {/* Email */}

              <div className="flex items-center gap-3 mb-5">

                <Mail className="text-blue-600" />

                <span className="text-slate-600">
                  {registration.user.email}
                </span>

              </div>

              {/* Date */}

              <div className="flex items-center gap-3">

                <Calendar className="text-green-600" />

                <span className="text-slate-600">

                  {registration.registeredAt.toLocaleDateString()}

                </span>

              </div>

            </div>

          ))}

        </div>

        {/* Empty State */}

        {event.registrations.length === 0 && (

          <div className="bg-white rounded-3xl shadow-lg p-16 text-center mt-10">

            <Users
              size={80}
              className="mx-auto text-slate-300 mb-6"
            />

            <h2 className="text-3xl font-bold text-slate-700 mb-3">
              No Participants Yet
            </h2>

            <p className="text-slate-500">
              Students who register for this event will appear here.
            </p>

          </div>

        )}

      </div>

    </div>
  );
}