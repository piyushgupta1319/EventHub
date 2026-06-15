import { User } from "lucide-react";

export default function OrganizerCard() {

  return (

    <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm p-10">

      <h2 className="text-3xl font-bold mb-8">
        Organizer
      </h2>

      <div className="flex items-center gap-6">

        <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center">

          <User
            size={32}
            className="text-blue-600"
          />

        </div>

        <div>

          <h3 className="text-2xl font-bold text-slate-900">
            EventHub Team
          </h3>

          <p className="text-slate-500 mt-2">
            Organizing workshops, hackathons and competitions.
          </p>

        </div>

      </div>

    </div>

  );
}