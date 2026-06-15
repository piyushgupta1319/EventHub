"use client";

import { useSession, signIn } from "next-auth/react";
import { useState } from "react";
import {
  Calendar,
  MapPin,
  Users,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

interface EventCardProps {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  image?: string;
  category: string;
  participants: number;
  capacity: number;
  organizer: string;
  isFeatured?: boolean;
  gradientFrom: string;
  gradientTo: string;
}

export default function EventCard({
  id,
  title,
  date,
  location,
  category,
  participants,
  capacity,
}: EventCardProps) {

  const { data: session } = useSession();
  const [participantsCount, setParticipantsCount] = useState<number>(participants);
  const [isRegistering, setIsRegistering] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const percentage = Math.min((participantsCount / capacity) * 100, 100);

  const handleRegister = async () => {
    if (!session?.user) {
      signIn();
      return;
    }

    if (isRegistered || isRegistering) return;

    setIsRegistering(true);

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ eventId: id }),
      });

      const data = await res.json();

      if (data.success) {
        setParticipantsCount((p) => p + 1);
        setIsRegistered(true);
      }

      alert(data.message);
    } catch (err) {
      console.error(err);
      alert('Registration failed');
    } finally {
      setIsRegistering(false);
    }
  };

  return (

    <div
      className="
      bg-white
      rounded-3xl
      border
      border-slate-200
      shadow-sm
      overflow-hidden
      hover:-translate-y-2
      hover:shadow-xl
      duration-300
      "
    >

      {/* Image */}
      <Link href={`/events/${id}`}>

        <div
          className="
          h-52
          bg-gradient-to-r
          from-blue-600
          to-violet-600
          relative
          "
        >

          <div className="absolute top-5 left-5">

            <span
              className="
              bg-white/20
              backdrop-blur-md
              text-white
              px-4
              py-2
              rounded-full
              text-sm
              font-semibold
              "
            >
              {category}
            </span>

          </div>

        </div>

      </Link>

      {/* Content */}
      <div className="p-7">

        <Link href={`/events/${id}`}>

          <h2
            className="
            text-2xl
            font-bold
            text-slate-900
            hover:text-blue-600
            transition
            line-clamp-2
            "
          >
            {title}
          </h2>

        </Link>

        {/* Date */}
        <div className="flex items-center gap-3 mt-6 text-slate-600">

          <Calendar size={18} />

          <span>{date}</span>

        </div>

        {/* Location */}
        <div className="flex items-center gap-3 mt-4 text-slate-600">

          <MapPin size={18} />

          <span>{location}</span>

        </div>

        {/* Participants */}
        <div className="flex items-center gap-3 mt-4 text-slate-600">

          <Users size={18} />

          <span>{participantsCount} Registered</span>

        </div>

        {/* Capacity */}
        <div className="mt-8">

          <div className="flex justify-between mb-2">

            <span className="text-sm text-slate-500">
              Seats Filled
            </span>

            <span className="text-sm font-medium text-slate-900">
              {participantsCount}/{capacity}
            </span>

          </div>

          <div className="h-2 bg-slate-200 rounded-full">

            <div
              className="h-2 bg-blue-600 rounded-full"
              style={{
                width: `${percentage}%`,
              }}
            />

          </div>

        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-4 mt-8">

          <button
            onClick={(e) => {
              e.preventDefault();
              handleRegister();
            }}
            disabled={isRegistering || isRegistered}
            className={`
            ${isRegistering || isRegistered ? 'opacity-60 cursor-not-allowed' : ''}
            bg-blue-600
            text-white
            py-3.5
            rounded-2xl
            font-semibold
            hover:bg-blue-700
            transition
            `}
          >
            {isRegistering ? 'Registering...' : isRegistered ? 'Registered' : 'Register'}
          </button>

          <Link
            href={`/events/${id}`}
            className="
            border
            border-slate-300
            text-slate-700
            py-3.5
            rounded-2xl
            font-semibold
            flex
            justify-center
            items-center
            gap-2
            hover:bg-slate-100
            transition
            "
          >
            Details

            <ArrowRight size={18} />

          </Link>

        </div>

      </div>

    </div>

  );
}
