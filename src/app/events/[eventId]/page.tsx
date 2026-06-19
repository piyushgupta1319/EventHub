import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

import EventHero from "@/components/event-details/EventHero";
import EventAbout from "@/components/event-details/EventAbout";
import EventHighlights from "@/components/event-details/EventHighlights";
import EventRegisterCard from "@/components/event-details/EventRegisterCard";
import OrganizerCard from "@/components/event-details/OrganizerCard";
import RelatedEvents from "@/components/event-details/RelatedEvents";
import EventCountdown from "@/components/event-details/EventCountdown";


interface Props {
  params: Promise<{
    eventId: string;
  }>;
}

export default async function EventDetailsPage({
  params,
}: Props) {

  const { eventId } = await params;

  const event = await prisma.event.findUnique({
    where: {
      id: eventId,
    },
    include: {
      registrations: true,
    },
  });

  const relatedEvents = await prisma.event.findMany({
  where: {
    category: event?.category,
    NOT: {
      id: eventId,
    },
  },
  take: 4,
});

  if (!event) {
    notFound();
  }

  return (

    <div className="min-h-screen bg-slate-100 py-10">

      <div className="max-w-7xl mx-auto px-6">

        <EventHero
          title={event.title}
          category={event.category}
          location={event.location}
          date={new Date(event.eventDate).toLocaleDateString("en-GB")}
          registered={event.registrations.length}
        />

        <div className="mt-8">

  <EventCountdown
    eventDate={event.eventDate}
  />

</div>

        <div className="grid lg:grid-cols-3 gap-8 mt-10">

          <div className="lg:col-span-2 space-y-8">

            <EventAbout
              description={event.description}
            />

            <EventHighlights />

            <OrganizerCard />

            <RelatedEvents  events={relatedEvents} />

          </div>

          <EventRegisterCard
  capacity={event.capacity}
  registered={event.registrations.length}
  location={event.location}
  date={new Date(event.eventDate).toLocaleDateString("en-GB")}
/>

        </div>

      </div>

    </div>

  );
}