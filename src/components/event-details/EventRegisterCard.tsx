
'use client';

import {
  Users,
  Share2,
  Calendar,
  MapPin,
} from "lucide-react";

interface Props {
  capacity: number;
  registered: number;
  location: string;
  date: string;
}

export default function EventRegisterCard({
  capacity,
  registered,
  location,
  date,
}: Props) {

  const seatsLeft = capacity - registered;

  const percentage =
    Math.min((registered / capacity) * 100, 100);

  return (

    <div
      className="
      sticky
      top-28
      bg-white
      rounded-[32px]
      border
      border-slate-200
      shadow-sm
      p-8
      "
    >

      {/* Title */}
      <h2 className="text-2xl font-bold text-slate-900">
        Ready to Join?
      </h2>

      <p className="text-slate-500 mt-2">
        Secure your seat before registrations close.
      </p>

      {/* Register Button */}
      <button
        className="
        w-full
        mt-8
        py-4
        rounded-2xl
        bg-blue-600
        text-white
        font-semibold
        hover:bg-blue-700
        transition
        "
      >
        Register Now
      </button>

      {/* Share Button */}
      <button
        className="
        w-full
        mt-4
        py-4
        rounded-2xl
        border
        border-slate-300
        flex
        justify-center
        items-center
        gap-3
        hover:bg-slate-50
        transition
        "
      >
        <Share2 size={18} />

        Share Event
      </button>

      {/* Seats */}
      <div className="mt-10">

        <div className="flex justify-between mb-3">

          <span className="text-slate-500">
            Seats Filled
          </span>

          <span className="font-semibold text-slate-900">
            {registered}/{capacity}
          </span>

        </div>

        <div className="h-3 bg-slate-200 rounded-full">

          <div
            className="h-3 rounded-full bg-blue-600"
            style={{
              width: `${percentage}%`,
            }}
          />

        </div>

      </div>

      {/* Seats Left */}
      <div className="mt-8 bg-slate-50 rounded-3xl p-6">

        <div className="text-slate-500">
          Seats Left
        </div>

        <div className="text-5xl font-bold text-blue-600 mt-2">
          {seatsLeft}
        </div>

      </div>

      {/* Divider */}
      <div className="border-t my-8" />

      {/* Event Info */}
      <div className="space-y-6">

        <div className="flex items-center gap-4">

          <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center">

            <Calendar
              size={20}
              className="text-blue-600"
            />

          </div>

          <div>

            <p className="text-sm text-slate-500">
              Date
            </p>

            <p className="font-semibold text-slate-900">
              {date}
            </p>

          </div>

        </div>

        <div className="flex items-center gap-4">

          <div className="w-12 h-12 rounded-2xl bg-violet-50 flex items-center justify-center">

            <MapPin
              size={20}
              className="text-violet-600"
            />

          </div>

          <div>

            <p className="text-sm text-slate-500">
              Location
            </p>

            <p className="font-semibold text-slate-900">
              {location}
            </p>

          </div>

        </div>

        <div className="flex items-center gap-4">

          <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center">

            <Users
              size={20}
              className="text-green-600"
            />

          </div>

          <div>

            <p className="text-sm text-slate-500">
              Registered Students
            </p>

            <p className="font-semibold text-slate-900">
              {registered}
            </p>

          </div>

        </div>

      </div>

    </div>

  );
}
