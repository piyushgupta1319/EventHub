import { MapPin, Navigation } from "lucide-react";

interface Props {
  location: string;
}

export default function VenueCard({
  location,
}: Props) {

  return (

    <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm p-10">

      <h2 className="text-3xl font-bold text-slate-900 mb-8">
        Venue Details
      </h2>

      <div className="flex items-center gap-5">

        <div
          className="
          w-16
          h-16
          rounded-2xl
          bg-violet-50
          flex
          items-center
          justify-center
          "
        >

          <MapPin
            size={28}
            className="text-violet-600"
          />

        </div>

        <div>

          <h3 className="text-xl font-bold text-slate-900">
            Event Venue
          </h3>

          <p className="text-slate-500 mt-2">
            {location}
          </p>

        </div>

      </div>

      {/* Map Placeholder */}

      <div
        className="
        mt-8
        h-64
        rounded-3xl
        bg-gradient-to-br
        from-slate-100
        to-slate-200
        flex
        flex-col
        items-center
        justify-center
        "
      >

        <Navigation
          size={50}
          className="text-slate-400"
        />

        <p className="mt-4 text-slate-500">
          Google Maps integration coming soon
        </p>

      </div>

    </div>

  );

}
