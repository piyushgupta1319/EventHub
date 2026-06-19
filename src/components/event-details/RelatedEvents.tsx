import Link from "next/link";

interface Props {
  events: {
    id: string;
    title: string;
    category: string;
    location: string;
  }[];
}

export default function RelatedEvents({ events }: Props) {
  return (
    <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm p-10">

      <h2 className="text-3xl font-bold mb-10 text-gray-900">
        Related Events
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        {events.map((event) => (

          <Link
            key={event.id}
            href={`/events/${event.id}`}
            className="
            border border-slate-200
            rounded-3xl
            p-6
            hover:shadow-lg
            duration-300
            "
          >

            <div className="h-32 rounded-2xl bg-gradient-to-r from-blue-500 to-violet-600 mb-5"/>

            <h3 className="font-bold text-xl text-slate-900">
              {event.title}
            </h3>

            <p className="text-slate-500 mt-3">
              {event.location}
            </p>

          </Link>

        ))}

      </div>

    </div>
  );
}