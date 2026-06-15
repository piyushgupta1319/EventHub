import { prisma } from "@/lib/prisma";
import EventsClient from "@/components/EventsClient";

export default async function EventsPage() {
  const events = await prisma.event.findMany({
    orderBy: {
      eventDate: "asc",
    },
    include: {
      _count: {
        select: { registrations: true },
      },
    },
  });

  // Transform events to include participants count
  const eventsWithParticipants = events.map((event) => ({
    ...event,
    participants: event._count.registrations,
    _count: undefined,
  }));

  return <EventsClient events={eventsWithParticipants as any} />;
}